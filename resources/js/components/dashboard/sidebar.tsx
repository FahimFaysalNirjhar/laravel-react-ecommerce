import ApplicationLogo from '@/components/application-logo';
import NavLink from '@/components/nav-link';

const links = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Profile', href: '/profile' },
  // add Orders, Products, etc. here later
];

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <aside className="bg-base-100 min-h-full w-64 border-r p-4">
      <ApplicationLogo className="mb-6 block px-2 text-xl font-bold" />

      <ul className="menu w-full gap-1 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href} onClick={onNavigate}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
