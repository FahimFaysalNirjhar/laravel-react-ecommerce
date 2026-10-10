import { InputHTMLAttributes } from 'react';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export default function TextInput({
                                    type = 'text',
                                    hasError = false,
                                    className = '',
                                    ...props
                                  }: TextInputProps) {
  return (
    <input
      type={type}
      className={`input w-full ${hasError ? 'input-error' : ''} ${className}`}
      {...props}
    />
  );
}
