import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  title: string;
  description?: string;
  className?: string;
}>;

export default function SectionCard({ title, description, className = '', children }: Props) {
  return (
    <section className={`card bg-base-100 shadow ${className}`}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description && <p className="text-sm opacity-60">{description}</p>}
        <div className="mt-2">{children}</div>
      </div>
    </section>
  );
}
