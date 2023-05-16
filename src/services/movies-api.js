import axios from "axios";

const KEY = '178f7f77d46b35123e714d6df55184fe'

const BASE_URL = `https://api.themoviedb.org/3/`;
// const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&append_to_response=videos,images`;

//details https://api.themoviedb.org/3/movie/343611?api_key=${KEY}&page=1
// https://api.themoviedb.org/3/movie/157336/videos?api_key=API_KEY

export const searchMovies = async (query, page) =>  {
   
    try {
        await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}&query=${query}&append_to_response=videos,images`)
    } catch (error) {
        
    }
}

export const searchTrendingMovies = async () =>  {
    try {
        await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}&append_to_response=videos,images`)
    } catch (error) {
        
    }
}