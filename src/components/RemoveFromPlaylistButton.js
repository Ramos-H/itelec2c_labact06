export function RemoveFromPlaylistButton({ id, onRemove }) {
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => onRemove(id)}
    >
      <strong>
        <i class="bi bi-x-lg"></i>
      </strong>
    </button>
  );
}
