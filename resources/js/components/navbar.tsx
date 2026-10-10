import { Link, router, usePage } from '@inertiajs/react';
import { dashboard, logout as logoutRoute, profile } from '@/routes';

type PageProps = {
  auth: { user: { id: number; name: string; email: string } | null };
};

export default function Navbar() {
  const { auth } = usePage<PageProps>().props;
  const user = auth.user;

  const closeDropdown = () => {
    (document.activeElement as HTMLElement | null)?.blur();
  };

  const logout = () => {
    closeDropdown();
    router.post(logoutRoute());
  };

  return (
    <nav className="navbar bg-base-100 border-b px-6">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          My Shop
        </Link>
      </div>

      <div className="flex-none gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost gap-2"
            >
                            <span className="bg-neutral text-neutral-content flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold">
                                {user.name.charAt(0).toUpperCase()}
                            </span>
              <span className="hidden text-sm sm:inline">
                                {user.name}
                            </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-50 mt-2 w-52 border p-2 shadow"
            >
              <li className="menu-title truncate">{user.email}</li>
              <li>
                <Link href={dashboard()} onClick={closeDropdown}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href={profile()} onClick={closeDropdown}>
                  Profile
                </Link>
              </li>
              <li>
                <button type="button" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost btn-sm">
              Log in
            </Link>
            <Link href="/register" className="btn btn-neutral btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
