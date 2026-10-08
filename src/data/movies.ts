import type { Movie } from "../domain/Movie";

export const movies: Movie[] = [
  {
    id: "1",
    title: "Interstellar",
    year: 2014,
    color: "#0066ff",
    imageUrl: "/images/interstellar.jpg",
  },
  {
    id: "2",
    title: "The Matrix",
    year: 1999,
    color: "#ff88aa",
    imageUrl: "/images/matrix.jpg",
  },
  {
    id: "3",
    title: "Blade Runner",
    year: 1982,
    color: "#008800",
    imageUrl: "/images/blade-runner.jpg",
  },
  {
    id: "4",
    title: "Inception",
    year: 2010,
    color: "#8844ff",
    imageUrl: "/images/inception.jpg",
  },
  {
    id: "5",
    title: "Dune",
    year: 2021,
    color: "#cc8844",
    imageUrl: "/images/dune.jpg",
  },
];

export const getMovieById = (id: string): Movie | undefined => {
  return movies.find((movie) => movie.id === id);
};
