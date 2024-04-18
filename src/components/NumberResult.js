export function NumberResult({ count }) {
  if (count === undefined || count === null) return <></>;
  return (
    <span>
      Found <strong>{count ?? 0}</strong> results
    </span>
  );
}
