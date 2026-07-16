import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({
  input: ['./content/openapi.json', './content/openapi-ci.json'],
});
