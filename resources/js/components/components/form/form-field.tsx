import { useId } from 'react';
import InputError from '@/components/input-error';
import InputLabel from '@/components/input-label';
import TextInput, { TextInputProps } from '@/components/text-input';

type Props = TextInputProps & {
  label: string;
  error?: string;
};

export default function FormField({ label, error, id, ...props }: Props) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <TextInput id={inputId} hasError={!!error} {...props} />
      <InputError message={error} />
    </div>
  );
}
