import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/components/application-logo';
import DropdownLink from '@/components/dropdown-link';
import UserDropdown from '@/components/user-dropdown';
import { useAuth } from '@/hooks/use-auth';

export default function Navbar() {
  const user = useAuth();

  return (
    <nav className="navbar bg-base-100 border-b px-6">
      <div className="flex-1">
        <ApplicationLogo />
      </div>

      <div className="flex-none gap-2">
        {user ? (
          <UserDropdown>
            <DropdownLink href="/dashboard">Dashboard</DropdownLink>
            <DropdownLink href="/profile">Profile</DropdownLink>
          </UserDropdown>
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
