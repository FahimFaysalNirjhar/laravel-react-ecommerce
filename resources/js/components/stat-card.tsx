type Props = { label: string; value: string | number };

export default function StatCard({ label, value }: Props) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title text-base">{label}</h2>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
}
