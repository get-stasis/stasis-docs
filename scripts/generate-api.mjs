import { createOpenAPI } from 'fumadocs-openapi/server';
import { generateFiles } from 'fumadocs-openapi';

const stasisOpenapi = createOpenAPI({
  input: ['./content/openapi.json'],
});

const ciOpenapi = createOpenAPI({
  input: ['./content/openapi-ci.json'],
});

async function generate() {
  await generateFiles({
    input: stasisOpenapi,
    output: './content/docs/stasis/api',
    groupBy: 'tag',
  });

  await generateFiles({
    input: ciOpenapi,
    output: './content/docs/ci/api',
    groupBy: 'tag',
  });
}

void generate();
