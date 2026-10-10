import { Link, router, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

type PageProps = {
  auth: { user: { id: number; name: string; email: string } };
};

const links = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Profile', href: '/profile' },
  // add Orders, Products, etc. here later
];

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { auth, url } = usePage<PageProps>().props as PageProps & { url?: string };
  const currentUrl = usePage().url;
  const user = auth.user;

  const closeDrawer = () => {
    const toggle = document.getElementById('dashboard-drawer') as HTMLInputElement | null;
    if (toggle) toggle.checked = false;
    (document.activeElement as HTMLElement | null)?.blur();
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content bg-base-200 flex min-h-screen flex-col">
        {/* Top bar */}
        <header className="navbar bg-base-100 border-b px-4">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost btn-square"
              aria-label="Open sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>

          <div className="flex-1" />

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost gap-2">
                            <span className="bg-neutral text-neutral-content flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold">
                                {user.name.charAt(0).toUpperCase()}
                            </span>
              <span className="hidden text-sm sm:inline">{user.name}</span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-50 mt-2 w-52 border p-2 shadow"
            >
              <li className="menu-title truncate">{user.email}</li>
              <li><Link href="/profile" onClick={closeDrawer}>Profile</Link></li>
              <li><Link href="/">View shop</Link></li>
              <li>
                <button type="button" onClick={() => router.post('/logout')}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-40">
        <label htmlFor="dashboard-drawer" className="drawer-overlay" aria-label="Close sidebar" />
        <aside className="bg-base-100 min-h-full w-64 border-r p-4">
          <Link href="/dashboard" className="mb-6 block px-2 text-xl font-bold">
            My Shop
          </Link>

          <ul className="menu w-full gap-1 p-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeDrawer}
                  className={currentUrl.startsWith(link.href) ? 'menu-active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
