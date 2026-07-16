import { stasis as stasisCollection, ci as ciCollection, selfhosting as selfhostingCollection } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { openapiPlugin } from 'fumadocs-openapi/server';
import { docsRoute } from './shared';

export const stasisDocs = loader(
  {
    docs: stasisCollection.toFumadocsSource(),
  },
  {
    baseUrl: `${docsRoute}/stasis`,
    plugins: [lucideIconsPlugin(), openapiPlugin()],
  },
);

export const ciDocs = loader(
  {
    docs: ciCollection.toFumadocsSource(),
  },
  {
    baseUrl: `${docsRoute}/ci`,
    plugins: [lucideIconsPlugin(), openapiPlugin()],
  },
);

export const selfhostingDocs = loader({
  source: selfhostingCollection.toFumadocsSource(),
  baseUrl: `${docsRoute}/selfhosting`,
  plugins: [lucideIconsPlugin()],
});

export const source = stasisDocs;

export function getPageImage(page: any) {
  const segments = [...page.slugs, 'image.png'];
  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export function getPageMarkdownUrl(page: any) {
  const segments = [...page.slugs, 'content.md'];
  return {
    segments,
    url: `/llms.mdx/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: any) {
  if (page.type === 'openapi') {
    return `# ${page.data.title}\n\nOpenAPI endpoint: ${page.data.method} ${page.data.path}\n\nDescription: ${page.data.description}`;
  }
  const processed = await page.data.getText('processed');
  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}
