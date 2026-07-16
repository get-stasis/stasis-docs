import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { GitBranch, Play, Server } from 'lucide-react';

export const docTabs = [
  {
    title: 'Stasis',
    description: 'Self-hosted Git Server',
    url: '/docs/stasis',
    icon: <GitBranch className="size-4" />,
  },
  {
    title: 'Stasis CI',
    description: 'CI/CD Runner',
    url: '/docs/ci',
    icon: <Play className="size-4" />,
  },
  {
    title: 'Self-Hosting',
    description: 'Deployment & Operations',
    url: '/docs/selfhosting',
    icon: <Server className="size-4" />,
  },
];

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-fd-primary"
          >
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="3" x2="12" y2="9" />
            <line x1="12" y1="15" x2="12" y2="21" />
            <path d="M9 12H3" />
            <path d="M21 12h-6" />
          </svg>
          {appName}
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
