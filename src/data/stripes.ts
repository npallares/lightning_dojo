import type { Stripe } from "../domain/Stripe";
import { movies } from "./movies";

export const stripes: Stripe[] = [
  {
    id: "popular",
    title: "Populares",
    movies: movies.slice(0, 3),
  },
  {
    id: "recommended",
    title: "Recomendadas",
    movies: movies.slice(1, 4),
  },
  {
    id: "trending",
    title: "Tendencias",
    movies: movies.slice(2, 5),
  },
];
