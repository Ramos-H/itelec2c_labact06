import "./App.css";
import { useState } from "react";
import { tempMusicData } from "./data";
import { SortSelector } from "./components/SortSelector";
import { Search } from "./components/Search";
import { NumberResult } from "./components/NumberResult";
import { List } from "./components/List";
import "./Style.css";

export const SortOptions = {
  TitleAsc: 1,
  TitleDesc: 2,
  ArtistAsc: 3,
  ArtistDesc: 4,
  RatingAsc: 5,
  RatingDesc: 6,
};

export default function App() {
  const [query, setQuery] = useState("");
  const [musics, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState([]);
  const [sort, setSort] = useState(SortOptions.TitleAsc);

  const addToPlaylist = (musicId) => {
    if (playlist.filter((item) => item.id === musicId).length > 0) {
      alert("This song has already been added to the playlist");
      return;
    }
    const musicToAdd = musics.find((music) => music.id === musicId);
    setPlaylist([...playlist, musicToAdd]);
  };

  const removeFromPlaylist = (musicId) => {
    setPlaylist([...playlist.filter((item) => item.id !== musicId)]);
  };

  const handleSearch = (e) => {
    const newQuery = e?.target?.value?.trim() ?? "";
    setQuery(newQuery);
  };

  const handleSort = (e) => {
    const newSort = Number(e?.target?.value ?? SortOptions.TitleDesc);
    setSort(newSort);
  };

  let filteredMusics = sortAndFilterMusicList(query, musics, sort);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>
            <i class="bi bi-music-note-beamed me-1"></i>Hans Player
            <i class="bi bi-music-note-beamed ms-1"></i>
          </h1>
          <hr class="border border-primary border-3 opacity-75"></hr>
        </div>
      </div>
      <div className="row g-2 flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6">
          <List
            totalMusicCount={musics.length}
            musics={filteredMusics}
            title={"Music List"}
            addAction={addToPlaylist}
          >
            <div className="row g-1">
              <div className="col">
                <Search query={query} setQuery={handleSearch} />
              </div>
              <div className="col-auto">
                <SortSelector sortValue={sort} handleSort={handleSort} />
              </div>
            </div>
            <NumberResult count={query ? filteredMusics.length : null} />
          </List>
        </div>
        <div className="col-12 col-md-6">
          <List
            musics={playlist}
            title={"Playlist"}
            noItemMessage={
              "There are no currently playing songs. Add one from the music list!"
            }
            removeAction={removeFromPlaylist}
          />
        </div>
      </div>
    </div>
  );
}

function sortAndFilterMusicList(query, musics, sort) {
  // Filter based on search
  let filteredMusics = query
    ? musics.filter(
        (music) =>
          music.title.trim().toLowerCase().includes(query.toLowerCase()) ||
          music.artist.trim().toLowerCase().includes(query.toLowerCase())
      )
    : musics;

  // Sort methods
  const sortTitleAsc = (music1, music2) => {
    if (music1.title < music2.title) return -1;
    if (music1.title > music2.title) return 1;
    return 0;
  };
  const sortTitleDesc = (music1, music2) => {
    if (music1.title < music2.title) return 1;
    if (music1.title > music2.title) return -1;
    return 0;
  };
  const sortArtistAsc = (music1, music2) => {
    if (music1.artist < music2.artist) return -1;
    if (music1.artist > music2.artist) return 1;
    return 0;
  };
  const sortArtistDesc = (music1, music2) => {
    if (music1.artist < music2.artist) return 1;
    if (music1.artist > music2.artist) return -1;
    return 0;
  };
  const sortRatingAsc = (music1, music2) => {
    if (music1.rating < music2.rating) return -1;
    if (music1.rating > music2.rating) return 1;
    return 0;
  };
  const sortRatingDesc = (music1, music2) => {
    if (music1.rating < music2.rating) return 1;
    if (music1.rating > music2.rating) return -1;
    return 0;
  };

  // Select sort method based on selected option
  let sortMethod;

  switch (sort) {
    case SortOptions.TitleAsc:
      sortMethod = sortTitleAsc;
      break;
    case SortOptions.TitleDesc:
      sortMethod = sortTitleDesc;
      break;
    case SortOptions.ArtistAsc:
      sortMethod = sortArtistAsc;
      break;
    case SortOptions.ArtistDesc:
      sortMethod = sortArtistDesc;
      break;
    case SortOptions.RatingAsc:
      sortMethod = sortRatingAsc;
      break;
    case SortOptions.RatingDesc:
      sortMethod = sortRatingDesc;
      break;
    default:
      break;
  }

  // Sort
  filteredMusics = filteredMusics.sort(sortMethod);
  return filteredMusics;
}
