export function AddToPlaylistButton({ id, onAdd }) {
  return (
    <button type="button" className="btn btn-primary" onClick={() => onAdd(id)}>
      <i class="bi bi-music-note-list"></i>
      <i class="bi bi-plus-lg"></i>
    </button>
  );
}
