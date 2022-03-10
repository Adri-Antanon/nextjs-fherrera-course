import { FC } from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Adrian Antañon" />
        <meta
          name="description"
          content={`Información sobre el ${
            title.toLowerCase() !== 'listado de pokémons'
              ? 'pokémon ' + title
              : title
          } `}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <main>{children}</main>
    </>
  );
};
