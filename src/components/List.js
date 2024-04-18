import { AddToPlaylistButton } from "./AddToPlaylistButton";
import { RemoveFromPlaylistButton } from "./RemoveFromPlaylistButton";
import { ListItem } from "./ListItem";

export function List({
  totalMusicCount,
  musics,
  title,
  noItemMessage,
  children,
  addAction,
  removeAction,
}) {
  let songCountText = "(0 songs)";
  if (totalMusicCount) songCountText = `(${totalMusicCount} songs total)`;
  else songCountText = `(${musics.length} songs total)`;

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h4>
              <i class="bi bi-music-note-list me-1"></i>
              {title} {songCountText}
            </h4>
            <hr class="border border-primary border-3 opacity-75"></hr>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">{children}</div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-group list-group-flush">
              {musics.length < 1
                ? noItemMessage ?? "There are no items."
                : musics.map((music) => (
                    <ListItem key={music.id} music={music}>
                      {addAction && (
                        <AddToPlaylistButton id={music.id} onAdd={addAction} />
                      )}
                      {removeAction && (
                        <RemoveFromPlaylistButton
                          id={music.id}
                          onRemove={removeAction}
                        />
                      )}
                    </ListItem>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
