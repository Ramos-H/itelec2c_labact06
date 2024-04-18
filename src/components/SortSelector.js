import { SortOptions } from "../App";

export function SortSelector({ sortValue, handleSort }) {
  return (
    <select
      className="form-select"
      defaultValue={sortValue}
      onChange={handleSort}
    >
      <option value={SortOptions.TitleAsc}>Title (A to Z)</option>
      <option value={SortOptions.TitleDesc}>Title (Z to A)</option>
      <option value={SortOptions.ArtistAsc}>Artist (A to Z)</option>
      <option value={SortOptions.ArtistDesc}>Artist(Z to A)</option>
      <option value={SortOptions.RatingAsc}>Lowest Rating</option>
      <option value={SortOptions.RatingDesc}>Highest Rating</option>
    </select>
  );
}
