import { Movie } from "./Movie";

export interface Stripe {
  id: string;
  title: string;
  movies: Movie[];
}
