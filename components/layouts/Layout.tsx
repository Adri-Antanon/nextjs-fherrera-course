import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

import classes from './styles.module.css';

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
      <Navbar />
      <main className={classes.main__container}>{children}</main>
    </>
  );
};
