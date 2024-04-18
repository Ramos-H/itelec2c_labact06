export function Search({ query, setQuery }) {
  return (
    <input
      className="form-control"
      type="text"
      placeholder="Search music..."
      value={query}
      onChange={setQuery}
    />
  );
}
