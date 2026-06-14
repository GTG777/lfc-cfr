# LFC-CFR Website — UI/UX Design Specification

**Organization:** Labourers For Christ Center For Reconstruction  
**Prepared:** June 2026  
**Scope:** Design system, color tokens (4 palettes × light/dark), typography, components, layouts, and interactions.

---

## 1. Design Philosophy

The visual language draws from the cultural richness of the African American church tradition — jewel tones, gold, warmth, and dignity — while presenting a modern, accessible experience that communicates spiritual authority and community welcome. The design should feel like walking into a well-appointed sanctuary: structured, peaceful, and intentional.

**Four guiding principles:**
1. **Regal but welcoming** — Bold color, never cold
2. **Readable before beautiful** — Content legibility is non-negotiable
3. **Spiritually resonant** — Design choices should feel faith-grounded
4. **Universally accessible** — WCAG 2.1 AA minimum on all four palettes

---

## 2. Theme Architecture

The site supports **4 color palettes × 2 modes (light/dark) = 8 theme combinations.**

Themes are implemented as CSS custom properties on the `<html>` element:

```html
<html data-palette="A" data-mode="light">
```

The palette switcher lives in the **site footer** and persists the user's choice in `localStorage`. The dark/light toggle is in the **top navigation bar**.

### Theme Token Naming Convention

```
--color-bg          Page background
--color-surface     Card / section background (slightly offset from bg)
--color-surface-2   Elevated surface (modals, dropdowns)
--color-primary     Brand primary color (used in nav, headings, dividers)
--color-primary-hover
--color-accent      Gold / warm accent (CTAs, highlights, scripture rules)
--color-accent-hover
--color-support     Third color (used sparingly for contrast sections)
--color-text        Primary body text
--color-text-muted  Secondary / caption text
--color-text-on-primary  Text that sits ON the primary color
--color-text-on-accent   Text that sits ON the accent color
--color-border      Subtle borders and dividers
--color-cta         Primary CTA button background (usually accent)
--color-cta-text    CTA button label text
--color-focus       Keyboard focus ring color
```

---

## 3. Color Palettes

### PALETTE A — Kingdom Purple & Gold
*Purple = Kingdom of God / Royalty. Gold = Divine Glory.*  
*Most traditional Black church palette. Bold, unmistakably spiritual.*

#### Light Mode
```css
[data-palette="A"][data-mode="light"] {
  --color-bg:              #FAF7FF;
  --color-surface:         #F3EEFF;
  --color-surface-2:       #EDE5FF;
  --color-primary:         #6B21A8;
  --color-primary-hover:   #581C87;
  --color-accent:          #CA8A04;
  --color-accent-hover:    #A16207;
  --color-support:         #1E1B4B;
  --color-text:            #1C1917;
  --color-text-muted:      #57534E;
  --color-text-on-primary: #FFFFFF;
  --color-text-on-accent:  #1C1917;
  --color-border:          #DDD6FE;
  --color-cta:             #CA8A04;
  --color-cta-text:        #1C1917;
  --color-focus:           #9333EA;
}
```

#### Dark Mode
```css
[data-palette="A"][data-mode="dark"] {
  --color-bg:              #1A0A2E;
  --color-surface:         #2D1152;
  --color-surface-2:       #3B1970;
  --color-primary:         #9333EA;
  --color-primary-hover:   #A855F7;
  --color-accent:          #EAB308;
  --color-accent-hover:    #FBBF24;
  --color-support:         #7C3AED;
  --color-text:            #F5F0FF;
  --color-text-muted:      #C4B5FD;
  --color-text-on-primary: #FFFFFF;
  --color-text-on-accent:  #1A0A2E;
  --color-border:          #4C1D95;
  --color-cta:             #EAB308;
  --color-cta-text:        #1A0A2E;
  --color-focus:           #C084FC;
}
```

---

### PALETTE B — Crimson & Champagne Gold
*Crimson = Blood of Christ / Sacrifice / Passion. Gold = Covenant.*  
*Traditional Baptist/Apostolic warmth. Cathedral interior feel.*

#### Light Mode
```css
[data-palette="B"][data-mode="light"] {
  --color-bg:              #FDF5F0;
  --color-surface:         #FEF0EA;
  --color-surface-2:       #FDE8DE;
  --color-primary:         #7F1D1D;
  --color-primary-hover:   #6B0F0F;
  --color-accent:          #B8963E;
  --color-accent-hover:    #9A7A2A;
  --color-support:         #1E3A5F;
  --color-text:            #1A0A0C;
  --color-text-muted:      #6B5C5E;
  --color-text-on-primary: #FDF5F0;
  --color-text-on-accent:  #1A0A0C;
  --color-border:          #FECACA;
  --color-cta:             #B8963E;
  --color-cta-text:        #1A0A0C;
  --color-focus:           #B91C1C;
}
```

#### Dark Mode
```css
[data-palette="B"][data-mode="dark"] {
  --color-bg:              #180A0C;
  --color-surface:         #2C1014;
  --color-surface-2:       #3D161A;
  --color-primary:         #B91C1C;
  --color-primary-hover:   #DC2626;
  --color-accent:          #D4AF37;
  --color-accent-hover:    #EAB308;
  --color-support:         #1E3A5F;
  --color-text:            #FDF5F0;
  --color-text-muted:      #FCA5A5;
  --color-text-on-primary: #FDF5F0;
  --color-text-on-accent:  #180A0C;
  --color-border:          #7F1D1D;
  --color-cta:             #D4AF37;
  --color-cta-text:        #180A0C;
  --color-focus:           #F87171;
}
```

---

### PALETTE C — Midnight Navy & Amber Fire
*Navy = Heaven / Authority / Structure. Amber = Holy Spirit / Fire / Warmth.*  
*Most contemporary/editorial feel. Modern apostolic energy.*

#### Light Mode
```css
[data-palette="C"][data-mode="light"] {
  --color-bg:              #FBF5EE;
  --color-surface:         #FEF3E2;
  --color-surface-2:       #FDE8C0;
  --color-primary:         #0F172A;
  --color-primary-hover:   #1E293B;
  --color-accent:          #D97706;
  --color-accent-hover:    #B45309;
  --color-support:         #7C2D12;
  --color-text:            #0F172A;
  --color-text-muted:      #475569;
  --color-text-on-primary: #FBF5EE;
  --color-text-on-accent:  #0F172A;
  --color-border:          #FDE68A;
  --color-cta:             #D97706;
  --color-cta-text:        #0F172A;
  --color-focus:           #D97706;
}
```

#### Dark Mode
```css
[data-palette="C"][data-mode="dark"] {
  --color-bg:              #080E1C;
  --color-surface:         #0F1F3D;
  --color-surface-2:       #162B52;
  --color-primary:         #1E3A5F;
  --color-primary-hover:   #2A4A7A;
  --color-accent:          #F59E0B;
  --color-accent-hover:    #FBBF24;
  --color-support:         #EA580C;
  --color-text:            #F8F5F0;
  --color-text-muted:      #94A3B8;
  --color-text-on-primary: #F8F5F0;
  --color-text-on-accent:  #080E1C;
  --color-border:          #1E3A5F;
  --color-cta:             #F59E0B;
  --color-cta-text:        #080E1C;
  --color-focus:           #FBBF24;
}
```

---

### PALETTE D — Royal Emerald & Gold
*Emerald = Growth / Life / Restoration / Rebuild. Gold = Divine Reward.*  
*Afrocentric warmth. Visually distinctive — stands out from typical church sites.*

#### Light Mode
```css
[data-palette="D"][data-mode="light"] {
  --color-bg:              #F0FDF4;
  --color-surface:         #DCFCE7;
  --color-surface-2:       #BBF7D0;
  --color-primary:         #14532D;
  --color-primary-hover:   #166534;
  --color-accent:          #CA8A04;
  --color-accent-hover:    #A16207;
  --color-support:         #451A03;
  --color-text:            #14532D;
  --color-text-muted:      #4B7A5E;
  --color-text-on-primary: #F0FDF4;
  --color-text-on-accent:  #14532D;
  --color-border:          #A7F3D0;
  --color-cta:             #CA8A04;
  --color-cta-text:        #14532D;
  --color-focus:           #16A34A;
}
```

#### Dark Mode
```css
[data-palette="D"][data-mode="dark"] {
  --color-bg:              #071A0D;
  --color-surface:         #0F2E18;
  --color-surface-2:       #163D22;
  --color-primary:         #166534;
  --color-primary-hover:   #15803D;
  --color-accent:          #EAB308;
  --color-accent-hover:    #FBBF24;
  --color-support:         #78350F;
  --color-text:            #F0FDF4;
  --color-text-muted:      #86EFAC;
  --color-text-on-primary: #F0FDF4;
  --color-text-on-accent:  #071A0D;
  --color-border:          #14532D;
  --color-cta:             #EAB308;
  --color-cta-text:        #071A0D;
  --color-focus:           #4ADE80;
}
```

---

## 4. Typography

### Font Stack

| Role | Font | Fallback |
|---|---|---|
| Display / Hero | Playfair Display (serif) | Georgia, serif |
| Headings (H1–H3) | Playfair Display | Georgia, serif |
| Sub-headings (H4–H6) | Inter | system-ui, sans-serif |
| Body | Inter | system-ui, sans-serif |
| Scripture / Pull Quote | Lora (italic serif) | Georgia, serif |
| Labels / Caps | Inter (tracked uppercase) | system-ui, sans-serif |
| Monospace | JetBrains Mono | monospace |

Load via Google Fonts (subset to Latin, weight 400/600/700):
```
Playfair Display: 400, 600, 700, 400i
Inter: 400, 500, 600, 700
Lora: 400i, 600i
```

### Type Scale (rem)

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `--text-xs` | 0.75rem | 1rem | 400 | Captions, labels |
| `--text-sm` | 0.875rem | 1.25rem | 400 | Secondary body, nav items |
| `--text-base` | 1rem | 1.75rem | 400 | Primary body copy |
| `--text-lg` | 1.125rem | 1.75rem | 400 | Lead paragraphs |
| `--text-xl` | 1.25rem | 1.75rem | 600 | H6, card titles |
| `--text-2xl` | 1.5rem | 2rem | 600 | H5, H4 |
| `--text-3xl` | 1.875rem | 2.25rem | 700 | H3 (Playfair) |
| `--text-4xl` | 2.25rem | 2.5rem | 700 | H2 (Playfair) |
| `--text-5xl` | 3rem | 3.25rem | 700 | H1 (Playfair) |
| `--text-6xl` | 3.75rem | 4rem | 700 | Hero display |
| `--text-7xl` | 4.5rem | 4.75rem | 700 | Hero display XL |

### Typography Rules

- **Scripture quotes:** Lora italic, `--text-xl` to `--text-2xl`, `--color-accent` left border rule (3px), `--color-surface` background tint
- **Scripture references (e.g., Isaiah 58:12):** Inter 500, `--text-sm`, `--color-text-muted`, em dash before reference
- **Section labels:** Inter 600 uppercase, `--text-xs`, letter-spacing 0.15em, `--color-accent`
- **CTA text:** Inter 700, `--text-sm`, uppercase, letter-spacing 0.08em
- **Minimum body size:** 1rem / 16px on all viewports — never smaller
- **Line length:** max 65–70 characters for body copy (`max-w-[65ch]`)

---

## 5. Spacing & Grid

### Spacing Scale (Tailwind-compatible)
```
4px   → space-1
8px   → space-2
12px  → space-3
16px  → space-4
24px  → space-6
32px  → space-8
48px  → space-12
64px  → space-16
80px  → space-20
96px  → space-24
128px → space-32
```

### Page Grid

```
Mobile  (< 640px):   1 column,  16px gutters, 16px padding
Tablet  (640–1024px): 6 columns, 24px gutters, 32px padding
Desktop (> 1024px):  12 columns, 32px gutters, auto margins, max-width 1280px
```

### Section Vertical Rhythm

```
Section padding (mobile):   64px top / 64px bottom
Section padding (desktop): 96px top / 96px bottom
Between sections:           No extra margin — padding handles rhythm
```

---

## 6. Component Specifications

### 6.1 Navigation Bar

**Structure:**
```
[LOGO]   [Home] [About ▾] [Gathering ▾] [Outreach ▾] [Iaomai] [Affiliates ▾] [Contact]   [🌙] [GIVE]
```

**Behavior:**
- Sticky at top, scrolls with page until 60px from top → becomes fixed with backdrop blur
- Background: `--color-primary` (solid, no transparency on load; blur + slight opacity on scroll)
- Logo: SVG, white/light version for dark navbar
- Active link: `--color-accent` underline (2px, offset 4px)
- Hover: `--color-accent` text color transition (150ms ease)
- Dark/Light toggle: Moon/Sun icon, 40×40px touch target
- `GIVE` button: `--color-accent` bg, `--color-cta-text` text, rounded-full, px-5 py-2
- Dropdown: `--color-surface-2` bg, `--color-border` border, 4px border-radius, box-shadow

**Mobile (< 1024px):**
- Hamburger icon (24px, 3 lines) replaces nav links
- Full-screen slide-in from right: `--color-primary` bg, links stacked vertically
- GIVE button visible in mobile nav panel
- Dark/Light toggle stays in top bar

---

### 6.2 Hero Section

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│  [Background image or gradient overlay]              │
│                                                      │
│   Section label  (e.g., "WILLIAMSBURG, VIRGINIA")   │
│                                                      │
│   Labourers For Christ                               │ ← Playfair Display 56–72px
│   Center For Reconstruction                          │
│                                                      │
│   ─────────────────                                  │ ← accent color rule
│                                                      │
│   "Rebuilding People and Cities                      │ ← 20px Inter
│   for A Path of Kingdom Destiny!"                    │
│                                                      │
│   Isaiah 58:12                                       │ ← muted, sm
│                                                      │
│   [JOIN US]          [WORSHIP WITH US]               │
│                                                      │
└─────────────────────────────────────────────────────│
```

**Specs:**
- Min height: 85vh (mobile: 100vh)
- Overlay: `--color-primary` at 75% opacity over hero photo
- Scripture divider rule: 48px width, 3px height, `--color-accent`
- Scroll indicator: animated chevron-down at bottom center

---

### 6.3 Buttons

#### Primary CTA Button
```
Background:    --color-cta
Text:          --color-cta-text
Font:          Inter 700, text-sm, uppercase, tracking-wider
Padding:       14px 32px
Border-radius: 4px
Hover:         --color-accent-hover bg, scale(1.02)
Active:        scale(0.98)
Transition:    150ms ease
```

#### Secondary / Outline Button
```
Background:    transparent
Border:        2px solid --color-primary (light) / --color-accent (dark)
Text:          --color-primary (light) / --color-text (dark)
Padding:       12px 30px (accounts for 2px border)
Hover:         --color-primary bg, --color-text-on-primary text
```

#### Ghost Button (nav/footer)
```
Background:    transparent
Text:          --color-text-muted
Underline:     none
Hover:         --color-accent text, underline offset-2
```

---

### 6.4 Scripture / Pull Quote Block

```
┌────────────────────────────────────────────────────┐
│ ║  "Those from among you will rebuild the ancient  │
│ ║  ruins; you will raise up the age-old            │
│ ║  foundations..."                                  │
│ ║                                                   │
│     — Isaiah 58:12                                  │
└────────────────────────────────────────────────────┘
```

**Specs:**
- Left border: 3px solid `--color-accent`
- Background: `--color-surface`
- Text font: Lora italic, `--text-xl`
- Reference: Inter 500, `--text-sm`, `--color-text-muted`
- Padding: 24px left (after border gap), 20px top/bottom
- Border-radius: 0 4px 4px 0

---

### 6.5 Event Card

```
┌──────────────────────────┐
│  APR                     │ ← month label, accent color, xs caps
│  05                      │ ← day, 3xl Playfair, primary
│──────────────────────────│ ← accent rule
│  Resurrection Sunday     │ ← xl Inter 600
│  11:00 AM                │ ← sm text-muted
│  In-person · Facebook · Zoom │
│                          │
│  [VIEW SERVICE →]        │ ← ghost button
└──────────────────────────┘
```

**Specs:**
- Background: `--color-surface`
- Border: 1px `--color-border`
- Border-radius: 8px
- Hover: translate-y(-4px), box-shadow elevation, `--color-accent` border
- Transition: 200ms ease

---

### 6.6 Ministry / Program Card

```
┌──────────────────────────┐
│  [Icon — 40px]           │
│                          │
│  I AM the Storm          │ ← xl Playfair
│  Ministries              │
│                          │
│  An apostolic-evangelical│ ← base Inter
│  ministry that oversees  │
│  Ruby's Gems...          │
│                          │
│  [LEARN MORE →]          │
└──────────────────────────┘
```

**Grid:** 3 columns desktop, 2 tablet, 1 mobile  
**Hover:** Left border appears in `--color-accent` (3px), slight bg shift

---

### 6.7 Staff / Bio Card (Archbishop & Pastor)

```
┌────────────────────────────────────────────────────┐
│                                                    │
│  ┌──────────┐   Archbishop Dr. Nathaniel D. Isaac  │
│  │  PHOTO   │   Founder & Chief Executive          │
│  │  200×200 │                                      │
│  │  rounded │   Psy.D. · Licensed Psychologist     │
│  └──────────┘   APA Member · AACC Member           │
│                                                    │
│  "A Man In Whom There Is No Guile"  — John 1:47  │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Photo:** Circular crop, 200px, `--color-accent` ring (3px, offset 2px)  
**Title tag:** Inter 500 uppercase xs, `--color-accent`  
**Quote:** Lora italic

---

### 6.8 Wellness / Service Area Card

```
┌──────────────────────────────────┐
│  [Icon]  Depression              │
│  [Icon]  Anxiety                 │
│  [Icon]  Stress                  │
│  [Icon]  Anger                   │
│  [Icon]  Grief                   │
│  [Icon]  Biblical & Spiritual    │
└──────────────────────────────────┘
```

Pill-style tags: `--color-surface`, `--color-accent` text, 20px border-radius

---

### 6.9 Contact Form

**Fields:**
```
Name *          [________________________________]
Email *         [________________________________]
Phone           [________________________________]
Subject         [________________________________]
Message *       [________________________________]
                [________________________________]
                [________________________________]

                         [SEND MESSAGE →]
```

**Specs:**
- Input border: 1px `--color-border`
- Focus border: 2px `--color-focus`
- Error state: `--color-support` (red palette) border + message beneath
- Label: Inter 600, text-sm, `--color-text`
- Placeholder: `--color-text-muted`
- Border-radius: 4px
- Submit: Primary CTA button, full width on mobile

---

### 6.10 Prayer Request Form (Wailing Wall)

**Fields:**
```
Name or Initials *   [________________________________]
Prayer Request *     [________________________________]
                     [________________________________]
                     [________________________________]

                               [SUBMIT REQUEST →]
```

**Privacy notice** appears above the button:
> "Your request is completely confidential. We do not store contact information. Names may be submitted as initials only."

**Success state:** Inline confirmation, no page reload:
> "Your prayer request has been received. Our intercessors will be praying for you."

---

### 6.11 Giving Section

```
┌─────────────────────────────────────────────────────┐
│    "And may He multiply you a thousand times more   │
│     and bless you as He promised."                  │
│                                  — Deuteronomy 1:11 │
│                                                     │
│   ┌──────────────┐      ┌──────────────┐           │
│   │  CASH APP    │      │   PAYPAL     │           │
│   │  $LFCCFR     │      │  Donate Now  │           │
│   └──────────────┘      └──────────────┘           │
└─────────────────────────────────────────────────────┘
```

Background: `--color-primary` (full bleed, light text)  
Buttons: White bg, `--color-primary` text

---

### 6.12 Footer

**Structure:**
```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO]                                                         │
│  Rebuilding People and Cities for A Path of Kingdom Destiny!   │
│  Isaiah 58:12                                                   │
│                                                                 │
│  NAVIGATE          MINISTRIES          CONNECT                 │
│  Home              I AM the Storm      📘 Facebook             │
│  About Us          Ruby's Gems         📹 Zoom                 │
│  Church Gathering  Wailing Wall        ✉  lfccfr@gmail.com     │
│  Online Giving     Iaomai Wellness     📞 757.561.0737         │
│  Contact Us        7 Days Dead                                  │
│                                                                 │
│  📍 5252 Olde Towne Rd., Suite C, Williamsburg, VA 23188       │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  CHOOSE YOUR PALETTE:                                           │
│  [●A Kingdom Purple] [○B Crimson] [○C Navy & Amber] [○D Emerald]│
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  © 2017 by LFC Reconstruction          [Light ☀] [Dark 🌙]    │
└─────────────────────────────────────────────────────────────────┘
```

**Palette Switcher (Footer):**
- 4 pill buttons: each shows palette name and a small color swatch (primary + accent dots)
- Active: `--color-accent` border, `--color-surface-2` bg
- Inactive: `--color-border` border, transparent bg
- On select: CSS class swap on `<html>`, persisted to `localStorage`
- Transition: `color-scheme` switch with 200ms cross-fade on `background-color` and `color`

**Dark/Light Toggle (Footer + Nav):**
- Sun icon for light mode, Moon icon for dark mode
- Toggle in nav bar (top right, before GIVE button) AND in footer (bottom right)
- Both toggles stay in sync via shared state

---

## 7. Page Layout Templates

### 7.1 Interior Page Template

```
[STICKY NAV]

[PAGE HERO — 40vh]
  Primary color bg + page title (Playfair Display)
  Breadcrumb: Home > Section > This Page

[CONTENT BODY — max-width 800px centered]
  Content varies by page

[RELATED LINKS / NEXT STEPS]
  2–3 card CTAs to related pages

[FOOTER]
```

### 7.2 Home Page Flow

```
1. HERO (85vh) — Organization name, tagline, 2 CTAs
2. UPCOMING EVENTS — Horizontal scroll on mobile, 4-col grid desktop
3. ABOUT THE MINISTRY — 2 col: text left, photo right
4. OUR MINISTRIES — 3-col program card grid
5. HOW TO JOIN US — 3-col: In-Person | Facebook | Zoom
6. GIVING BANNER — Full-bleed primary color
7. PRAYER REQUEST CTA — Centered, --color-surface bg
8. FOOTER
```

### 7.3 Bio Pages (Archbishop / Pastor)

```
[PAGE HERO — 40vh, primary bg, name + title]

[2-COL SECTION]
  LEFT:  Circular portrait (300px) + credential badges
  RIGHT: Full biography text

[QUOTE BLOCK — full width accent bg]
  Scripture or personal quote

[SECTIONS]  (accordion on mobile, full text on desktop)
  Educational Achievements
  The Vocation
  The Life

[CTA] → Related: Iaomai Wellness / Our Church
```

### 7.4 Fasting & Prayer Page

```
[PAGE HERO]
  "FAST-Food Wednesdays"
  Every Wednesday, 6am–6pm

[CURRENT WEEK TEACHING]
  Scripture block
  Devotional text (expandable on mobile)

[TEACHING SERIES ARCHIVE]
  Numbered list: Weeks 1–7
  Each expandable accordion

[DOWNLOADABLE RESOURCES]
  Two resource cards (PDF links)

[GIVING CTA]
[FOOTER]
```

### 7.5 Memorial Page (Foundational Pillars)

```
[PAGE HERO — subdued, reverent]
  "The Pillars of this Ministry"
  Dedication quote

[MEMORIAL CARDS — 2-col]
  Dr. Doreathea L. Williams
  Elder Rosemary C. Isaac
  Each: B&W portrait (if available), dates, bio

[VERSE CLOSER — full width]
  Appropriate scripture / In Memoriam statement
```

---

## 8. Motion & Animation

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Page load | Fade in from y+16px | 400ms | ease-out |
| Nav dropdown open | Fade + y-8px → y-0 | 150ms | ease-out |
| Card hover | translate-y(-4px), shadow | 200ms | ease |
| Button hover | scale(1.02) | 150ms | ease |
| Button active | scale(0.98) | 100ms | ease |
| Theme switch | color/bg transition | 200ms | ease |
| Hero scroll indicator | bounce loop | 1.5s | ease-in-out |
| Scroll-triggered sections | Fade + y+24px → y-0 | 500ms | ease-out |
| Modal open | scale(0.95)→1 + fade | 200ms | ease-out |

**Reduced motion:** All animations respect `prefers-reduced-motion: reduce` — disable transitions, use instant switches.

---

## 9. Iconography

**Icon library:** Lucide Icons (MIT license, consistent 24px stroke style)

Key icons used:
- Navigation: Menu, X, ChevronDown, ChevronRight, Sun, Moon
- Contact: Mail, Phone, MapPin
- Social: Facebook (custom), Zoom (custom)
- Giving: Heart, DollarSign, CreditCard
- Church: Users, BookOpen, Star (for scriptures)
- Programs: Leaf (wellness), Shield (Warrior Bride), Gem (Ruby's Gems), Radio (Wailing Wall)

All icons: 24×24px, `--color-accent` for accent contexts, `--color-text-muted` for secondary

---

## 10. Accessibility Checklist

| Requirement | Implementation |
|---|---|
| Color contrast ≥ 4.5:1 (text) | Verified for all 8 theme combinations |
| Color contrast ≥ 3:1 (UI components) | Borders, icons, buttons verified |
| Focus indicators | 2px `--color-focus` ring, offset 2px, all interactive elements |
| Skip to main content link | First focusable element, visually hidden until focused |
| Keyboard navigation | Dropdown menus trap focus, Escape closes, arrow keys navigate |
| Screen reader | `aria-label` on icon-only buttons, `aria-current="page"` on active nav link |
| Form labels | All inputs have associated `<label>` or `aria-label` |
| Form errors | `aria-describedby` linking input to error message, `role="alert"` |
| Image alt text | All images: descriptive alt; decorative: `alt=""` |
| Heading hierarchy | One H1 per page; H2 → H3 → H4 in order, no skips |
| ARIA landmark roles | `<header>`, `<nav>`, `<main>`, `<footer>` used semantically |
| Live regions | Prayer form success/error uses `aria-live="polite"` |
| Theme persistence | `localStorage` for theme; `prefers-color-scheme` as default |

---

## 11. Responsive Behavior Summary

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navigation | Hamburger + drawer | Hamburger + drawer | Full horizontal nav |
| Hero | 100vh, centered text | 85vh, centered | 85vh, left-aligned |
| Events grid | 1 col / horizontal scroll | 2 col | 4 col |
| Ministry cards | 1 col | 2 col | 3 col |
| Bio layout | Stack (photo top) | Stack | 2-col side by side |
| Wellness resources | 1 col | 2 col | 3 col |
| Footer columns | 1 col stacked | 2 col | 4 col |
| Palette switcher | 2×2 grid | 4 in a row | 4 in a row |

---

## 12. Implementation Notes (Developer Handoff)

### Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        bg:         'var(--color-bg)',
        surface:    'var(--color-surface)',
        surface2:   'var(--color-surface-2)',
        primary:    'var(--color-primary)',
        accent:     'var(--color-accent)',
        support:    'var(--color-support)',
        foreground: 'var(--color-text)',
        muted:      'var(--color-text-muted)',
        border:     'var(--color-border)',
        cta:        'var(--color-cta)',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        quote:   ['Lora', 'Georgia', 'serif'],
      },
    },
  },
}
```

### Theme Switcher Logic (React)

```tsx
// hooks/useTheme.ts
const PALETTES = ['A', 'B', 'C', 'D'] as const
const MODES    = ['light', 'dark']    as const

export function useTheme() {
  const [palette, setPalette] = useState(() =>
    (localStorage.getItem('palette') as Palette) ?? 'A'
  )
  const [mode, setMode] = useState(() =>
    localStorage.getItem('mode') ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )

  useEffect(() => {
    document.documentElement.dataset.palette = palette
    document.documentElement.dataset.mode    = mode
    localStorage.setItem('palette', palette)
    localStorage.setItem('mode',    mode)
  }, [palette, mode])

  return { palette, setPalette, mode, setMode }
}
```

### CSS transition for smooth theme switch

```css
/* globals.css */
*, *::before, *::after {
  transition:
    background-color 200ms ease,
    border-color     200ms ease,
    color            200ms ease,
    box-shadow       200ms ease;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition: none !important;
  }
}
```

---

## 13. Palette Switcher — Footer Component Spec

```
CHOOSE YOUR THEME

[● A]  [○ B]  [○ C]  [○ D]
```

Each button:
- Width: 56px, height: 36px (mobile: full row, 2×2)
- Label: Letter + color dots (two 8px circles: primary + accent side by side)
- Active state: `--color-accent` 2px border, `--color-surface-2` background
- Inactive: `--color-border` 1px border, transparent bg
- Accessible: `aria-pressed="true/false"`, `aria-label="Palette A: Kingdom Purple and Gold"`
- On click: theme context updates → CSS vars swap → 200ms transition

**Visual reference of palette dots per button:**

| Button | Primary Dot | Accent Dot | Label |
|---|---|---|---|
| A | 🟣 #6B21A8 | 🟡 #CA8A04 | Kingdom Purple |
| B | 🔴 #7F1D1D | 🥇 #B8963E | Crimson |
| C | 🌑 #0F172A | 🟠 #D97706 | Midnight Navy |
| D | 🟢 #14532D | 🟡 #CA8A04 | Royal Emerald |
