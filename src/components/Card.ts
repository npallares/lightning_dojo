import Blits from "@lightningjs/blits";


export default Blits.Component("Card", {
  template: `
    <Element w="280" h="180" color="#303030">
      <Element w="280" h="90" color="#fa8888" />
      <Text x="20" y="100" content="Movie" />
      <Text x="20" y="140" content="2026" />
    </Element>
  `,
});
