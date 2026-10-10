import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLParagraphElement> & { message?: string };

export default function InputError({ message, className = '', ...props }: Props) {
  if (!message) return null;

  return (
    <p className={`text-error mt-1 text-sm ${className}`} {...props}>
      {message}
    </p>
  );
}
