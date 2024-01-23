import { PlayerSource } from "../pages/features";
import { FiltersEnum } from "./constants";

// Model interface
export interface MovieType {
  id: string;
  name: string;
  origin_name: string;
  slug: string;
  content: string;
  thumb_url: string;
  poster_url: string;
  type: string;
  status: string;
  trailer_url: string;
  episode_time: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  language: string;
  notify: string;
  showtimes: string;
  publish_year: number;
  is_shown_in_theater: number;
  is_recommended: number;
  is_copyright: number;
  is_sensitive_content: number;
  episode_server_count: number;
  episode_data_count: number;
  view_total: number;
  view_day: number;
  view_week: number;
  view_month: number;
  rating_count: number;
  rating_star: number;
  update_handler: string;
  update_identity: string;
  update_checksum: string;
  user_id: number;
  user_name: string;
  created_at: string;
  updated_at: string;
}

export interface DetailsType {
  genre: CategoryType[];
  comments: {
    quantity: number;
  };
  views: {
    quantity: number;
  };
  rating: {
    avg: number;
    votes: number;
  };
  description: string;
  author: string;
  uri: string;
  type: "TV Series" | "Movie";
  studio: string;
  dateAired: {
    start: string;
    end: string;
  };
  status: "Airing";
  scores: {
    avg: number;
    votes: number;
  };
  duration: {
    value: number;
    unit: "seconds" | "minutes" | "hours";
  };
  quanlity: "SD" | "HD" | "4K" | "8K";
  isPublic: boolean; // default: true
}

export interface EpisodeType {
  id: string;
  movie: Omit<MovieType, "episodes">;
  episode: number;
  uri: string;
  poster: string;
}

export interface CategoryType {
  id: string;
  name: string;
}

export interface CommentType {
  id: string;
  movieId: string;
  user: UserType;
  createdAt: number;
  content: string;
}

export interface SectionType {
  id: string;
  title: string;
  movies: MovieType[];
}

export interface UserType {
  _id: string;
  fullname: string;
  username: string;
  email: string;
  isAdmin: boolean;
  avatar: string;
}

// Orders

export interface HeroType {
  id: string;
  image: string;
  genre: CategoryType[];
  title: string;
  description: string;
}

export type DetailsPageType = MovieType & {
  comments: CommentType[];
  sidebar: SectionType;
};

export interface EpisodeSectionType {
  id: string;
  title: string;
  episodes: EpisodeType[];
}

export interface WatchPageType {
  source: PlayerSource;
  comments: CommentType[];
  episodesNext: EpisodeSectionType;
  episodeTotal: number;
}




export interface Dashboard {
  heros: HeroType[];
  body: {
    sections: SectionType[];
    topViews: SectionType;
    newMovies: SectionType;
  };
}