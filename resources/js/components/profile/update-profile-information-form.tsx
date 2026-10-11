import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import ActionMessage from '@/components/action-message';
import FormField from '@/components/form/form-field';
import PrimaryButton from '@/components/buttons/primary-button';
import SectionCard from '@/components/section-card';
import { useRequiredUser } from '@/hooks/use-auth';

export default function UpdateProfileInformationForm() {
  const user = useRequiredUser();

  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    patch('/profile', { preserveScroll: true });
  };

  return (
    <SectionCard title="Profile information" description="Update your name and email address.">
      <form onSubmit={submit} className="space-y-4">
        <FormField
          label="Name"
          autoComplete="name"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          error={errors.name}
          required
        />
        <FormField
          label="Email"
          type="email"
          autoComplete="email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          error={errors.email}
          required
        />

        <div className="flex items-center gap-3">
          <PrimaryButton type="submit" loading={processing}>
            Save
          </PrimaryButton>
          <ActionMessage show={recentlySuccessful}>Saved.</ActionMessage>
        </div>
      </form>
    </SectionCard>
  );
}
