import "./App.css";
import Header from "./components/header/Header";
import MovieList from "./components/MovieList";
import { useState } from "react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Description from "./components/Description";

function App() {
  const [movies, setmovies] = useState([
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
      rating: 5,
      trailerLink:
        "https://www.imdb.com/video/vi3877612057?playlistId=tt0111161&ref_=tt_ov_vi",
    },
    {
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
      rating: 4.2,
      trailerLink:
        "https://www.imdb.com/video/vi1348706585?playlistId=tt0068646&ref_=tt_ov_vi",
    },
    {
      title: "The Godfather: Part II",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      rating: 3.0,
      trailerLink:
        "https://www.imdb.com/video/vi696162841?playlistId=tt0071562&ref_=tt_ov_vi",
    },
  ]);
  const [searchtitle, setsearchtitle] = useState("");
  const [rating, setrating] = useState(0);
  const addMovie = (movie) => {
    setmovies([...movies, movie]);
  };

  return (
    <div className="App bg-primary">
      <Header
        onAdd={addMovie}
        setsearchtitle={setsearchtitle}
        setrating={setrating}
        rating={rating}
      />

      <Switch>
        <Route path="/" exact>
          <MovieList
            movies={movies}
            searchtitle={searchtitle}
            rating={rating}
          />
        </Route>
        <Route
          path={`/description/:movieName`}
          render={(props) => <Description movies={movies} {...props} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
