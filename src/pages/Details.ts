import Blits from "@lightningjs/blits";
import { getMovieById } from "../data/movies";

export default Blits.Component("Details", {
  props: {
    id: "",
  },

  hooks: {
    focus() {
      console.log(`Details focused: ${this.id}`);
    },
  },

  computed: {
    movie() {
      return getMovieById(this.id);
    },
    movieTitle() {
      return this.movie?.title ?? "Película no encontrada";
    },
    movieYear() {
      return this.movie?.year ?? "";
    },
  },

  template: `
    <Element w="1920" h="1080" color="#141414">
      <Text x="100" y="100" content="Movie Details" size="60" />
    
      <Text x="100" y="220" :content="$movieTitle" size="48" />
    
      <Text x="100" y="300" :content="$movieYear" size="32" />
    </Element>
  `,
});
