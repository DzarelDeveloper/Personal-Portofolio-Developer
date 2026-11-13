/**
 * One label/value row inside a detail view. A `null` value is omitted rather
 * than shown empty, so unverified facts simply do not appear.
 */
interface DetailMetaRowProps {
  readonly label: string;
  readonly value: string | null;
}

export function DetailMetaRow({ label, value }: DetailMetaRowProps) {
  if (value === null) return null;

  return (
    <div className="metaRow">
      <dt className="metaLabel">{label}</dt>
      <dd className="metaValue">{value}</dd>
    </div>
  );
}
