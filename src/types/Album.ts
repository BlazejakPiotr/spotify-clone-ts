import { Artist } from "./Artist";
import { Contributor } from "./Contributor";
import { Genere } from "./Genere";
import { Track } from "./Track";

export interface Album {
  id: number;
  title: string;
  upc: number;
  link: string;
  share: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  genre_id: number;
  genres: {
    data: Genere[];
  };
  label: string;
  nb_tracks: number;
  duration: number;
  fans: number;
  release_date: number;
  record_type: string;
  available: boolean;
  tracklist: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  contributors: Contributor[];
  artist: Artist;
  type: string;
  tracks: {
    data: Track[];
  };
}
