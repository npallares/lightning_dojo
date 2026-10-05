import Blits from "@lightningjs/blits";
import Card from "../components/Card";

export default Blits.Component("Home", {
  components: {
    Card,
  },

  state() {
    return {
      selectedTitle: "Interstellar",
    };
  },

  methods: {
    selectMatrix() {
      this.selectedTitle = "The Matrix";
    },
  },

  hooks: {
    ready() {
      console.log('Ejecutando selectmatrix')
       setTimeout(() => {
         this.selectMatrix();
       }, 2000);
    },
  },

  template: `
    <Element w="1920" h="1080" color="rgba(241, 241, 241, 0.87)">
      <Text x="100" y="60" color="blue" content="Lightning Dojo" />
      <Text x="100" y="100" color="#000" :content="$selectedTitle" />
    
      <Card x="100" y="160" title="Interstellar" year="2014" color="blue" />
      <Card x="400" y="160" title="The Matrix" year="1999" color="pink" />
      <Card x="700" y="160" title="Blade Runner" year="1982" color="green" />
    </Element>
  `,
});
