import { NavLink } from '../../navlink';
import styles from './styles.module.css';

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      <NavLink href="/" exact>
        Home
      </NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </nav>
  );
};
