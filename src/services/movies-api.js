import axios from "axios";

const KEY = '178f7f77d46b35123e714d6df55184fe'

const BASE_URL = `https://api.themoviedb.org/3/`;
// const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&append_to_response=videos,images`;

//details https://api.themoviedb.org/3/movie/343611?api_key=${KEY}&page=1
// https://api.themoviedb.org/3/movie/157336/videos?api_key=API_KEY

export const searchMovies = async (query) =>  {
   
    try {
        const data =   await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&append_to_response=videos,images`)

        const {results} = data.data
        return results
    } catch (error) {
        
    }
}

export const fetchTrendingMovies = async () =>  {
    try {

      const data =  await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}&append_to_response=videos,images`)
     

      const {results} = data.data
      return results

    } catch (error) {
        
    }
    return 
}

export const fetchMovieById = async (id) =>  {
    try {

      const data =  await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`)
     

      return data.data

    } catch (error) {
        
    }
    return 
}

export const getCast = async (id) =>  {
    try {

      const data =  await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`)
     
        console.log(data);
      return data.cast

    } catch (error) {
        
    }
    return 
}
