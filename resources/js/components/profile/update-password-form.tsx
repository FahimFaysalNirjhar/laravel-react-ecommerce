import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import ActionMessage from '@/components/action-message';
import FormField from '@/components/form/form-field';
import PrimaryButton from '@/components/buttons/primary-button';
import SectionCard from '@/components/section-card';

export default function UpdatePasswordForm() {
  const { data, setData, put, errors, processing, recentlySuccessful, reset } = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    put('/profile/password', {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <SectionCard
      title="Update password"
      description="Use a long, random password to keep your account secure."
    >
      <form onSubmit={submit} className="space-y-4">
        <FormField
          label="Current password"
          type="password"
          autoComplete="current-password"
          value={data.current_password}
          onChange={(e) => setData('current_password', e.target.value)}
          error={errors.current_password}
        />
        <FormField
          label="New password"
          type="password"
          autoComplete="new-password"
          value={data.password}
          onChange={(e) => setData('password', e.target.value)}
          error={errors.password}
        />
        <FormField
          label="Confirm new password"
          type="password"
          autoComplete="new-password"
          value={data.password_confirmation}
          onChange={(e) => setData('password_confirmation', e.target.value)}
          error={errors.password_confirmation}
        />

        <div className="flex items-center gap-3">
          <PrimaryButton type="submit" loading={processing}>
            Update password
          </PrimaryButton>
          <ActionMessage show={recentlySuccessful}>Password updated.</ActionMessage>
        </div>
      </form>
    </SectionCard>
  );
}
