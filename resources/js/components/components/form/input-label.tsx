import { LabelHTMLAttributes } from 'react';

export default function InputLabel({
                                     className = '',
                                     children,
                                     ...props
                                   }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`label text-sm ${className}`} {...props}>
      {children}
    </label>
  );
}
