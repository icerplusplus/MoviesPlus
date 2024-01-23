import { Api } from "../utils/constants"

export const getMovies = async () => {
    const data = fetch(`${Api.BaseUrl}/movies?limit=12`).then(data => data.json())
    return data
}