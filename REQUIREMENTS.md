# LFC-CFR Website Redesign — Requirements Document

**Organization:** Labourers For Christ Center For Reconstruction (LFC-CFR)  
**Location:** 5252 Olde Towne Rd., Suite C, Williamsburg, VA 23188  
**Current Site:** https://www.lfc-cfr.com  
**Prepared:** June 2026

---

## 1. Project Overview

LFC-CFR is a faith-based ministry in Williamsburg, Virginia focused on community reconstruction through spiritual, mental, and physical wellness programming. The current site is a Wix-built property that is functional but dated in design and limited in capability. The goal of this redesign is to produce a modern, fast, accessible, and mobile-first website that better represents the ministry's mission and supports its growing programs.

**Core mission tagline:** *"Rebuilding People and Cities for A Path of Kingdom Destiny!"*  
**Anchor scripture:** Isaiah 58:12

---

## 2. Goals & Success Criteria

| Goal | Measure |
|---|---|
| Modernize visual design | Cohesive brand system with custom typography and color palette |
| Improve mobile experience | Fully responsive, Lighthouse mobile score ≥ 90 |
| Increase discoverability | SEO-optimized pages with proper meta, Open Graph, and structured data |
| Streamline giving | Frictionless, visible giving CTAs with Cash App + PayPal integrations |
| Enable prayer requests | Functional, privacy-respecting prayer request submission form |
| Support event promotion | Upcoming events section updated without developer involvement (CMS) |
| Connect community | Visible social links (Facebook Live, Zoom) on every relevant page |

---

## 3. Target Audience

- **Local community** (Williamsburg, VA) seeking a church home or spiritual community
- **Online congregation** attending via Facebook Live or Zoom
- **Individuals in crisis** seeking counseling, prayer, or wellness resources
- **Ministry partners and affiliates** (LFC Ministries Chicago, LFC-AEN)
- **Adolescent females (12–17)** targeted by Ruby's Gems mentorship program
- **Donors** looking to give financially to the ministry

---

## 4. Information Architecture

### 4.1 Site Map

```
HOME
├── ABOUT US
│   ├── Our Archbishop (Nathaniel D. Isaac)
│   ├── Our Pastor (Tandeka L. Isaac)
│   ├── Our Purpose
│   ├── Our Faith Principles
│   ├── Our Church
│   ├── The Foundational Pillars
│   └── Wellness Initiative
├── CHURCH GATHERING
│   ├── Building Block Sundays
│   ├── Corporate Fasting & Prayer
│   └── Resurrection / Easter Sunday
├── ONLINE GIVING
├── OUTREACH PROGRAMS
│   ├── I AM the Storm Ministries
│   │   ├── Ruby's Gems
│   │   └── Warrior Bride Ministry
│   ├── 7 Days Dead (Book)
│   └── Wailing Wall Ministry (Prayer Requests)
├── IAOMAI WELLNESS
├── AFFILIATE ORGANIZATIONS
│   ├── LFC Ministries / Headquarters (Chicago, IL)
│   └── LFC Apostolic Ecumenical Network (AEN)
└── CONTACT US
```

### 4.2 Navigation Design

- **Primary nav:** Sticky top navigation bar with logo, main links, and a prominent "Give" CTA button
- **Dropdown menus:** About Us, Church Gathering, Outreach Programs, Affiliate Organizations
- **Mobile nav:** Hamburger menu with full-screen slide-in panel
- **Footer nav:** Quick links to all main sections + social icons + contact info + copyright

---

## 5. Page-by-Page Requirements

### 5.1 Home Page

**Purpose:** First impression; communicate identity, upcoming events, and primary CTAs.

**Sections:**

1. **Hero**
   - Full-width banner with a professional photograph or branded graphic
   - Headline: organization name + tagline (*"Rebuilding People and Cities for A Path of Kingdom Destiny!"*)
   - Sub-headline: anchor scripture (Isaiah 58:12)
   - Two CTAs: **"Join Us"** (→ Contact) and **"Worship With Us"** (→ Church Gathering)

2. **Upcoming Events**
   - Card-based event listing, editable via CMS
   - Current recurring events to pre-populate:
     - FAST-Food Wednesdays — 6am–6pm (weekly)
     - Sunday School — 10:30am on-site / 10:45am virtual (weekly)
     - Building Block Sundays — 11:30am (weekly)
     - Resurrection Sunday 2026 — April 5, 11:00am
   - Each card: event name, date/time, format (in-person/virtual), and action link

3. **About the Ministry** *(brief)*
   - Two-column layout: text summary of Rebuild/Repair/Restore mission + leadership photo
   - Link: "Learn More About Us"

4. **Ministries & Programs** *(overview)*
   - Icon/card grid highlighting: I AM the Storm, Ruby's Gems, Wailing Wall, Iaomai Wellness, Building Block Sundays
   - Each card links to its dedicated page

5. **How to Attend**
   - Three-column block: In-Person | Facebook Live | Zoom
   - Include the Zoom join link and Facebook page link
   - Address for in-person

6. **Online Giving Banner**
   - Full-width accent section with Deuteronomy 1:11 quote
   - Two giving buttons: Cash App ($LFCCFR) and PayPal

7. **Prayer Request CTA**
   - Short section linking to Wailing Wall Ministry prayer form

8. **Social Proof / Community**
   - Facebook feed embed or latest post widget (if feasible)

---

### 5.2 About Us — Our Archbishop

**Content:**
- Name: Archbishop Dr. Nathaniel D. Isaac
- Title: Founder & Chief Executive, LFC-CFR; Archbishop within LFC Apostolic Ecumenical Network
- Ecclesiastical milestones: Consecrated Coadjutor Bishop (August 15, 2014); elevated to Archbishop (August 18, 2018)
- Education: BS Biology (Elizabeth City State University); MS Biomedical Science; MS Clinical Psychology; Psy.D. Clinical Psychology (Midwestern University)
- Memberships: American Psychological Association; American Association of Christian Counselors
- Current work: Bible-based instruction, mental health seminars, psychological assessment, individual/couples therapy, Christian counseling

**Layout:** Full bio with professional portrait, credential highlights as a visual timeline or badge list, link to Iaomai Wellness (his counseling practice)

---

### 5.3 About Us — Our Pastor

**Content:**
- Name: Pastor Tandeka L. Isaac
- Title: Founder, Chief Executive Overseer, Apostolic-Prophetic Pastor, LFC-CFR
- Background: North Carolina native; accepted Christ age 10; BA Sociology/Social Work (Elizabeth City State University); graduate studies toward M.Div. (Virginia Union University)
- Ordination: Licensed/ordained October 1998 (New Bethel Baptist Church); ordained into pastorate July 31, 2011 (via LFC-AEN); elevated to apostolic-prophetic status 2021
- Focus: Coaching, counseling, and inspiring spiritual and vocational growth

**Layout:** Full bio with portrait, key milestone timeline, pastoral philosophy quote block

---

### 5.4 About Us — Our Purpose

**Content:**
- Three pillars: **Rebuild · Repair · Restore** (Isaiah 58:12)
- Vision: Transform individuals → transform environments via education, empowerment seminars, counseling, therapeutic services, and multimedia
- Mission: Act as "Repairers and/or Restorers" to aid world transformation under the Holy Spirit's direction

**Layout:** Large scripture hero, three-icon pillar section, mission statement block, overview of transformation channels

---

### 5.5 About Us — Our Faith Principles

**Content (doctrinal statement):**
- The Godhead: Father, Son, and Holy Spirit — distinguishable but indivisible
- Jesus Christ: Fully divine and human; sole mediator between God and man
- Holy Spirit: Convicts of sin; guides toward godly living
- The Bible: Inspired, inerrant Word of God; complete revelation
- Salvation: Justification, sanctification, glorification
- The Church: Body of Christ formed at Pentecost
- Communion: Remembrance of Christ's sacrifice (bread and wine)
- Tithing & Giving: 10% plus voluntary offerings
- Future Events: Christ's return, bodily resurrection, rewards/judgment

**Layout:** Accordion or tabbed sections for each doctrine with scripture references; clean, readable typography

---

### 5.6 About Us — Our Church

**Content:**
- Identity: Body of Believers professing Jesus Christ as Savior and Lord; apostolic-prophetic spiritual covering; members come from varied denominational backgrounds
- Mission areas: REBUILD, REPAIR, RESTORE — through education, outreach, empowerment, counseling, therapeutic services
- Worship: Building Block Sundays at 11:30am; accessible via Facebook, BAND, or Zoom
- Programs: Ruby's Gems, Wailing Wall Ministry, LFC-AEN, Iaomai Wellness, I AM the Storm, 7 Days Dead
- Membership/Involvement: Open to those seeking a church home, spiritual accountability, or ministry partnership

**Layout:** Mission statement section, how-to-get-involved grid, service access options, programs list with links

---

### 5.7 About Us — The Foundational Pillars

**Content (memorial page):**
Dedicated to covenant members who have passed on:

- **Dr. Doreathea L. Williams (1952–2019):** Covenant partner since April 2017; prophetic intercessor; founder of the Wailing Wall Ministry; posthumously received honorary doctorate
- **Elder Rosemary C. Isaac (1952–2019):** Hosted the first church gathering (February 2017); first member ordained through LFC-CFR via LFC-AEN (August 2018)

**Layout:** Elegant memorial design; portrait photos (if available) in black-and-white or sepia; short bios with dates; scripture or dedication quote

---

### 5.8 About Us — Wellness Initiative

**Content:**
- Philosophy: Holistic health — spiritual, mental, physical
- Regional services listed:
  - **Williamsburg/Peninsula/Tidewater, VA:** Genesis Counseling Center; Iaomai Wellness
  - **Chicagoland, IL:** Family Health Center (Harvey, 708-596-5177); Campbell Health Solutions (Tinley Park, 708-277-6075); Genesis Therapy (Oak Forest)
- Scripture anchor: 3 John 1:2

**Layout:** Three-pillar wellness graphic (spiritual, mental, physical), regional resource cards with phone/address, link to Iaomai Wellness page

---

### 5.9 Church Gathering — Building Block Sundays

**Content:**
- Day/time: Sundays at 11:30am
- Format: In-person or virtual (Facebook Live, Zoom)
- Description: Teaching-focused, relaxed gathering guided by Archbishop Isaac; explores biblical principles for daily life
- Access info: Facebook (@lfcreconstruction), Zoom link

**Layout:** Schedule block, description, how-to-join options (three-card format), giving widget, link to other gathering types

---

### 5.10 Church Gathering — Corporate Fasting & Prayer

**Content:**
- **FAST-Food Wednesdays:** Every Wednesday, 6am–6pm
- Purpose: Bring body and appetites under subjection; increase dependence on God; discern God's will
- Alternative for health/limitation: Designate any period (5 min–12 hours) for undistracted prayer or Scripture study
- Teaching series themes (7 weeks):
  1. Preparing for spiritual upgrade
  2. Deliverance through transformation
  3. Claiming spiritual victory through Christ's redemption
  4. Sacred and strategic restructuring
  5. Building strength through life's difficulties
  6. Combating spiritual deception through Scripture
  7. Understanding Jesus's lordship and authority
- Downloadable resources: "The Ascension Journey" guide; "Corporate Fasting & Prayer Informational Guide"

**Layout:** Schedule display, purpose statement, teaching series list or timeline, downloadable resource cards (PDF links)

---

### 5.11 Church Gathering — Resurrection / Easter Sunday

**Content:**
- 2026 event: April 5, 2026 at 11:00am
- Highlights: Communion & Foot Washing
- Access: In-person, Facebook Live, or Zoom

**Layout:** Event hero with date countdown timer; service description; access options; giving CTA

---

### 5.12 Online Giving

**Content:**
- Scripture: Deuteronomy 1:11 (TLB) — *"And may He multiply you a thousand times more and bless you as He promised"*
- Giving methods:
  - Cash App: **$LFCCFR**
  - PayPal: Donation button
- Sacrificial giving: Special offerings beyond regular tithes, designated at Easter, Pentecost Sunday, and October
- Pledge guidance: Prayerfully determine giving amount outside normal contributions

**Layout:** Scripture hero, two large giving method buttons (Cash App + PayPal), explanation of sacrificial giving, FAQ-style section for first-time givers

---

### 5.13 Outreach Programs — Overview

**Content:**
- Tagline: *"The Church is not a building, it's a people!"*
- Programs listed:
  - Wailing Wall Ministry (intercessory prayer)
  - I AM the Storm Ministries (apostolic-evangelical; Ruby's Gems + Warrior Bride)
  - A Rude Awakening (community empowerment seminars)

**Layout:** Program card grid, each card with name, brief description, and "Learn More" link

---

### 5.14 Outreach Programs — I AM the Storm Ministries

**Content:**
- Leader: Apostolic Evangelist Ruby Edmonds
- Description: Sharing testimonies of faith and resilience; author, mother, entrepreneur
- Sub-programs:
  - **Ruby's Gems:** Mentorship for adolescent females; combines academic support with community building; promotes unity, friendship, sisterhood (ages 12–17)
  - **Warrior Bride Ministry:** Uplifts and encourages women and men in Christ; offers merchandise
- Affiliation: Operates under LFC-CFR umbrella

**Layout:** Ministry hero, leader bio with photo, sub-program cards, merchandise link (Warrior Bride), contact/interest form

---

### 5.15 Outreach Programs — 7 Days Dead

**Content:**
- Type: Digital book (modern miracle narrative)
- Availability: Amazon Kindle (pre-order/purchase)
- Connection: Part of I AM the Storm Ministries under LFC-CFR

**Layout:** Book cover display, description, Amazon Kindle purchase button, related ministry links

---

### 5.16 Outreach Programs — Wailing Wall Ministry

**Content:**
- Foundation: Isaiah 62:6 — appointed watchmen in constant prayer
- Function: Accept prayer requests placed in Prayer Wall Books; pray until divine direction to cease
- Privacy: Names required (initials acceptable); no phone or address collected
- Submit: Online prayer request form

**Layout:** Scripture hero, ministry description, privacy statement, prayer request submission form (name/initials + request text), confirmation message

---

### 5.17 Iaomai Wellness

**Content:**
- Name pronunciation: "ee-yah-my"
- Provider: Dr. Nathaniel D. Isaac, Psy.D., Licensed Clinical Psychologist
- Description: Combines psychological insights with biblical practice toward wholeness
- Services:
  - Individual, couples, and Christian counseling (adolescents and adults)
  - Mental health consultation
  - Mental health seminars and trainings
- Treatment areas: Depression, anxiety, stress, anger, grief, biblical/spiritual issues
- Availability:
  - **Illinois residents:** Virtual/online (insurance may apply — inquire)
  - **Virginia residents:** Virtual or in-person (insurances not currently accepted)
- Contact: 708.580.7787 | iaomaiwellness1@gmail.com | 5252 Olde Towne Rd., Suite C, Williamsburg, VA 23188
- Resources: Referral determination form, client portal registration, online check-in

**Layout:** Service overview hero, provider bio with credentials, service cards by treatment area, location/insurance details, intake form links (referral form, client portal, online check-in), contact block

---

### 5.18 Affiliate Organizations — Overview

**Content:**
- Purpose: *"The #1 Source for Information about Organizations affiliated with LFC-CFR"*
- Two affiliates: LFC Ministries (Chicago) and LFC Apostolic Ecumenical Network

**Layout:** Intro section, two affiliate cards with links to their dedicated sub-pages

---

### 5.19 Affiliate Organizations — LFC Ministries / Headquarters

**Content:**
- Full name: Labourers For Christ Ministries (LFCM)
- Location: 150 E. 124th Place, Chicago, IL 60628 | Mailing: P.O. Box 2081, Matteson, IL 60443
- Leader: Apostle Dr. Shawnette A. Houghton — Founder (est. June 1997), Senior Pastor, Presiding Prelate of LFC-AEN
- Services: Sundays 10:30am (Facebook Live); Wednesdays 7:00pm (Zoom)
- Contact: 773.779.2900 | mail@labourersforchrist.org
- Giving: Cash App $LFCMinistries1997, Zelle, PayPal, mailed check
- Mission: *"Reap the thousand fold harvest, one soul at a time"*

**Layout:** Organization profile card, leadership bio, service schedule, contact + giving info, external website link

---

### 5.20 Affiliate Organizations — LFC Apostolic Ecumenical Network (AEN)

**Content:**
- Description: Association of individuals, churches, and faith-based organizations unified through shared Christian faith
- Tagline: *"Transcending the Nuances that Divide Us"*
- Presiding Prelate/Founder: Apostle Dr. S.A. Houghton
- Purpose (Ephesians 4:12–16): Networking, partnering, symposiums, conferences, global evangelical missions
- Annual event: Apostolic Ecumenical Assemblage (typically August)
- Membership: Open to interested parties
- Contact: aen.lfc@gmail.com | P.O. Box 2081, Matteson, IL 60443 | 773.779.2900
- Resource: AEN Brochure Flipbook (link)

**Layout:** Network description, leadership, annual event highlight, membership CTA, contact block, brochure download link

---

### 5.21 Contact Us

**Content:**
- Headline: *"We Want To Hear From You!"*
- Sub-text: *"Interested in joining our ministry?"*
- Physical address: 5252 Olde Towne Rd., Suite C, Williamsburg, VA 23188
- Mailing: P.O. Box 6561, Williamsburg, VA 23188
- Email: lfccfr@gmail.com
- Phone: 757.561.0737
- Contact form fields: Name, Email, Phone (optional), Subject, Message

**Layout:** Two-column layout (form left, contact details + map right); Google Maps embed; social links; success/error state on form submission

---

## 6. Design Requirements

### 6.1 Visual Identity

| Element | Specification |
|---|---|
| **Color palette** | Primary: Deep navy or rich purple (conveys faith, authority); Accent: Gold/amber (conveys Kingdom, glory); Neutral: Off-white / warm gray for backgrounds |
| **Typography** | Display font: Modern serif (e.g., Playfair Display or similar) for headings; Body: Clean sans-serif (e.g., Inter or Lato) for readability |
| **Imagery** | High-quality photography of leadership, congregation, community events; no stock photo feel; consistent warm-toned edit |
| **Iconography** | Custom or licensed faith-themed icon set; consistent stroke weight |
| **Logo** | Existing logo preserved; SVG format required for retina displays |

### 6.2 Layout & UX Principles

- **Mobile-first design:** Designed for phone, enhanced for tablet and desktop
- **Generous white space:** Clean, uncluttered sections; avoid the visual density of the current Wix site
- **Clear hierarchy:** Every page has one primary CTA; secondary actions are visually subordinate
- **Consistent section rhythm:** Alternating light/dark background sections for visual flow
- **Accessibility:** WCAG 2.1 AA minimum; sufficient color contrast; keyboard navigable; screen reader friendly

### 6.3 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| < 640px | Mobile (single column) |
| 640px–1024px | Tablet (adjusted grid) |
| > 1024px | Desktop (full layout) |

---

## 7. Functional Requirements

### 7.1 Contact Form
- Fields: Name, Email, Phone (optional), Subject, Message
- Validation: Client-side + server-side
- Success state: Confirmation message displayed in-page
- Backend: Form submission via email to lfccfr@gmail.com (e.g., Resend, Formspree, or custom API)
- No CAPTCHA UX friction; use honeypot or rate limiting

### 7.2 Prayer Request Form (Wailing Wall Ministry)
- Fields: Name or Initials, Prayer Request (textarea)
- Privacy notice displayed before submission
- Confirmation message: *"Your prayer request has been received. We will be praying for you."*
- Submission delivered to ministry inbox

### 7.3 Online Giving
- Two external link buttons (Cash App, PayPal) — no on-site payment processing required
- Optional: PayPal embedded donate button
- Sacrificial giving explanation with scheduled giving periods

### 7.4 Events Management (CMS)
- Editable events list via CMS (headless CMS or built-in, e.g., Sanity, Contentful, or Next.js-based MDX)
- Fields per event: Title, Date, Time, Format (in-person/virtual/both), Description, Link/CTA
- No-code editing for non-technical staff

### 7.5 Downloadable Resources
- Corporate Fasting & Prayer: "The Ascension Journey" PDF and "Corporate Fasting & Prayer Informational Guide" PDF
- Hosted on-site or via Google Drive link
- 7 Days Dead: External Amazon Kindle link

### 7.6 Social & Live Stream Integration
- Facebook page link: https://www.facebook.com/lfcreconstruction
- Zoom join link: current link embedded on relevant pages
- Optional: Facebook feed widget on homepage

### 7.7 Navigation
- Active state highlights current page in nav
- Smooth scroll for same-page anchor links
- Back-to-top button on long pages

### 7.8 Search
- Basic site search (nice to have, not required for MVP)

---

## 8. Technical Requirements

### 8.1 Recommended Stack

| Layer | Recommendation |
|---|---|
| **Framework** | Next.js 14+ (App Router) — SEO-friendly SSR/SSG, React ecosystem |
| **Styling** | Tailwind CSS — rapid, consistent, responsive utility classes |
| **CMS** | Sanity.io or Contentful — no-code editing for events and announcements |
| **Hosting** | Vercel (pairs with Next.js for zero-config deploys) |
| **Forms** | Resend (email API) or Formspree |
| **Domain** | lfc-cfr.com (existing; DNS transfer to Vercel or retain registrar) |

### 8.2 Performance

- Lighthouse performance score ≥ 90 on mobile and desktop
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID/INP < 200ms
- Images: WebP format, `next/image` optimization, lazy loading
- Fonts: Self-hosted or subset from Google Fonts to minimize layout shift

### 8.3 SEO

- Unique `<title>` and `<meta description>` per page
- Open Graph tags for social sharing (Facebook previews)
- JSON-LD structured data: Organization, LocalBusiness, Event (for services/gatherings)
- Canonical URLs
- XML sitemap generated automatically
- robots.txt configured

### 8.4 Accessibility (WCAG 2.1 AA)

- Color contrast ratio ≥ 4.5:1 for body text
- All interactive elements keyboard-navigable and have focus indicators
- All images have descriptive alt text
- Form inputs have associated `<label>` elements
- Skip-to-main-content link at page top
- ARIA roles on modals, dropdowns, and nav

### 8.5 Security

- HTTPS enforced (SSL via Vercel or Cloudflare)
- Form submissions: CSRF protection, rate limiting, honeypot field
- No sensitive credentials in client-side code
- Content Security Policy headers

### 8.6 Analytics

- Google Analytics 4 (or privacy-first alternative like Plausible)
- Track: Page views, giving CTA clicks, form submissions, event card clicks

---

## 9. Content Migration Checklist

| Content Item | Source Page | Action |
|---|---|---|
| Archbishop bio + credentials | /our-bishop | Migrate; request updated portrait photo |
| Pastor bio + credentials | /our-pastor | Migrate; request updated portrait photo |
| Purpose / Vision / Mission | /copy-of-our-vision | Migrate verbatim; add visual design |
| Faith Principles (9 doctrines) | /our-faith-principles | Migrate; add scripture references |
| Church overview | /our-church | Migrate; refresh language |
| Foundational Pillars memorial | /the-foundational-pillars | Migrate; request memorial photos |
| Wellness Initiative resource list | /copy-of-outreach-programs | Migrate; verify phone numbers still active |
| Building Block Sunday details | /buildingblock | Migrate; update Zoom link if changed |
| Fasting guide PDFs | /corporate-fasting-prayer | Re-host PDFs; update teaching series if current |
| Resurrection Sunday 2026 | /resurrection-easter-sunday | Migrate; build reusable annual event template |
| Giving instructions | /online-giving | Migrate; verify Cash App + PayPal handles |
| IATSM + Ruby's Gems info | /iatsm | Migrate; request Ruby Edmonds photo |
| 7 Days Dead Amazon link | /7daysdead | Update with current Amazon URL |
| Wailing Wall prayer form | /wailing-wall-ministry | Rebuild with functional form backend |
| Iaomai Wellness services | /iaomai | Migrate; update insurance/availability details |
| LFCM affiliate info | /lfcm | Migrate; verify Chicago service times |
| AEN info + brochure | /lfc-aen | Migrate; re-host AEN brochure or link to current |
| Contact details | /contact-us | Migrate; rebuild form with email backend |
| All photography | Site-wide | Audit; replace low-res images with high-res versions |

---

## 10. Out of Scope (MVP)

The following are excluded from the initial release but noted for future phases:

- Member portal / login-gated content
- Sermon archive / podcast player
- Online event registration (RSVP)
- E-commerce for Warrior Bride Ministry merchandise
- Live chat widget
- Multi-language support
- Mobile app

---

## 11. Assumptions & Open Questions

| # | Item |
|---|---|
| 1 | Does the organization have a brand kit (logo files, existing colors)? If not, a brand discovery session is needed before design begins. |
| 2 | Who will manage the CMS day-to-day? This determines CMS complexity and onboarding needs. |
| 3 | Are updated professional photos available for Archbishop and Pastor Isaac, or does a photo shoot need to be scheduled? |
| 4 | Does the Zoom meeting link change per service, or is there a permanent room link? |
| 5 | Should the prayer request form route to the general inbox (lfccfr@gmail.com) or a separate Wailing Wall inbox? |
| 6 | Is the current lfc-cfr.com domain managed through Wix? Domain transfer to new host will need to be coordinated. |
| 7 | Are the downloadable PDFs (Ascension Journey, Fasting Guide) current and approved for re-publishing? |
| 8 | Is the 7 Days Dead book currently available on Amazon, or is it still in pre-order status? |
| 9 | Should Iaomai Wellness be a section of lfc-cfr.com or a separate domain (iaomaiwellness.com)? |
| 10 | What is the desired launch timeline and budget range? |

---

## 12. Appendix — Key External Links & Accounts

| Resource | URL / Handle |
|---|---|
| Current website | https://www.lfc-cfr.com |
| Facebook | https://www.facebook.com/lfcreconstruction |
| Zoom (current) | https://us02web.zoom.us/j/88237005419 |
| Cash App | $LFCCFR |
| PayPal | (existing PayPal account) |
| LFC Ministries HQ | https://labourersforchrist.org |
| Present Choice Center | https://presentchoicecente.wixsite.com/presentchoicecente-1 |
| Amazon (7 Days Dead) | amazon.com (Kindle — current listing URL needed) |
| Iaomai Wellness email | iaomaiwellness1@gmail.com |
| Iaomai Wellness phone | 708.580.7787 |

---

*Document prepared by reviewing all 22 pages of the current lfc-cfr.com website.*  
*Review and approve before development begins.*
