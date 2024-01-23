import { create } from 'zustand'
import { MovieType } from '../utils/type'

type Store = {
  movies: MovieType[];
  setMovies: (movies: MovieType[]) => void;
}

export const useMovieStore = create<Store>()((set) => ({
    movies: [],
    setMovies: (movies: MovieType[]) => set((state) => ({ ...state, movies: movies})),
}))

