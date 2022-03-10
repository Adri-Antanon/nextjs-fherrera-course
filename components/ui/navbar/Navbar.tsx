import Image from 'next/image';
import { useTheme, Text, Spacer } from '@nextui-org/react';
import classes from './styles.module.css';

type Props = {};

export const Navbar = (props: Props) => {
  const { theme } = useTheme();
  return (
    <div
      className={classes.navbar__container}
      style={{ backgroundColor: theme.colors.gray900.value }}
    >
      <Image
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
        }
        alt="icono de la app"
        width={70}
        height={70}
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okémon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">Favoritos</Text>
    </div>
  );
};
