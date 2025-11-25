type Props = { title: string; children: React.ReactNode };
export default function FeatureCard({ title, children }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
