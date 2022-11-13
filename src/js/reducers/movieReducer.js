import { dataMovies } from "../../data";
import { ADDMOVIE, DELETEMOVIE } from "../consts/moviesConsts";
const inisialState = { movies: dataMovies, loading: false };

export const movieReducer = (state = inisialState, { type, payload }) => {
  switch (type) {
    case DELETEMOVIE:
      return {
        ...state,
        movies: state.movies.filter((el) => el.id != payload),
      };
    case ADDMOVIE:
      return {
        ...state,
        movies: [...state.movies, payload],
      };

    default:
      return state;
  }
};
