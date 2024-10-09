import { useState, useEffect } from "react";

const KEY = "2b1c90f7";

export function useMovie(query){
    const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
   
      useEffect(
        function () {
          async function fetchMovies() {
            try {
              setIsLoading(true);
              setError("");
              const res = await fetch(
                `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
              );
              // console.log(res)
    
              if (!res.ok)
                throw new Error("Something went wrong with fetching movies");
    
              const data = await res.json();
    
              if (data.Response === "False") throw new Error("Movie not found");
    
              console.log(data);
    
              setMovies(data.Search);
              // console.log(data.Search)
            } catch (err) {
              console.log(err.message);
              setError(err.message);
            } finally {
              setIsLoading(false);
              // setError("")
            }
          }
          if (query.length < 3) {
            setError("");
            setMovies([]);
            return;
          }
        //   handleCloseMovie();
          fetchMovies();
        },
        [query]
      );

      return {movies,isLoading,error}
}