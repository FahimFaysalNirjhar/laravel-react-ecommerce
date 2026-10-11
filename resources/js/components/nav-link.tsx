import { Link, usePage } from '@inertiajs/react';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function NavLink({ href, children, onClick }: Props) {
  const path = usePage().url.split('?')[0];
  const active = path === href || path.startsWith(`${href}/`);

  return (
    <Link href={href} onClick={onClick} className={active ? 'menu-active' : ''}>
      {children}
    </Link>
  );
}
