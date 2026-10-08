---
name: Technical Precision & Service Assurance
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#424751'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737782'
  outline-variant: '#c2c6d3'
  surface-tint: '#245eaa'
  primary: '#00366e'
  on-primary: '#ffffff'
  primary-container: '#004c97'
  on-primary-container: '#9bbfff'
  inverse-primary: '#a9c7ff'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#2f373e'
  on-tertiary: '#ffffff'
  tertiary-container: '#464e55'
  on-tertiary-container: '#b7bfc8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468c'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#dbe3ec'
  tertiary-fixed-dim: '#bfc7d0'
  on-tertiary-fixed: '#151c23'
  on-tertiary-fixed-variant: '#40484f'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  cta-hover: '#E05300'
  surface-ice: '#F4F8FD'
  border-subtle: '#D8E5F3'
  status-success: '#16A34A'
  slate-muted: '#64748B'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies reliability, technical proficiency, and immediate local service credibility for residential and commercial technical maintenance. The aesthetic balances authoritative engineering dependability with energetic, actionable accessibility. It serves homeowners, property managers, and businesses seeking urgent appliance diagnostics and HVAC servicing in coastal metropolitan regions.

The aesthetic philosophy is **Corporate / Modern** injected with high-contrast utility cues. Layouts present structured grid alignments, clean visual hierarchy, and decisive actionable touchpoints. Clear spatial relationships replace visual clutter, fostering confidence through transparent pricing badges, technician dispatch readiness, and clear diagnostic workflows.

## Colors

The palette establishes an immediate balance between calm diagnostic authority and rapid emergency responsiveness.

- **Primary (`#004C97`)**: Deep navy engineered for institutional trust, dominant across headers, hero backgrounds, primary headings, and operational certification indicators.
- **Secondary (`#FF6B00`)**: High-visibility safety orange reserved strictly for high-conversion mechanisms: emergency telephone triggers, dispatch booking CTAs, urgency badges, and pricing highlights.
- **Tertiary (`#EBF3FC`)**: Soft icy blue that forms contextual section backings, feature card containers, and technician detail panels, visually nodding to climate control and refrigeration.
- **Neutral (`#0F172A`)**: Deep slate creating crisp contrast against light backgrounds, anchoring typography and high-density technical specifications.

### Functional Roles
- `cta-hover` (`#E05300`): Deepened orange for active and hover button states.
- `surface-ice` (`#F4F8FD`): Ultra-light tint for table alternating rows and inner card slots.
- `border-subtle` (`#D8E5F3`): Low-contrast border color separating technical specifications without harsh lines.
- `status-success` (`#16A34A`): Confirmed dispatch slots and genuine parts guarantee badges.
- `slate-muted` (`#64748B`): Secondary technical documentation, meta-labels, and operating hours.

## Typography

The typography relies on Plus Jakarta Sans across all levels. Its balanced geometric construction provides readability at small sizes while projecting modern confidence in prominent headlines.

Numbers and contact figures require tabular numeral features (`font-feature-settings: 'tnum' on`) to ensure phone numbers, pricing tables, and estimated time-of-arrival counters remain aligned. Hero headlines favor tight negative tracking to deliver high-impact value statements, whereas microcopy and utility badges use expanded tracking and heavy weights for readability under bright field conditions.

## Layout & Spacing

The layout is built upon an 8px modular baseline inside a 12-column responsive grid on desktop and tablet, collapsing to a single-column stacked hierarchy on mobile viewports.

- **Desktop (1024px and above)**: 12 columns, fixed max container width of 1240px, with `gutter: 1.5rem` and outer bounds at `margin: 2rem`. Emergency sidebars and fast-booking panels lock to a 4-column span against an 8-column detail block.
- **Tablet (768px - 1023px)**: 8 columns, unified side paddings, collapsing lateral reservation panels into persistent bottom floating banners.
- **Mobile (below 768px)**: 4 columns or single stack, with `margin-mobile: 1rem` and compact vertical density to guarantee that booking triggers and immediate phone dials sit above the standard thumb fold.

Vertical rhythm adheres strictly to semantic spacing: components internal elements utilize `space-xs` through `space-md`, cards and modules use `space-lg` to `space-xl`, and major service sections breathe with `space-2xl` and `space-3xl`.

## Elevation & Depth

Visual depth is achieved through crisp, light-cast ambient shadows paired with tonal border framing. This avoids heavy drop shadows in favor of a clean, clinical feel.

- **Level 0 (Flat)**: Background sections and canvas surfaces (`#FFFFFF` and `#F4F8FD`).
- **Level 1 (Structural Card)**: Service diagnostic cards and badge listings. Outlined with `1px solid #D8E5F3` and supported by an ultra-soft vertical drop: `box-shadow: 0 1px 3px 0 rgba(0, 76, 151, 0.04), 0 1px 2px -1px rgba(0, 76, 151, 0.04)`.
- **Level 2 (Active/Hover Cards & Floating Controls)**: Interactive service units and appointment booking selectors. Elevated with `box-shadow: 0 10px 15px -3px rgba(0, 76, 151, 0.08), 0 4px 6px -4px rgba(0, 76, 151, 0.04)` and a distinct border highlight.
- **Level 3 (Emergency Flyouts & Modals)**: Critical call-out banners and quick-dial popovers. Supported by an ambient blue-tinted elevation: `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`.

## Shapes

The interface balances sharp industrial reliability with accessible, approachable touch targets. Components employ standard `0.5rem` (`rounded`) curvature for input controls, nested chips, and tabular headers. Primary service cards and contextual feature enclosures employ `1rem` (`rounded-lg`) to `1.5rem` (`rounded-xl`) to delineate distinct service modules clearly.

CTAs, urgency tags, and contact pills use rounded geometries to draw eye movement without breaking the structural grid.

## Components

### Buttons
- **Primary Conversion CTA**: Solid `#FF6B00` background, pure white bold text, rounded geometry with padding `0.875rem 1.75rem`. Hover state switches to `#E05300` with subtle upward transform (`translateY(-1px)`).
- **Secondary Dispatch Action**: Solid `#004C97` background, white text, matching padding and shape for verified service bookings and location lookups.
- **Tertiary / Direct Phone Dial**: Transparent background with a `2px solid #004C97` perimeter, slate or primary typography, and an integrated telephone icon.

### Chips & Trust Badges
- **Emergency / Speed Indicator**: Compact badges featuring `#FF6B00` text against a 10% opacity orange fill (`rgba(255, 107, 0, 0.1)`), uppercase `label-sm` typography, and pill radius.
- **Warranty & Brand Assurance**: Light icy background (`#EBF3FC`), `#004C97` text, fine border (`#D8E5F3`), paired with an SVG shield or checkmark icon.

### Service & Diagnostic Cards
- Encased in pure white `#FFFFFF` with a `1px solid #D8E5F3` outline, `rounded-xl` shape, and Level 1 elevation.
- Includes a dedicated header slot featuring a cool icy-blue icon badge (`#EBF3FC`), bold service category heading, explicit coverage bullet points, and an explicit inline pricing or timeline prompt.
- On hover, transitions border color to `#004C97` and elevates to Level 2.

### Form Inputs & Selectors
- Background `#FFFFFF`, border `1.5px solid #D8E5F3`, text `#0F172A`, placeholder `#64748B`.
- Border transitions cleanly to `#004C97` with a `0 0 0 3px rgba(0, 76, 151, 0.15)` focus ring.
- Input fields match an ergonomic 48px target height for quick on-the-go mobile submission.

### Checkboxes & Radios
- Square with `0.25rem` radius for checkboxes; full circles for radio selectors.
- Inactive state: `1.5px solid #D8E5F3`. Active state: filled with `#004C97`, featuring a crisp white SVG check or dot marker.

### Technical Service List Items
- Structured row-based layout separated by subtle `#D8E5F3` dividers.
- Accompanied by fixed-width leading icons in `#004C97` and trailing status indicators (e.g., "Aynı Gün Servis", "Orijinal Parça Garantisi").