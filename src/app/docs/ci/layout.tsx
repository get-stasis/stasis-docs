import { ciDocs } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, docTabs } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs/ci'>) {
  return (
    <DocsLayout tree={ciDocs.getPageTree()} {...baseOptions()} sidebar={{ tabs: docTabs }}>
      {children}
    </DocsLayout>
  );
}
