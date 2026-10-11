import { Link } from '@inertiajs/react';
import { ComponentProps } from 'react';

export default function DropdownLink({ children, ...props }: ComponentProps<typeof Link>) {
  return (
    <li>
      <Link {...props}>{children}</Link>
    </li>
  );
}
