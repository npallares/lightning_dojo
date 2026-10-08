import Blits from "@lightningjs/blits";
import Card from "./Card";
import { Movie } from "../domain/Movie";

export default Blits.Component("Stripe", {
  components: {
    Card,
  },

  props: {
    title: "",
    movies: [] as Movie[],
  },

  state() {
    return {
      selectIndex: 0,
    };
  },

  hooks: {
    focus() {
      //this.$select("card0")?.$focus(); HARCODEADO
      this.focusCard(this.selectIndex);
    },
  },

  methods: {
    focusCard(index: number) {
      const card = this.$select(`card${index}`);
      card?.$focus();
    },
  },

  input: {
    right() {
      if (this.selectIndex < this.movies.length - 1) {
        this.selectIndex += 1;
        this.focusCard(this.selectIndex);
      }
    },

    left() {
      if (this.selectIndex > 0) {
        this.selectIndex -= 1;
        this.focusCard(this.selectIndex);
      }
    },
  },

  template: `
    <Element>
      <Text x="0" y="0" content="$title" color="#251511" />
      <Card
        :for="(movie, index) in $movies"
        ref="card"
        key="$movie.id"
        :x="$index * 300"
        y="50"
        :id="$movie.id"
        :title="$movie.title"
        :year="$movie.year"
        :color="$movie.color"
      />
    </Element>
  `,
});
