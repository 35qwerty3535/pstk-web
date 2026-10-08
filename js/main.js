/**
 * Paşa Teknik - Ana JavaScript & Güvenlik Mantığı
 * XSS Koruması, Input Sanitization, Honeypot Spam Koruması, Hassas Scroll ve WhatsApp Entegrasyonu
 */

(function () {
  'use strict';

  // İletişim Bilgileri Sabitleri
  const CONFIG = {
    COMPANY_NAME: 'Paşa Teknik Klima & Beyaz Eşya Teknik Servisi',
    PHONE_RAW: '905538817127',
    PHONE_FORMATTED: '+90 553 881 71 27',
    ADDRESS: 'Onur Mahallesi, Çağatay Sokak No:27 Balçova/İzmir',
    MAPS_URL: 'https://www.google.com/maps/dir//Pa%C5%9Fa+Teknik+Klima+%26+Beyaz+E%C5%9Fya+Teknik+Servisi,+Onur,+%C3%87a%C4%9Fatay+Sk.+No:27,+35330+Bal%C3%A7ova%2F%C4%B0zmir/@38.3829725,27.0554264,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa308215099d85963:0x929a927a15ec7560!2m2!1d27.05109!2d38.3903424',
    MIN_SUBMIT_TIME_MS: 1200 // Bot yakalama için minimum form süresi
  };

  // Sayfa yüklenme zamanı (Bot tuzak süresi)
  const formLoadTimestamp = Date.now();

  /**
   * Güvenlik: İstemci Taraflı Metin Temizleyici (XSS & Script Injection Önleme)
   * HTML karakterlerini nötralize eder, ancak WhatsApp düz metnine zarar vermez.
   */
  function cleanTextInput(str) {
    if (typeof str !== 'string') return '';
    return str
      .trim()
      .replace(/<[^>]*>?/gm, '') // HTML taglerini tamamen temizle
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '');
  }

  /**
   * Telefon numarası temizleyici (Yalnızca rakamları filtreler)
   */
  function sanitizePhone(phone) {
    if (!phone) return '';
    return phone.replace(/\D/g, '');
  }

  /**
   * Bildirim (Toast) Gösterici
   */
  function showToast(message, type = 'success') {
    let toast = document.getElementById('form-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'form-toast';
      toast.className = 'fixed top-24 right-4 z-50 max-w-md p-4 rounded-xl shadow-2xl text-white transform transition-all duration-300 translate-y-[-20px] opacity-0 flex items-center gap-3';
      document.body.appendChild(toast);
    }

    if (type === 'success') {
      toast.className = 'fixed top-24 right-4 z-50 max-w-md p-4 rounded-xl shadow-2xl bg-status-success text-white transform transition-all duration-300 translate-y-0 opacity-100 flex items-center gap-3 border border-white/20';
      toast.innerHTML = `<span class="material-symbols-outlined text-2xl">check_circle</span><div><p class="font-bold text-sm">İşlem Başarılı</p><p class="text-xs opacity-95">${message}</p></div>`;
    } else {
      toast.className = 'fixed top-24 right-4 z-50 max-w-md p-4 rounded-xl shadow-2xl bg-error text-white transform transition-all duration-300 translate-y-0 opacity-100 flex items-center gap-3 border border-white/20';
      toast.innerHTML = `<span class="material-symbols-outlined text-2xl">error</span><div><p class="font-bold text-sm">Bilgi Eksik</p><p class="text-xs opacity-95">${message}</p></div>`;
    }

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-[-20px]', 'opacity-0');
    }, 4500);
  }

  /**
   * Hassas & Çerçeveye Tam Oturan Smooth Scroll Motoru
   * Tüm cihaz ve çözünürlüklerde sabit header arkasında kalmayı %100 önler.
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();

            // Header yüksekliğini anlık ve dinamik olarak al
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 100;

            // Ekran genişliğine göre ekstra nefes payı
            const extraGap = window.innerWidth >= 1024 ? 24 : 16;

            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const targetScrollPosition = Math.max(0, elementPosition - headerHeight - extraGap);

            window.scrollTo({
              top: targetScrollPosition,
              behavior: 'smooth'
            });

            // Tarayıcı URL hash'ini sayfayı sıçratmadan güncelle
            if (history.pushState) {
              history.pushState(null, null, targetId);
            }
          }
        }
      });
    });
  }

  /**
   * WhatsApp Servis Talep Formu ve Doğrulama
   */
  function initServiceForm() {
    const form = document.getElementById('service-request-form');
    if (!form) return;

    // Telefon maskeleme (Türkçe telefon formatı)
    const phoneInput = document.getElementById('customer-phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function (e) {
        let val = e.target.value.replace(/\D/g, '');
        if (val.startsWith('90')) val = val.substring(2);
        if (val.length > 10) val = val.substring(0, 10);

        if (val.length > 0) {
          let formatted = '';
          if (val.length <= 3) {
            formatted = val;
          } else if (val.length <= 6) {
            formatted = `(${val.slice(0, 3)}) ${val.slice(3)}`;
          } else if (val.length <= 8) {
            formatted = `(${val.slice(0, 3)}) ${val.slice(3, 6)} ${val.slice(6)}`;
          } else {
            formatted = `(${val.slice(0, 3)}) ${val.slice(3, 6)} ${val.slice(6, 8)} ${val.slice(8, 10)}`;
          }
          e.target.value = formatted;
        }
      });
    }

    // Tek Buton: WhatsApp ile Servis Talebi Gönder
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // 1. Spam Koruması: Honeypot Gizli Alanı
      const honeypot = document.getElementById('website_hp');
      if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Spam bot engellendi (Honeypot).');
        return;
      }

      // 2. Süre Tuzağı (Botlar saliseler içinde gönderir)
      const elapsed = Date.now() - formLoadTimestamp;
      if (elapsed < CONFIG.MIN_SUBMIT_TIME_MS) {
        showToast('Lütfen form alanlarını kontrol ederek tekrar deneyiniz.', 'error');
        return;
      }

      // 3. Girdileri Alma ve Temizleme
      const name = cleanTextInput(document.getElementById('customer-name')?.value || '');
      const rawPhone = document.getElementById('customer-phone')?.value || '';
      const phoneDigits = sanitizePhone(rawPhone);
      const serviceType = cleanTextInput(document.getElementById('service-type')?.value || 'Genel Servis');
      const district = cleanTextInput(document.getElementById('service-district')?.value || 'Balçova');
      const note = cleanTextInput(document.getElementById('service-note')?.value || '');

      // 4. Doğrulama (Zorunlu Alanlar)
      if (!name || name.length < 2) {
        showToast('Lütfen adınızı ve soyadınızı yazınız.', 'error');
        document.getElementById('customer-name')?.focus();
        return;
      }

      if (phoneDigits.length < 10) {
        showToast('Lütfen 10 haneli geçerli telefon numaranızı giriniz (örn: 553 881 71 27).', 'error');
        document.getElementById('customer-phone')?.focus();
        return;
      }

      // 5. WhatsApp Mesajını Hazırlama
      // Türkçe karakterlere ve WhatsApp Web / Mobile tam uyumlu, bozulmayan sade format:
      const lines = [
        '*PAŞA TEKNİK - HIZLI SERVİS TALEBİ*',
        '━━━━━━━━━━━━━━━━━━━━',
        '*Müşteri:* ' + name,
        '*İletişim:* ' + rawPhone,
        '*Bölge:* ' + district,
        '*Hizmet:* ' + serviceType,
        '*Açıklama:* ' + (note ? note : 'Arıza tespiti ve servis randevusu talep ediliyor.')
      ];

      const waMessage = lines.join('\n');
      const waUrl = `https://wa.me/${CONFIG.PHONE_RAW}?text=${encodeURIComponent(waMessage)}`;

      // 6. WhatsApp'a Yönlendirme ve Bildirim
      showToast('Talebiniz hazırlandı, WhatsApp açılıyor...', 'success');

      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }, 300);
    });
  }

  // DOM Yüklendiğinde başlat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initSmoothScroll();
      initServiceForm();
    });
  } else {
    initSmoothScroll();
    initServiceForm();
  }
})();
