import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {

  schema: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  documents: ['src/**/*.graphql'],
  generates: {
    'src/generated/graphql.tsx': {
        plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
        config: {
          withComponent: true,
          withMutationFn: true
        },
      },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  },
};

export default config;