import { selfhostingDocs } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, docTabs } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs/selfhosting'>) {
  return (
    <DocsLayout tree={selfhostingDocs.getPageTree()} {...baseOptions()} sidebar={{ tabs: docTabs }}>
      {children}
    </DocsLayout>
  );
}
