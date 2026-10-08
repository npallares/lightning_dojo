import Blits from "@lightningjs/blits";
import Card from "../components/Card";
import SceneDemo from "../components/SceneDemo";
import Stripe from "../components/Stripe";
import { stripes } from "../data/stripes";

export default Blits.Component("Home", {
  components: {
    Card,
    SceneDemo,
    Stripe,
  },

  state() {
    return {
      selectedTitle: "Interstellar",
      selectedYear: 2014,
      selectedStripeIndex: 0,
      stripes,
    };
  },

  methods: {
    selectMatrix() {
      this.selectedTitle = "The Matrix";
      this.selectedYear = 1999;
    },
    focusStripe(index: number) {
      this.$select(`stripe${index}`)?.$focus();
    },
  },

  computed: {
    selectedLabel() {
      return `${this.selectedTitle} (${this.selectedYear})`;
    },
  },

  watch: {
    selectedTitle(value: string) {
      console.log("Selected title changed:", { value });
    },
    selectedYear(value: number) {
      console.log("Selected year changed:", { value });
    },
  },

  hooks: {
    ready() {
      console.log("Ejecutando selectmatrix");
      setTimeout(() => {
        this.selectMatrix();
      }, 2000);

      const firstCard = this.$select(`stripe${this.selectedStripeIndex}`);
      firstCard?.$focus();
    },
  },

  input: {
    down() {
      if (this.selectedStripeIndex < this.stripes.length - 1) {
        this.selectedStripeIndex += 1;
        this.focusStripe(this.selectedStripeIndex);
      }
    },

    up() {
      if (this.selectedStripeIndex > 0) {
        this.selectedStripeIndex -= 1;
        this.focusStripe(this.selectedStripeIndex);
      }
    },
  },

  template: `
    <Element w="1920" h="1080" color="rgba(31, 31, 31, 0.87)">
      <Text x="100" y="50" color="#ffffff" content="Lightning Dojo" />
    
      <Stripe
        :for="(stripe, index) in $stripes"
        ref="stripe"
        key="$stripe.id"
        x="100"
        :y="$index * 260 + 150"
        :title="$stripe.title"
        :movies="$stripe.movies"
      />
    </Element>
  `,
});

/* 

template: `
    <Element w="1920" h="1080" color="rgba(241, 241, 241, 0.87)">
      <Text x="100" y="60" color="blue" content="Lightning Dojo" />
      <Text x="100" y="100" color="#000" :content="$selectedLabel" />
    
      <Card ref="firstCard" x="100" y="160" title="Interstellar" year="2014" color="blue" />
      <Card ref="secondCard" x="400" y="160" title="The Matrix" year="1999" color="pink" />
      <Card x="700" y="160" title="Blade Runner" year="1982" color="green" /> <SceneDemo y="400" x="0" />
    </Element>
  `,

*/
