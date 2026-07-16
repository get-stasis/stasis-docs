import { stasisDocs } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, docTabs } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs/stasis'>) {
  return (
    <DocsLayout tree={stasisDocs.getPageTree()} {...baseOptions()} sidebar={{ tabs: docTabs }}>
      {children}
    </DocsLayout>
  );
}
