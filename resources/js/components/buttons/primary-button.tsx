import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean };

export default function PrimaryButton({
                                        loading = false,
                                        disabled,
                                        className = '',
                                        children,
                                        ...props
                                      }: Props) {
  return (
    <button
      className={`btn btn-neutral ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loading loading-spinner loading-sm" />}
      {children}
    </button>
  );
}
