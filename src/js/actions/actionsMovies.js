import { ADDMOVIE, DELETEMOVIE } from "../consts/moviesConsts";

export const deleteMovie = (id) => {
  return { type: DELETEMOVIE, payload: id };
};
export const addMovie = (newMovie) => {
  return { type: ADDMOVIE, payload: newMovie };
};
