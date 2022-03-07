import { useRouter } from 'next/router';
import Link from 'next/link';

export const NavLink = ({ href, exact, children, ...props }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const style = {
    color: '#0070f3',
    textDecoration: 'underline',
  };

  if (isActive) {
    props.style = style;
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};
