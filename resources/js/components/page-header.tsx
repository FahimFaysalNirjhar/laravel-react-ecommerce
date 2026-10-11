import { PropsWithChildren } from 'react';

export default function PageHeader({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </div>
  );
}
