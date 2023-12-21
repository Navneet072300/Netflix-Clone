const key = process.env.REACT_APP_IMDB_API_KEY;
const requests = {
  requestMovie: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
};
export default requests;
