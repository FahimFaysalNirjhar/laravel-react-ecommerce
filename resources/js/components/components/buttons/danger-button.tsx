import { ButtonHTMLAttributes } from 'react';

export default function DangerButton({
                                       className = '',
                                       children,
                                       ...props
                                     }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`btn btn-error ${className}`} {...props}>
      {children}
    </button>
  );
}
