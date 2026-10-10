import { Link } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{
  title: string;
  footer?: ReactNode;
}>;

export default function GuestLayout({ title, footer, children }: Props) {
  return (
    <div className="bg-base-200 flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <Link href="/" className="text-2xl font-bold">
        My Shop
      </Link>

      <div className="card bg-base-100 w-full max-w-sm shadow-xl">
        <div className="card-body">
          <h1 className="card-title mb-2 text-2xl">{title}</h1>
          {children}
          {footer && (
            <p className="mt-2 text-center text-sm">{footer}</p>
          )}
        </div>
      </div>
    </div>
  );
}
