export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "1c31b91181e6e138e5bea8a96de9ed25";
export const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbSearch = "https://api.themoviedb.org/3/search/movie";

export const TMDBApi = {
  getBanner: () => `${tmdbEndpoint}/upcoming?api_key=${apiKey}`,

  getMovie: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,

  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,

  getMovieSearchMovie: (key, page = 1) =>
    `${tmdbSearch}?api_key=${apiKey}&query=${key}&page=${page}`,

  getMovieSeach: (debounce) =>
    `${tmdbSearch}?api_key=${apiKey}&query=${debounce}`,
};
