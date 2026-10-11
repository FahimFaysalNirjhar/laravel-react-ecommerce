import { Link } from '@inertiajs/react';
import { useAppName } from '@/hooks/use-auth';

export default function ApplicationLogo({ className = '' }: { className?: string }) {
  const name = useAppName();

  return (
    <Link href="/" className={className || 'btn btn-ghost text-xl'}>
      {name}
    </Link>
  );
}
