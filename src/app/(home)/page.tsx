'use client';

import Link from 'next/link';
import { useState } from 'react';

/* ───────────────────────────────────────────────
   SVG Illustrations (inline, theme-aware)
   ─────────────────────────────────────────────── */

function GitProtocolIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      {/* Main branch line */}
      <line x1="40" y1="30" x2="40" y2="130" stroke="#d6b6f6" strokeWidth="3" strokeLinecap="round" />
      {/* Feature branch */}
      <path d="M40 60 C70 60, 80 45, 110 45 L160 45" stroke="#d6b6f6" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="0" />
      {/* Merge back */}
      <path d="M160 45 C130 45, 120 80, 80 80 L40 80" stroke="#b388e0" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" />
      {/* Commit nodes */}
      <circle cx="40" cy="30" r="6" fill="#d6b6f6" />
      <circle cx="40" cy="60" r="6" fill="#d6b6f6" />
      <circle cx="110" cy="45" r="6" fill="#b388e0" />
      <circle cx="160" cy="45" r="6" fill="#b388e0" />
      <circle cx="40" cy="80" r="6" fill="#d6b6f6" />
      <circle cx="40" cy="110" r="6" fill="#d6b6f6" />
      <circle cx="40" cy="130" r="6" fill="#d6b6f6" />
      {/* Commit labels */}
      <rect x="52" y="24" width="48" height="14" rx="3" fill="var(--fd-muted)" opacity="0.7" />
      <rect x="52" y="74" width="56" height="14" rx="3" fill="var(--fd-muted)" opacity="0.7" />
      <rect x="118" y="39" width="40" height="14" rx="3" fill="var(--fd-muted)" opacity="0.7" />
      {/* SSH / HTTP badges */}
      <rect x="12" y="140" width="32" height="18" rx="9" fill="#d6b6f6" opacity="0.3" />
      <text x="28" y="153" textAnchor="middle" fill="#d6b6f6" fontSize="8" fontWeight="600">SSH</text>
      <rect x="52" y="140" width="40" height="18" rx="9" fill="#d6b6f6" opacity="0.3" />
      <text x="72" y="153" textAnchor="middle" fill="#d6b6f6" fontSize="8" fontWeight="600">HTTP</text>
    </svg>
  );
}

function GitHubUIIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      {/* Window frame */}
      <rect x="20" y="15" width="160" height="130" rx="8" fill="var(--fd-card)" stroke="#62aef0" strokeWidth="1.5" />
      {/* Title bar */}
      <rect x="20" y="15" width="160" height="24" rx="8" fill="#62aef0" opacity="0.15" />
      <circle cx="34" cy="27" r="4" fill="#ff5f57" />
      <circle cx="46" cy="27" r="4" fill="#febc2e" />
      <circle cx="58" cy="27" r="4" fill="#28c840" />
      {/* File tree */}
      <rect x="30" y="48" width="55" height="8" rx="2" fill="#62aef0" opacity="0.2" />
      <rect x="36" y="60" width="49" height="6" rx="2" fill="var(--fd-muted)" opacity="0.5" />
      <rect x="36" y="70" width="43" height="6" rx="2" fill="var(--fd-muted)" opacity="0.5" />
      <rect x="36" y="80" width="52" height="6" rx="2" fill="var(--fd-muted)" opacity="0.5" />
      <rect x="36" y="90" width="38" height="6" rx="2" fill="var(--fd-muted)" opacity="0.5" />
      {/* Code area */}
      <line x1="95" y1="48" x2="95" y2="130" stroke="var(--fd-border)" strokeWidth="1" />
      <rect x="100" y="50" width="70" height="5" rx="1" fill="#62aef0" opacity="0.3" />
      <rect x="108" y="59" width="55" height="5" rx="1" fill="var(--fd-muted)" opacity="0.4" />
      <rect x="108" y="68" width="62" height="5" rx="1" fill="var(--fd-muted)" opacity="0.4" />
      <rect x="108" y="77" width="40" height="5" rx="1" fill="var(--fd-muted)" opacity="0.4" />
      <rect x="100" y="86" width="65" height="5" rx="1" fill="#62aef0" opacity="0.2" />
      <rect x="108" y="95" width="50" height="5" rx="1" fill="var(--fd-muted)" opacity="0.4" />
      <rect x="108" y="104" width="58" height="5" rx="1" fill="var(--fd-muted)" opacity="0.4" />
      {/* Branch tab */}
      <rect x="30" y="136" width="48" height="14" rx="7" fill="#62aef0" opacity="0.25" />
      <text x="54" y="147" textAnchor="middle" fill="#62aef0" fontSize="7" fontWeight="600">main</text>
    </svg>
  );
}

function UserProfilesIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      {/* Avatar circle */}
      <circle cx="100" cy="50" r="28" fill="#ff64c8" opacity="0.15" />
      <circle cx="100" cy="50" r="22" fill="#ff64c8" opacity="0.25" />
      {/* Head */}
      <circle cx="100" cy="42" r="10" fill="#ff64c8" opacity="0.6" />
      {/* Body */}
      <path d="M82 65 C82 55, 118 55, 118 65 L118 72 L82 72 Z" fill="#ff64c8" opacity="0.5" />
      {/* Stats bars */}
      <rect x="45" y="90" width="110" height="8" rx="4" fill="var(--fd-muted)" opacity="0.3" />
      <rect x="45" y="90" width="75" height="8" rx="4" fill="#ff64c8" opacity="0.5" />
      <rect x="45" y="104" width="110" height="8" rx="4" fill="var(--fd-muted)" opacity="0.3" />
      <rect x="45" y="104" width="90" height="8" rx="4" fill="#ff64c8" opacity="0.4" />
      <rect x="45" y="118" width="110" height="8" rx="4" fill="var(--fd-muted)" opacity="0.3" />
      <rect x="45" y="118" width="55" height="8" rx="4" fill="#ff64c8" opacity="0.35" />
      {/* Stat labels */}
      <text x="40" y="97" textAnchor="end" fill="var(--fd-muted-foreground)" fontSize="6">repos</text>
      <text x="40" y="111" textAnchor="end" fill="var(--fd-muted-foreground)" fontSize="6">stars</text>
      <text x="40" y="125" textAnchor="end" fill="var(--fd-muted-foreground)" fontSize="6">commits</text>
      {/* Edit badge */}
      <circle cx="125" cy="55" r="8" fill="#ff64c8" opacity="0.3" />
      <path d="M122 55 L128 55 M125 52 L125 58" stroke="#ff64c8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SocialLinksIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      {/* Center node */}
      <circle cx="100" cy="80" r="16" fill="#2a9d99" opacity="0.2" />
      <circle cx="100" cy="80" r="10" fill="#2a9d99" opacity="0.4" />
      {/* Connection lines */}
      <line x1="100" y1="80" x2="50" y2="40" stroke="#2a9d99" strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="80" x2="155" y2="35" stroke="#2a9d99" strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="80" x2="40" y2="100" stroke="#2a9d99" strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="80" x2="160" y2="95" stroke="#2a9d99" strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="80" x2="80" y2="135" stroke="#2a9d99" strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="80" x2="135" y2="130" stroke="#2a9d99" strokeWidth="1.5" opacity="0.4" />
      {/* Satellite nodes */}
      <circle cx="50" cy="40" r="10" fill="#2a9d99" opacity="0.25" />
      <text x="50" y="43" textAnchor="middle" fill="#2a9d99" fontSize="8" fontWeight="600">GH</text>
      <circle cx="155" cy="35" r="10" fill="#2a9d99" opacity="0.25" />
      <text x="155" y="38" textAnchor="middle" fill="#2a9d99" fontSize="7" fontWeight="600">X</text>
      <circle cx="40" cy="100" r="10" fill="#2a9d99" opacity="0.25" />
      <text x="40" y="103" textAnchor="middle" fill="#2a9d99" fontSize="6" fontWeight="600">LI</text>
      <circle cx="160" cy="95" r="10" fill="#2a9d99" opacity="0.25" />
      <text x="160" y="98" textAnchor="middle" fill="#2a9d99" fontSize="6" fontWeight="600">MA</text>
      <circle cx="80" cy="135" r="10" fill="#2a9d99" opacity="0.25" />
      <text x="80" y="138" textAnchor="middle" fill="#2a9d99" fontSize="6" fontWeight="600">WEB</text>
      <circle cx="135" cy="130" r="10" fill="#2a9d99" opacity="0.25" />
      <text x="135" y="133" textAnchor="middle" fill="#2a9d99" fontSize="6" fontWeight="600">RSS</text>
      {/* Pulse rings */}
      <circle cx="100" cy="80" r="22" fill="none" stroke="#2a9d99" strokeWidth="1" opacity="0.15" />
      <circle cx="100" cy="80" r="30" fill="none" stroke="#2a9d99" strokeWidth="0.5" opacity="0.08" />
    </svg>
  );
}

function ContributionGraphsIllustration({ className = '' }: { className?: string }) {
  const cols = 12;
  const rows = 5;
  const cellSize = 10;
  const gap = 3;
  const startX = 30;
  const startY = 25;
  const intensities = [
    [0, 1, 0, 2, 3, 1, 0, 2, 4, 1, 0, 3],
    [1, 2, 3, 1, 0, 2, 4, 3, 1, 0, 2, 1],
    [0, 3, 1, 2, 4, 0, 1, 2, 3, 2, 1, 0],
    [2, 0, 2, 3, 1, 3, 2, 0, 1, 4, 3, 2],
    [1, 1, 0, 1, 2, 0, 1, 3, 2, 1, 0, 1],
  ];
  const colors = ['var(--fd-muted)', '#1aae39', '#1aae39', '#1aae39', '#1aae39'];
  const opacities = [0.15, 0.25, 0.45, 0.65, 0.85];

  return (
    <svg viewBox="0 0 200 120" fill="none" className={className} aria-hidden="true">
      {intensities.flatMap((row, ri) =>
        row.map((val, ci) => {
          const cellId = `cell-${ri * cols + ci}`;
          return (
            <rect
              key={cellId}
              x={startX + ci * (cellSize + gap)}
              y={startY + ri * (cellSize + gap)}
              width={cellSize}
              height={cellSize}
              rx="2"
              fill={colors[val]}
              opacity={opacities[val]}
            />
          );
        })
      )}
      {/* Month labels */}
      {['Jan', 'Apr', 'Jul', 'Oct'].map((m, i) => (
        <text
          key={m}
          x={startX + i * 3 * (cellSize + gap) + cellSize / 2}
          y={startY - 8}
          textAnchor="middle"
          fill="var(--fd-muted-foreground)"
          fontSize="7"
        >
          {m}
        </text>
      ))}
      {/* Day labels */}
      {['M', 'W', 'F'].map((d, i) => (
        <text
          key={d}
          x={startX - 10}
          y={startY + (i * 2 + 1) * (cellSize + gap) + cellSize / 2 + 2}
          textAnchor="middle"
          fill="var(--fd-muted-foreground)"
          fontSize="7"
        >
          {d}
        </text>
      ))}
      {/* Total label */}
      <text x="100" y="108" textAnchor="middle" fill="#1aae39" fontSize="10" fontWeight="700">
        1,247 contributions
      </text>
    </svg>
  );
}

function CICDIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={className} aria-hidden="true">
      {/* Pipeline stages */}
      {/* Stage 1: Build */}
      <rect x="10" y="40" width="40" height="36" rx="6" fill="#dd5b00" opacity="0.15" stroke="#dd5b00" strokeWidth="1" />
      <text x="30" y="55" textAnchor="middle" fill="#dd5b00" fontSize="7" fontWeight="600">BUILD</text>
      <rect x="18" y="60" width="24" height="4" rx="2" fill="#dd5b00" opacity="0.3" />
      <rect x="18" y="60" width="16" height="4" rx="2" fill="#dd5b00" opacity="0.6" />
      {/* Arrow */}
      <path d="M54 58 L66 58" stroke="#dd5b00" strokeWidth="1.5" opacity="0.4" />
      <path d="M63 55 L68 58 L63 61" stroke="#dd5b00" strokeWidth="1.5" opacity="0.4" fill="none" />
      {/* Stage 2: Test */}
      <rect x="70" y="40" width="40" height="36" rx="6" fill="#dd5b00" opacity="0.15" stroke="#dd5b00" strokeWidth="1" />
      <text x="90" y="55" textAnchor="middle" fill="#dd5b00" fontSize="7" fontWeight="600">TEST</text>
      {/* Checkmark */}
      <path d="M84 63 L88 67 L96 59" stroke="#dd5b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* Arrow */}
      <path d="M114 58 L126 58" stroke="#dd5b00" strokeWidth="1.5" opacity="0.4" />
      <path d="M123 55 L128 58 L123 61" stroke="#dd5b00" strokeWidth="1.5" opacity="0.4" fill="none" />
      {/* Stage 3: Deploy */}
      <rect x="130" y="40" width="40" height="36" rx="6" fill="#dd5b00" opacity="0.15" stroke="#dd5b00" strokeWidth="1" />
      <text x="150" y="55" textAnchor="middle" fill="#dd5b00" fontSize="7" fontWeight="600">DEPLOY</text>
      <path d="M145 62 L155 62 M150 57 L155 62 L150 67" stroke="#dd5b00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Trigger line */}
      <circle cx="10" cy="58" r="4" fill="#dd5b00" opacity="0.3" />
      <line x1="10" y1="58" x2="10" y2="58" stroke="#dd5b00" strokeWidth="2" strokeLinecap="round" />
      {/* Status bar */}
      <rect x="10" y="90" width="160" height="6" rx="3" fill="var(--fd-muted)" opacity="0.2" />
      <rect x="10" y="90" width="160" height="6" rx="3" fill="#dd5b00" opacity="0.4" />
      <text x="90" y="108" textAnchor="middle" fill="#dd5b00" fontSize="7" fontWeight="600">Pipeline passed in 2m 34s</text>
    </svg>
  );
}

/* ───────────────────────────────────────────────
   Floating decorative elements
   ─────────────────────────────────────────────── */

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute w-64 h-64 rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #d6b6f6 0%, transparent 70%)',
          top: '10%',
          left: '-5%',
          animation: 'float-slow 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-48 h-48 rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #62aef0 0%, transparent 70%)',
          top: '60%',
          right: '-3%',
          animation: 'float-slow 10s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute w-32 h-32 rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, #ff64c8 0%, transparent 70%)',
          bottom: '5%',
          left: '30%',
          animation: 'float-slow 7s ease-in-out infinite 2s',
        }}
      />
    </div>
  );
}

function HeroFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Floating git nodes */}
      <svg
        className="absolute"
        style={{ top: '15%', right: '10%', animation: 'float 5s ease-in-out infinite' }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        role="img"
        aria-label="Decorative floating circle"
      >
        <title>Decorative floating circle</title>
        <circle cx="12" cy="12" r="5" fill="white" opacity="0.15" />
        <circle cx="12" cy="12" r="3" fill="white" opacity="0.25" />
      </svg>
      <svg
        className="absolute"
        style={{ top: '25%', right: '25%', animation: 'float 6s ease-in-out infinite 1s' }}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        role="img"
        aria-label="Decorative floating square"
      >
        <title>Decorative floating square</title>
        <rect x="2" y="2" width="12" height="12" rx="3" fill="white" opacity="0.1" />
      </svg>
      <svg
        className="absolute"
        style={{ bottom: '20%', left: '8%', animation: 'float 7s ease-in-out infinite 2s' }}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        role="img"
        aria-label="Decorative floating triangle"
      >
        <title>Decorative floating triangle</title>
        <path d="M10 2 L18 18 L2 18 Z" fill="white" opacity="0.1" />
      </svg>
      <svg
        className="absolute"
        style={{ bottom: '30%', right: '15%', animation: 'float 4s ease-in-out infinite 0.5s' }}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        role="img"
        aria-label="Decorative floating ring"
      >
        <title>Decorative floating ring</title>
        <circle cx="7" cy="7" r="4" stroke="white" strokeWidth="1" opacity="0.15" />
      </svg>
      {/* Connection lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        role="img"
        aria-label="Decorative connection lines"
      >
        <title>Decorative connection lines</title>
        <line x1="70" y1="20" x2="85" y2="35" stroke="white" strokeWidth="0.15" opacity="0.1" />
        <line x1="15" y1="75" x2="30" y2="60" stroke="white" strokeWidth="0.15" opacity="0.1" />
      </svg>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Illustration map
   ─────────────────────────────────────────────── */

const illustrations: Record<string, React.ComponentType<{ className?: string }>> = {
  'Git Protocol': GitProtocolIllustration,
  'GitHub-style UI': GitHubUIIllustration,
  'User Profiles': UserProfilesIllustration,
  'Social Links': SocialLinksIllustration,
  'Contribution Graphs': ContributionGraphsIllustration,
  'CI/CD': CICDIllustration,
};

/* ───────────────────────────────────────────────
   Feature data (kept from original)
   ─────────────────────────────────────────────── */

const features = [
  { color: '#d6b6f6', title: 'Git Protocol', description: 'Full SSH and Smart HTTP support for clone, push, and pull operations.' },
  { color: '#62aef0', title: 'GitHub-style UI', description: 'Familiar interface with file browser, commit history, and diff views.' },
  { color: '#ff64c8', title: 'User Profiles', description: 'Customizable profiles with bio, social links, and contribution graphs.' },
  { color: '#2a9d99', title: 'Social Links', description: 'Auto-detected icons for GitHub, Twitter, LinkedIn, Mastodon, and more.' },
  { color: '#1aae39', title: 'Contribution Graphs', description: 'GitHub-style heatmap showing your commit activity over time.' },
  { color: '#dd5b00', title: 'CI/CD', description: 'Built-in CI runner for automated builds and tests.' },
];

/* ───────────────────────────────────────────────
   Interactive Feature Showcase (client component)
   ─────────────────────────────────────────────── */

function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];
  const ActiveIllustration = illustrations[activeFeature.title];

  return (
    <div className="max-w-5xl mx-auto">
      <p className="text-xs font-semibold tracking-wider text-fd-primary mb-4 uppercase">Features</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-fd-foreground">Everything you need</h2>
      <p className="text-fd-muted-foreground mb-12 max-w-2xl leading-relaxed">
        A complete self-hosted Git platform that feels just like GitHub, but runs entirely on your infrastructure.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Feature selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature, i) => {
            const isActive = i === activeIndex;
            const Illustration = illustrations[feature.title];
            return (
              <button
                key={feature.title}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`relative text-left p-4 rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fd-primary focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-fd-card border-transparent shadow-lg'
                    : 'bg-fd-card/50 border-fd-border hover:border-fd-muted-foreground/30 hover:bg-fd-card'
                }`}
                style={isActive ? { boxShadow: `0 0 0 1px ${feature.color}30, 0 8px 24px -8px ${feature.color}20` } : undefined}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl transition-opacity duration-200"
                  style={{ background: feature.color, opacity: isActive ? 1 : 0 }}
                />
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${feature.color}15` }}
                  >
                    <Illustration className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-fd-card-foreground truncate">{feature.title}</h3>
                    <p className="text-xs text-fd-muted-foreground leading-relaxed mt-0.5 line-clamp-2">{feature.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Illustration panel */}
        <div className="relative bg-fd-card rounded-2xl border border-fd-border p-8 min-h-[280px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: activeFeature.color }}
          />
          {/* Background glow */}
          <div
            className="absolute w-64 h-64 rounded-full opacity-[0.06] blur-3xl"
            style={{ background: activeFeature.color, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
          <div className="relative w-full max-w-[320px]">
            <ActiveIllustration className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Testimonials / Community section
   ─────────────────────────────────────────────── */

const testimonials = [
  {
    quote: 'Finally, a self-hosted Git server that actually looks good. The GitHub-style UI makes the transition seamless for my team.',
    name: 'Alex Chen',
    role: 'DevOps Engineer',
  },
  {
    quote: 'Stasis replaced our Gitea instance. The contribution graphs and user profiles give it a polished, professional feel.',
    name: 'Sarah Mitchell',
    role: 'Platform Lead',
  },
  {
    quote: 'Setting up CI/CD was surprisingly straightforward. It just works with our existing Docker-based workflows.',
    name: 'Marcus Rivera',
    role: 'Backend Developer',
  },
];

const communityStats = [
  { value: '2.4k+', label: 'GitHub Stars' },
  { value: '180+', label: 'Contributors' },
  { value: '50+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime' },
];

function CommunitySection() {
  return (
    <section className="relative px-6 py-24 overflow-hidden">
      <FloatingOrbs />
      <div className="relative max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-wider text-fd-primary mb-4 uppercase">Community</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-fd-foreground">Built by developers, for developers</h2>
        <p className="text-fd-muted-foreground mb-16 max-w-2xl leading-relaxed">
          Join a growing community of self-hosting enthusiasts who trust Stasis for their Git infrastructure.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-fd-card border border-fd-border">
              <p className="text-2xl sm:text-3xl font-bold text-fd-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-fd-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="p-6 rounded-xl bg-fd-card border border-fd-border hover:border-fd-muted-foreground/30 transition-colors"
            >
              {/* Quote mark */}
              <svg className="w-6 h-6 mb-4 text-fd-primary opacity-40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="text-sm text-fd-foreground leading-relaxed mb-6">{t.quote}</p>
              <footer className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-fd-primary/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-fd-primary">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-fd-foreground">{t.name}</p>
                  <p className="text-xs text-fd-muted-foreground">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────
   Doc Card (kept from original, with illustration accent)
   ─────────────────────────────────────────────── */

function DocCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative p-6 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
    >
      <h3 className="font-bold text-lg mb-2 text-fd-card-foreground">{title}</h3>
      <p className="text-sm text-fd-muted-foreground leading-relaxed mb-4">{description}</p>
      <p className="text-sm text-fd-primary font-medium group-hover:underline">Read more →</p>
    </Link>
  );
}

/* ───────────────────────────────────────────────
   Page
   ─────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[100dvh] flex items-center">
        <div className="absolute inset-0 bg-[#7e57c2]" />
        {/* Matte grain texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
        {/* Gradient overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 100%)',
          }}
        />
        <HeroFloatingElements />
        <div className="relative flex flex-col items-center justify-center px-6 py-32 text-center w-full">
          <span className="inline-block px-3 py-1 mb-6 text-sm rounded-full bg-white/10 text-white/80 font-medium tracking-wider border border-white/10">
            SELF-HOSTED GIT SERVER
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl tracking-tight leading-[1.1]">
            Your own Git server,
            <br />
            with superpowers
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed">
            Stasis is a self-hosted Git server with a GitHub-inspired interface,
            user profiles, contribution graphs, CI/CD, and more.
          </p>
          <div className="flex gap-3">
            <Link
              href="/docs/stasis/getting-started/installation"
              className="px-5 py-2.5 rounded-full bg-[#7c4dff] text-white font-medium text-sm hover:bg-[#651fff] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#7e57c2]"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/get-stasis/stasis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/10 text-white border border-white/25 font-medium text-sm hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#7e57c2]"
            >
              GitHub
            </a>
          </div>

          {/* Hero illustration — desktop only */}
          <div className="hidden md:block mt-16 w-full max-w-2xl">
            <div className="relative bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
              <svg viewBox="0 0 600 200" fill="none" className="w-full h-auto" aria-hidden="true">
                {/* Stylized terminal / server rack */}
                <rect x="40" y="20" width="520" height="160" rx="12" fill="white" opacity="0.05" stroke="white" strokeWidth="0.5" />
                {/* Terminal header */}
                <rect x="40" y="20" width="520" height="28" rx="12" fill="white" opacity="0.05" />
                <circle cx="60" cy="34" r="4" fill="#ff5f57" opacity="0.6" />
                <circle cx="74" cy="34" r="4" fill="#febc2e" opacity="0.6" />
                <circle cx="88" cy="34" r="4" fill="#28c840" opacity="0.6" />
                {/* Code lines */}
                <rect x="60" y="60" width="180" height="6" rx="3" fill="white" opacity="0.15" />
                <rect x="60" y="74" width="140" height="6" rx="3" fill="white" opacity="0.1" />
                <rect x="60" y="88" width="200" height="6" rx="3" fill="white" opacity="0.1" />
                <rect x="60" y="102" width="120" height="6" rx="3" fill="white" opacity="0.15" />
                {/* Git graph */}
                <line x1="340" y1="55" x2="340" y2="155" stroke="white" strokeWidth="2" opacity="0.2" />
                <circle cx="340" cy="60" r="5" fill="#d6b6f6" opacity="0.6" />
                <circle cx="340" cy="90" r="5" fill="#62aef0" opacity="0.6" />
                <path d="M340 90 C380 90, 400 70, 440 70" stroke="#ff64c8" strokeWidth="1.5" opacity="0.4" />
                <circle cx="440" cy="70" r="5" fill="#ff64c8" opacity="0.6" />
                <circle cx="340" cy="120" r="5" fill="#1aae39" opacity="0.6" />
                <circle cx="340" cy="150" r="5" fill="#dd5b00" opacity="0.6" />
                {/* Contribution heatmap */}
                {Array.from({ length: 48 }).map((_, i) => {
                  const row = Math.floor(i / 8);
                  const col = i % 8;
                  return (
                    <rect
                      key={`hero-cell-r${row}c${col}`}
                      x={470 + col * 10}
                      y={60 + row * 10}
                      width="8"
                      height="8"
                      rx="1.5"
                      fill="white"
                      opacity={0.05 + (i % 5) * 0.03}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Feature Showcase ── */}
      <section className="px-6 py-24 bg-fd-muted relative overflow-hidden">
        <FloatingOrbs />
        <div className="relative">
          <FeatureShowcase />
        </div>
      </section>

      {/* ── Community / Testimonials ── */}
      <CommunitySection />

      {/* ── Documentation ── */}
      <section className="px-6 py-24 bg-fd-muted">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-wider text-fd-primary mb-4 uppercase">Documentation</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-fd-foreground">Get started</h2>
          <p className="text-fd-muted-foreground mb-16 max-w-2xl leading-relaxed">
            Comprehensive guides to get Stasis up and running on your infrastructure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <DocCard title="Stasis" description="Git server setup, user guide, and API reference." href="/docs/stasis" />
            <DocCard title="Stasis CI" description="CI/CD runner configuration and usage." href="/docs/ci" />
            <DocCard title="Self-Hosting" description="Deployment, SSL, backups, and operations." href="/docs/selfhosting" />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-16 bg-fd-muted border-t border-fd-border text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <p className="text-sm font-semibold text-fd-foreground tracking-tight">Stasis</p>
            <div className="flex gap-6">
              <a href="https://github.com/get-stasis/stasis" target="_blank" rel="noopener noreferrer" className="text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                GitHub
              </a>
              <Link href="/docs/stasis" className="text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                Documentation
              </Link>
              <a href="https://github.com/get-stasis/stasis/issues" target="_blank" rel="noopener noreferrer" className="text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                Issues
              </a>
            </div>
          </div>
          <div className="border-t border-fd-border pt-6 space-y-2">
            <p className="text-xs text-fd-muted-foreground">
              Made with love by{' '}
              <a href="https://github.com/bravo68web" target="_blank" rel="noopener noreferrer" className="text-fd-primary hover:underline">
                @bravo68web
              </a>
              {' '}and{' '}
              <a href="https://github.com/XxThunderBlastxX" target="_blank" rel="noopener noreferrer" className="text-fd-primary hover:underline">
                @XxThunderBlastxX
              </a>
            </p>
            <p className="text-xs text-fd-muted-foreground">
              Stasis is open source under the{' '}
              <a href="https://github.com/get-stasis/stasis/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-fd-primary hover:underline">
                MIT License
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
