export function ListItem({ music, children }) {
  return (
    <li className="list-group-item list-group-item-action fade-in">
      <div className="row align-items-center">
        <div className="col">
          <div>
            <strong>{music.title}</strong> | {music.rating} ⭐
          </div>
          <em className="text-secondary">
            <strong>
              By {music.artist} | {music.genre}
            </strong>
          </em>
        </div>
        <div className="col-auto">{children}</div>
      </div>
    </li>
  );
}
