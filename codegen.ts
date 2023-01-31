import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://13.125.232.217:443/graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.tsx": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withComponent: true,
        withMutationFn: true
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
