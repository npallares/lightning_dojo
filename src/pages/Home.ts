import Blits from "@lightningjs/blits";
import Card from "../components/Card";
import SceneDemo from "../components/SceneDemo";
import Stripe from "../components/Stripe";

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
    };
  },

  methods: {
    selectMatrix() {
      this.selectedTitle = "The Matrix";
      this.selectedYear = 1999;
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

      const firstCard = this.$select("stripe");
      firstCard?.$focus();
    },
  },

  template: `
    <Element w="1920" h="1080" color="rgba(241, 241, 241, 0.87)">
      <Text x="100" y="60" color="blue" content="Lightning Dojo" />
      <Text x="100" y="100" color="#000" :content="$selectedLabel" />
      <Stripe ref="stripe" x="100" y="160" />
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
