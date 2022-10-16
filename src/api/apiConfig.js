const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "74668e6a4e240f0cb28b93fb4c889a5b";

const Requests = {
    requestsUpComing: `${BASE_URL}/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
    requestsPopular: `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=1`,
    requestsToprRated: `${BASE_URL}/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
    requestsActionMovies: `${BASE_URL}/discover/movie?api_key=${KEY}&with_genres=28`,
    requestsComedyMovies: `${BASE_URL}/discover/movie?api_key=${KEY}&with_genres=35`,
    requestsSearchMovies: (keywords) => `${BASE_URL}/search/multi?api_key=${KEY}&language=en-US&query=${keywords}&include_adult=false`,
    requestsMovieDetail: (movieID) => `${BASE_URL}/movie/${movieID}?api_key=${KEY}`,
    requestCredit: (movieID) => `${BASE_URL}/movie/${movieID}/credits?api_key=${KEY}`,
    requestVideo: (movieID) => `${BASE_URL}/movie/${movieID}/videos?api_key=${KEY}`,
    requestSimilarMovie: (movieID) => `${BASE_URL}/movie/${movieID}/similar?api_key=${KEY}`,
}

export default Requests
