import { useRouter } from 'next/router';
import Link from 'next/link';
import { CSSProperties, FC, ReactText } from 'react';

interface INavLink {
  href: string;
  exact: boolean;
  children: ReactText;
  style?: CSSProperties;
}
const isActiveStyle: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export const NavLink: FC<INavLink> = ({
  href,
  exact,
  children,
  style = isActiveStyle,
}: INavLink) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a style={isActive ? style : undefined}>{children}</a>
    </Link>
  );
};
