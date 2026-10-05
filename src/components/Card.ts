import Blits from "@lightningjs/blits";


export default Blits.Component("Card", {
  props: {
    title: "Movie",
    year: 2026,
    color: "red",
    bgColor: "#303030",
  },

  template: `
    <Element w="280" h="180" color="$bgColor">
      <Element w="280" h="90" color="$color" />
      <Text x="20" y="100" content="$title" />
      <Text x="20" y="140" content="$year" />
    </Element>
  `,
});
