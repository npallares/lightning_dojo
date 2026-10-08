import Blits from "@lightningjs/blits";

export default Blits.Component("Card", {
  props: {
    title: "Movie",
    year: 2026,
    color: "red",
    bgColor: "#303030",
  },

  state() {
    return {
      focused: false,
    };
  },

  hooks: {
    focus() {
      this.focused = true;
      console.log(`Card Focus: ${this.title}`);
    },
    unfocus() {
      this.focused = false;
      console.log(`Card Unfocus: ${this.title}`);
    },
    init() {
      console.log(`Card initialized: ${this.title}`);
    },
    ready() {
      console.log(`Card ready: ${this.title}`);
    },

    destroy() {
      console.log(`Card destroyed: ${this.title}`);
    },
  },

  computed: {
    cardColor() {
      return this.focused ? "rgb(105, 75, 255)" : "#303030";
    },
  },

  input: {
    enter() {
      console.log("Selected title: " + this.title);
    },

    back() {
      console.log("Back desde card: " + this.title);
      this.$parent.$focus();
    },
  },

  template: `
    <Element w="280" h="180" :color="$cardColor">
      <Element w="280" h="90" color="$color" />
      <Text x="20" y="100" content="$title" />
      <Text x="20" y="140" content="$year" />
    </Element>
  `,
});
