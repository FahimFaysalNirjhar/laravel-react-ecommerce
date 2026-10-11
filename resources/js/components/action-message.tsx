export default function ActionMessage({ show, children }: { show: boolean; children: string }) {
  if (!show) return null;

  return <span className="text-success text-sm">{children}</span>;
}
