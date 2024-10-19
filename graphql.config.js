require("dotenv").config();

module.exports = {
  overwrite: true, // Sobreescribir los archivos generados
  schema: process.env.REACT_APP_API_URL, // URL de tu API GraphQL
  documents: "./integration/graphql/**/*.{graphql,gql}", // Ruta donde están tus queries/mutaciones/suscripciones
  generates: {
    "./integration/generated/types.ts": {
      // Archivo donde se generará el código tipado
      plugins: [
        "typescript", // Plugin para generar tipos TypeScript
        "typescript-operations", // Plugin para generar los tipos de tus queries/mutaciones
      ],
    },
    "./integration/generated/hooks/": {
      // Archivo donde se generará el código de los hooks de Apollo
      preset: "near-operation-file", // Preset para generar archivos por cada query/mutation
      presetConfig: {
        baseTypesPath: "../types",
        folder: "../../generated/hooks",
        extension: ".ts",
      },
      plugins: [
        "typescript-react-apollo", // Plugin para generar hooks de Apollo (useQuery, useMutation, etc.)
      ],
      config: {
        noUnusedFragments: true, // Elimina fragmentos no utilizados
        noExport: true, // Evita la exportación innecesaria de fragmentos
        withHooks: true, // Genera hooks para React (useQuery, useMutation)
        withComponent: false, // Si prefieres no generar componentes React (opcional)
        withHOC: false, // Si prefieres no generar High Order Components (opcional)
        importOperationTypesFrom: "Types", // Importa los tipos generados
        useTypeImports: true, // Utiliza importaciones de tipos
      },
    },
  },
};
