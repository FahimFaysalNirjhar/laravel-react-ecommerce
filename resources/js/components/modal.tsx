import { PropsWithChildren, useEffect, useRef } from 'react';

type Props = PropsWithChildren<{
  show: boolean;
  onClose: () => void;
  title?: string;
}>;

export default function Modal({ show, onClose, title, children }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;

    if (show && !el.open) el.showModal();
    if (!show && el.open) el.close();
  }, [show]);

  return (
    <dialog ref={dialog} className="modal" onClose={onClose}>
      <div className="modal-box space-y-4">
        {title && <h3 className="text-lg font-bold">{title}</h3>}
        {children}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}
