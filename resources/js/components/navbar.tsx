import { Link, router, usePage } from '@inertiajs/react';

type PageProps = {
  auth: { user: { id: number; name: string; email: string } | null };
};

export default function Navbar() {
  const { auth } = usePage<PageProps>().props;

  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <Link href="/" className="font-semibold">
        My Shop
      </Link>

      <div className="flex items-center gap-4">
        {auth.user ? (
          <>
            <span className="text-sm">Hi, {auth.user.name}</span>
            <button
              onClick={() => router.post('/logout')}
              className="rounded border px-3 py-1 text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-sm">Log in</Link>
            <Link href="/register" className="text-sm">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
