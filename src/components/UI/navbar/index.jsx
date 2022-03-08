import { NavLink } from '../../navlink';
import styles from './styles.module.css';

import { menuItems } from './menuItems';

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map((item) => (
        <NavLink key={item.text} href={item.href} exact={item.href === '/'}>
          {item.text}
        </NavLink>
      ))}
    </nav>
  );
};
