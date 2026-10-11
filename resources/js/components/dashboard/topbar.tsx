import DropdownLink from '@/components/dropdown-link';
import UserDropdown from '@/components/user-dropdown';

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="navbar bg-base-100 border-b px-4">
      <div className="flex-none lg:hidden">
        <button
          type="button"
          onClick={onMenuClick}
          className="btn btn-ghost btn-square"
          aria-label="Open sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="flex-1" />

      <UserDropdown>
        <DropdownLink href="/profile">Profile</DropdownLink>
        <DropdownLink href="/">View shop</DropdownLink>
      </UserDropdown>
    </header>
  );
}
