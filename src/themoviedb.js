const THEMOVIEDB_API_KEY = "my super secret key";

export const fetchMoviesFromAPI = async () => {
  const result = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${THEMOVIEDB_API_KEY}`,
    {}
  );
  const json = await result.json();
  return json;
};
