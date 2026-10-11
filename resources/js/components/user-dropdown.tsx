import { router } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { useAuth } from '@/hooks/use-auth';

export default function UserDropdown({ children }: PropsWithChildren) {
  const user = useAuth();

  if (!user) return null;

  // daisyUI dropdowns open on focus, so blurring closes the menu.
  const closeMenu = () => (document.activeElement as HTMLElement | null)?.blur();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost gap-2">
                <span className="bg-neutral text-neutral-content flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                </span>
        <span className="hidden text-sm sm:inline">{user.name}</span>
      </div>

      <ul
        tabIndex={0}
        onClick={closeMenu}
        className="dropdown-content menu bg-base-100 rounded-box z-50 mt-2 w-52 border p-2 shadow"
      >
        <li className="menu-title truncate">{user.email}</li>
        {children}
        <li>
          <button type="button" onClick={() => router.post('/logout')}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
