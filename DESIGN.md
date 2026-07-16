# Stasis Docs Design System

## Brand Identity
- **Product**: Stasis - Self-hosted Git Server
- **Audience**: Developers, DevOps engineers, self-hosting enthusiasts
- **Personality**: Technical, trustworthy, approachable, open-source friendly

## Color Palette

### Primary Colors
- **Purple**: `#7e57c2` (hero background, primary brand)
- **Dark Navy**: `#0a1628` (dark mode backgrounds)
- **Pure White**: `#ffffff` (light mode backgrounds)

### Accent Colors
- **Purple Accent**: `hsl(270, 60%, 94%)` (sidebar active, highlights)
- **Purple Dark**: `hsl(270, 60%, 30%)` (active text)
- **Purple Ring**: `hsl(270, 60%, 70%)` (focus rings, borders)

### Feature Card Colors
- **Git Protocol**: `#d6b6f6` (light purple)
- **GitHub UI**: `#62aef0` (sky blue)
- **User Profiles**: `#ff64c8` (pink)
- **Social Links**: `#2a9d99` (teal)
- **Contribution Graphs**: `#1aae39` (green)
- **CI/CD**: `#dd5b00` (orange)

### Neutral Colors (via CSS variables)
- `--fd-background`, `--fd-foreground`
- `--fd-muted`, `--fd-muted-foreground`
- `--fd-card`, `--fd-card-foreground`
- `--fd-border`, `--fd-accent`

## Typography
- **Display Font**: Inter (headings, hero text)
- **Body Font**: Inter (body text, UI elements)
- **Mono Font**: JetBrains Mono (code blocks, technical content)

### Type Scale
- Hero H1: `text-4xl sm:text-5xl md:text-6xl` (bold, tracking-tight)
- Section H2: `text-3xl sm:text-4xl` (bold)
- Card H3: `text-lg` (bold)
- Body: `text-sm` or `text-base`
- Caption: `text-xs` (uppercase, tracking-wider)

## Spacing
- Section padding: `py-24 px-6`
- Card padding: `p-6`
- Component gap: `gap-6` or `gap-3`
- Max content width: `max-w-5xl mx-auto`

## Border Radius
- Cards: `rounded-xl`
- Buttons: `rounded-full`
- Badges: `rounded-full`

## Illustration Style (Option C)
- **Style**: Isometric 3D-style SVG illustrations
- **Characters**: Minimal, geometric developer avatars
- **Objects**: Git branches, code terminals, server racks, CI pipelines
- **Colors**: Use feature card colors with gradients
- **Animation**: Subtle floating/bobbing on hover, parallax on scroll

## Components

### Feature Card
- White/dark background with colored top stripe (2px)
- Icon + title + description
- Hover: subtle shadow, slight lift

### Doc Card
- Border with hover highlight
- Title + description + "Read more" link
- Hover: border color change to primary

### Hero Section
- Full-width peacock blue background
- Centered content with badge, heading, subtext, CTA buttons
- SVG illustration floating on the right (desktop)

### Interactive Feature Showcase
- Tabbed or clickable feature grid
- Click to expand/show detailed illustration
- Smooth transitions between states

## Motion
- **Hover**: `transition-colors` (150ms)
- **Card lift**: `hover:shadow-lg hover:-translate-y-1`
- **Floating elements**: `animate-float` (3s ease-in-out infinite)
- **Parallax**: Scroll-driven transforms (GPU-composited only)
- **Page transitions**: Fade-in on mount

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Accessibility
- All interactive elements have focus rings
- Color contrast meets WCAG AA
- Reduced motion: disable animations
- Semantic HTML structure
