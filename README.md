# Paşa Teknik | İzmir Balçova Klima, Kombi & Beyaz Eşya Teknik Servisi

Google Stitch üzerinde tasarlanan arayüzün optimize edilmiş, güvenli, yerel bilgisayarda (localhost) ve GitHub Pages üzerinde %100 uyumlu çalışan web sitesidir.

---

## 🛠️ Proje Mimarisi

- **Root Dosya:** `index.html` (Ana dizindedir, GitHub Pages doğrudan kök dizinden servis eder).
- **Dosya Yolları:** Tüm CSS, JS ve görsel referansları göreceli (`./`) olarak bağlanmıştır.
- **Güvenlik (Security & Headers):**
  - **CSP (Content Security Policy):** Katı kural seti ile zararlı harici script ve inject girişimleri engellenmiştir.
  - **XSS & Input Sanitization:** Form girdileri istemci tarafında temizlenir ve özel karakterler zararsız hale getirilir.
  - **Honeypot Spam Koruması:** Gizli `_gotcha` / honeypot alanı ve zaman tuzağı ile spam botlar engellenir.
  - **Güvenlik Başlıkları:** `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` meta etiketleri eklenmiştir.
- **Performans:**
  - Görsellerde `loading="lazy"` ve `decoding="async"` optimizasyonu.
  - Scriptler `defer` ile yüklenmektedir.
  - Google Fonts için `rel="preconnect"` optimizasyonu.
- **İletişim & Mobil Uyum:**
  - Mobil cihazlarda ekranın altında sabitlenmiş (sticky) **Ara** (`tel:+905538817127`) ve **WhatsApp** butonları aktiftir.
  - Ek olarak tüm ekranlarda sağ altta yüzen (floating) WhatsApp destek butonu mevcuttur.

---

## 🚀 Yerel Bilgisayarda (Localhost) Çalıştırma

Localhost üzerinde test etmek için aşağıdaki 3 pratik yöntemden birini seçebilirsiniz:

### Yöntem 1: NPM Scriptleri ile (Önerilen)
Komut satırını bu proje klasöründe açın:
```bash
npm run dev
# veya
npm start
```
Tarayıcınızda otomatik veya manuel olarak **`http://localhost:3000`** adresine gidin.

> **Windows PowerShell Notu:** Eğer PowerShell'de `npm.ps1 cannot be loaded` hatası alırsanız, `cmd.exe /c npm run dev` veya `npx serve .` komutunu kullanabilirsiniz.

---

### Yöntem 2: NPX ile Kurulumsuz Anında Başlatma
Node.js yüklü herhangi bir terminalden:
```bash
npx serve . -l 3000
```
veya
```bash
npx live-server --port=3000
```

---

### Yöntem 3: Python HTTP Sunucusu (Node.js Olmadan)
Eğer Python yüklüyse:
```bash
python -m http.server 3000
```
Tarayıcınızda `http://localhost:3000` adresini açın.

---

### Yöntem 4: Doğrudan Çift Tıklama
Proje saf statik (HTML/CSS/JS) yapıda olduğu için `index.html` dosyasına çift tıklayarak da doğrudan tarayıcınızda görüntüleyebilirsiniz.

---

## 🌐 GitHub Pages Üzerinde Ücretsiz Yayınlama (Deploy)

1. **GitHub'da Depo Oluşturun:**
   - [GitHub.com](https://github.com) adresinde yeni bir genel (Public) depo (repository) oluşturun (örneğin: `pasa-teknik`).
2. **Projeyi Gönderin (Push):**
   ```bash
   git init
   git add .
   git commit -m "feat: Pasa Teknik site hazir"
   git branch -M main
   git remote add origin https://github.com/<kullanici-adiniz>/<repo-adiniz>.git
   git push -u origin main
   ```
3. **GitHub Pages'i Açın:**
   - GitHub deponuzda **Settings (Ayarlar)** -> **Pages** sekmesine gelin.
   - **Build and deployment** altında Source olarak **"Deploy from a branch"** seçin.
   - Branch olarak **`main`** ve klasör olarak **`/ (root)`** seçip **Save** butonuna basın.
4. Birkaç dakika içinde siteniz `https://<kullanici-adiniz>.github.io/<repo-adiniz>/` adresinde yayında olacaktır!

---

## 📩 İletişim Formunu Formspree veya EmailJS ile Bağlama

`index.html` içerisindeki form:
```html
<form id="service-request-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
- [Formspree.io](https://formspree.io) üzerinden ücretsiz bir form oluşturup `YOUR_FORM_ID` yerine form kodunuzu yapıştırmanız yeterlidir.
- Eğer Formspree ID girilmezse, JavaScript katmanı formu otomatik olarak WhatsApp mesaj formatına dönüştürüp tek tıkla iletme seçeneği sunar.

---

## 📍 Firma ve İletişim Bilgileri

- **Firma Adı:** Paşa Teknik Klima & Beyaz Eşya Teknik Servisi
- **Adres:** Onur Mahallesi, Çağatay Sokak No:27 Balçova/İzmir
- **Telefon / WhatsApp:** +90 553 881 71 27
- **Çalışma Saatleri:** Haftanın 7 Günü 08:30 - 20:30
