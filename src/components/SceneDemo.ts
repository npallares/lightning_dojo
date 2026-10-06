import Blits from "@lightningjs/blits";

export default Blits.Component("SceneDemo", {
  template: `
    <Element w="600" h="400" color="#333333">
      <Element x="100" y="100" w="200" h="200" color="#0066ff" zIndex="1" />
    
      <Element x="150" y="150" w="200" h="200" color="#ff4444" zIndex="2" />
    </Element>
  `,
});
