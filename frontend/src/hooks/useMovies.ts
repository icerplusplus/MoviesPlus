import { useQuery } from "react-query"
import { getMovies } from "../helpers"
import { useMovieStore } from "../store/movie.store"
import { MovieType } from "../utils/type"
import React from "react"

interface MovieHookResult {
    movies: MovieType[]
}

export const useMovies = ():MovieHookResult => {
    const {setMovies, movies} = useMovieStore()
    const {isFetched, data} = useQuery('movies', getMovies)

    React.useEffect(() => { 
        if (isFetched && data?.data.length > 0) {
            setMovies(data?.data)
        }
    },[data])

    return { movies: movies }
}