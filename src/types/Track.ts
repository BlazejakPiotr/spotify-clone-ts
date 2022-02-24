import { Contributor } from "./Contributor";

export interface Track {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  isrc?: string;
  link: string;
  share?: string;
  duration: string;
  track_position?: number;
  disk_number?: number;
  rank: string;
  release_date?: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview?: string;
  bpm?: number;
  gain?: number;
  available_countries?: string[];
  contributors?: Contributor[];
  md5_image: string;
  artist: {
    id: string;
    name: string;
    tracklist: string;
    type: string;
  };
  album?: Album;
  type: string;
}

interface Album {
  id: string;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  release_date: string;
  tracklist: string;
  type: string;
}
