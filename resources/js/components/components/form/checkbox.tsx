import { InputHTMLAttributes } from 'react';

export default function Checkbox({
                                   className = '',
                                   ...props
                                 }: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  return (
    <input
      type="checkbox"
      className={`checkbox checkbox-sm ${className}`}
      {...props}
    />
  );
}
