import Blits from "@lightningjs/blits";

type ImageStatus = "loading" | "loaded" | "error";

export default Blits.Component("Card", {
  props: {
    id: "",
    title: "Movie",
    year: 2026,
    color: "red",
    bgColor: "#303030",
    imageUrl: "",
  },

  state() {
    return {
      focused: false,
      imageStatus: "loading" as ImageStatus,
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
      console.log("Card ready:", {
        title: this.title,
        imageUrl: this.imageUrl,
      });
    },

    destroy() {
      console.log(`Card destroyed: ${this.title}`);
    },
  },

  computed: {
    cardColor() {
      return this.focused ? "rgb(202, 16, 16)" : "#303030";
    },

    placeholderAlpha() {
      return this.imageStatus === "loaded" ? 0 : 1;
    },

    placeholderText() {
      return this.imageStatus === "error"
        ? "Imagen no disponible"
        : "Cargando...";
    },
  },

  input: {
    enter() {
      this.$router.to(`/movie/${this.id}`);
    },

    back() {
      console.log("Back desde card: " + this.title);
      this.$parent.$focus();
    },
  },

  methods: {
    onImageLoaded(dimensions: { w: number; h: number }) {
      this.imageStatus = "loaded";

      console.log(`Image loaded: ${this.title}`, dimensions);
    },

    onImageError(error: string) {
      this.imageStatus = "error";

      console.error(`Image failed: ${this.title}`, error);
    },
  },

  template: `
    <Element w="280" h="180" :color="$cardColor">
      <Element w="280" h="90">
        <Element w="280" h="90" :src="$imageUrl" @loaded="$onImageLoaded" @error="$onImageError" />
    
        <Element w="280" h="90" color="#454545" :alpha="$placeholderAlpha">
          <Text x="20" y="30" size="20" :content="$placeholderText" />
        </Element>
      </Element>
      <Text x="20" y="100" content="$title" />
      <Text x="20" y="140" content="$year" />
    </Element>
  `,
});
