# Gold Mining Experts — Corporate Website

> A premium, institutional-grade corporate website for **Gold Mining Experts**, a gold mining company engaged in the acquisition, exploration and development of precious metal projects. Design and copy modeled after [gmin.gold](https://gmin.gold/).

---

## Project Overview

| Attribute | Detail |
|-----------|--------|
| **Type** | Static multi-page website (HTML/CSS/JS) |
| **Brand** | Gold Mining Experts |
| **Reference** | [gmin.gold](https://gmin.gold/) — G Mining Ventures |
| **Pages** | 7 (Home, About, Projects, ESG, Careers, Newsroom, Contact) |
| **Design System** | Custom CSS design tokens (navy/gold palette, Playfair Display + Inter) |
| **Animations** | IntersectionObserver scroll reveals, parallax hero, counter animations |
| **Server** | PowerShell HTTP listener (`server.ps1`) on `localhost:8080` |

---

## File Structure

```
gmin-gold/
├── index.html          # Homepage — hero, about, market position, news, media
├── about.html          # Mission, vision, company story, asset portfolio
├── projects.html       # Flagship mine, feasibility economics, growth pipeline
├── esg.html            # ESG pillars, performance metrics, 2024 highlights
├── careers.html        # Hiring intro, global region cards (Canada, SA, Exploration)
├── news.html           # Press releases — featured + stacked list layout
├── contact.html        # Contact form, direct emails, 4 office location cards
├── index.css           # Core design system — all shared styles & components
├── inner.css           # Inner page additions — office/career/ESG/project cards, forms
├── main.js             # Scroll reveals, counters, parallax, form handling
├── server.ps1          # Local dev server (PowerShell, port 8080)
├── images/
│   ├── logo-gold-hexagon.png   # Hexagon icon logo (favicon, hero badge)
│   ├── logo-with-text.png      # Full logo with company name (footer)
│   ├── hero-mine.png           # Hero background & contact page
│   ├── mine-operations.png     # Operations shots (news, projects, presentation)
│   ├── mine-aerial.png         # Aerial mine view (projects hero, cards)
│   ├── gold-ore.png            # Gold ore samples (about section)
│   ├── leadership-team.png     # Team photo (about hero)
│   ├── esg-nature.png          # Nature/environment (ESG hero, project card)
│   └── careers-workers.png     # Workers/team (careers hero & body)
└── README.md
```

---

## Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--navy-950` | `#060e1a` | Deepest background, footer |
| `--navy-900` | `#0b1929` | Dark sections, header |
| `--gold-500` | `#c9a84c` | Primary accent, labels |
| `--gold-400` | `#d4b85e` | Hover states, active nav |
| `--off-white` | `#f8f9fa` | Alternating light sections |
| `--white` | `#ffffff` | Primary light background |

### Typography
- **Display**: Playfair Display (serif) — section titles, hero headings
- **Body**: Inter (sans-serif) — all body text, nav, labels, buttons

### Section Pattern
Sections alternate: **White → Dark Navy → Off-White → White → Dark Navy → Footer**

This creates the rhythmic dark/light flow seen on gmin.gold.

---

## Running Locally

### PowerShell (Windows)
```powershell
cd gmin-gold
powershell -ExecutionPolicy Bypass -File server.ps1
# Open http://localhost:8080
```

### Python (Cross-platform)
```bash
cd gmin-gold
python -m http.server 8080
# Open http://localhost:8080
```

### Any static server
This is a pure static site — serve the directory with any HTTP server.

---

## Copy & Tone

The website copy is written in an **institutional, investor-facing tone** matching G Mining Ventures:

- **Self-perform narrative**: "Our proven self-perform approach has a perfect record delivering on time, under budget, or both"
- **Growth positioning**: "Building the next mid-tier gold producer"
- **Credibility signals**: Specific numbers (5 mine builds, 434% appreciation, $1.0B NPV, 34% IRR)
- **ESG commitment**: Real metrics (Zero Harm, 67% local labor, 100% GHG reporting)
- **Global presence**: 4 offices (Montreal, Toronto, Brazil, Guyana)

---

## Key Features

- **Scroll-triggered animations** with staggered delays via IntersectionObserver
- **Animated stat counters** that count up when scrolled into view
- **Subtle parallax** on hero background (desktop only)
- **Header blur transition** — semi-transparent → solid on scroll
- **Contact form** with submission simulation and success feedback
- **Fully responsive** — mobile menu, stacked grids, adjusted typography
- **Reduced motion** support via `prefers-reduced-motion` media query

---

## Deployment

This is a static site. Deploy to any static hosting:
- **GitHub Pages**: Enable from repo settings
- **Netlify/Vercel**: Drag & drop or connect repo
- **Any web server**: Copy files to web root

---

*Built with precision. No frameworks. No dependencies. Pure HTML, CSS, JavaScript.*
