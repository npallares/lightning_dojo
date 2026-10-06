import Blits from "@lightningjs/blits";
import Card from "./Card";

export default Blits.Component("Stripe", {
  components: {
    Card,
  },

  hooks:{
    focus(){
        this.$select('card0')?.$focus();
    }
  },

  template: `
    <Element>
      <Card ref="card0" x="0" y="0" title="Interstellar" year="2014" color="blue" />
    
      <Card ref="card1" x="300" y="0" title="The Matrix" year="1999" color="pink" />
    
      <Card ref="card2" x="600" y="0" title="Blade Runner" year="1982" color="green" />
    </Element>
  `,
});