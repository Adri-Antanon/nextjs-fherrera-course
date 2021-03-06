export type Branch = {
  title: string;
  branch: string;
  description: string;
}

export const listOfBranches: Branch[] = [
  {
    title: 'Introducción a Next.js',
    branch: '1-introduction',
    description:
      'Explicación y visualizado general de cómo funciona Next, utilización de componentes propios como Link o head, API generada por defecto, Layouts, CSS Module...',
  },
  {
    title: 'TypeScript y Despliegues',
    branch: '2-typescript-and-deploy',
    description:
      'Migración de JS a TS, despliegue de la aplicación en Vercel, en local y generar imagen de Docker',
  },
  {
    title: 'Generar información estática',
    branch: '3-static-generated-app',
    description:
      'Uso de información estática con getStaticPath y getStaticProps, se realizará mediante una pequeña demostración de los 151 Pokemons originales',
  },
];
