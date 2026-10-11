import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import DangerButton from '@/components/buttons/danger-button';
import FormField from '@/components/form/form-field';
import Modal from '@/components/modal';
import SecondaryButton from '@/components/buttons/secondary-button';
import SectionCard from '@/components/section-card';

export default function DeleteUserForm() {
  const [confirming, setConfirming] = useState(false);

  const { data, setData, delete: destroy, errors, processing, reset, clearErrors } = useForm({
    password: '',
  });

  const close = () => {
    setConfirming(false);
    reset();
    clearErrors();
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    destroy('/profile', {
      preserveScroll: true,
      onError: () => reset('password'),
    });
  };

  return (
    <SectionCard
      title="Delete account"
      description="Once your account is deleted, all of its data is permanently removed. This cannot be undone."
      className="border-error border"
    >
      <DangerButton type="button" onClick={() => setConfirming(true)}>
        Delete account
      </DangerButton>

      <Modal show={confirming} onClose={close} title="Delete your account?">
        <form onSubmit={submit} className="space-y-4">
          <p className="text-sm">
            This permanently deletes your account and data. Enter your password to confirm.
          </p>

          <FormField
            label="Password"
            type="password"
            autoComplete="current-password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            error={errors.password}
          />

          <div className="modal-action">
            <SecondaryButton type="button" onClick={close}>
              Cancel
            </SecondaryButton>
            <DangerButton type="submit" disabled={processing}>
              Delete account
            </DangerButton>
          </div>
        </form>
      </Modal>
    </SectionCard>
  );
}
