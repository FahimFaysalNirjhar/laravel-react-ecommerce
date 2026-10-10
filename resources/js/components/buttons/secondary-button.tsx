import { ButtonHTMLAttributes } from 'react';

export default function SecondaryButton({
                                          className = '',
                                          children,
                                          ...props
                                        }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`btn btn-outline ${className}`} {...props}>
      {children}
    </button>
  );
}
