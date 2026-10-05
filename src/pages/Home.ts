import Blits from "@lightningjs/blits";
import Card from "../components/Card";

export default Blits.Component("Home", {
  components: {
    Card,
  },

  template: `
    <Element w="1920" h="1080" color="rgba(214, 216, 214, 0.87)">
      <Text x="100" y="60" color="red" content="Lightning Dojo" />
      <Card x="100" y="120" />
    
      <Card x="400" y="120" />
    
      <Card x="700" y="120" />
    </Element>
  `,
});
