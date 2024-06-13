const blockData = {
  title: "TextColor",
  icon: "format-image",
  category: "common",
  attributes: {
    vp: {
      type: 'boolean',
      default: false
    },
    title: {
      type: "string",
      default: "Title",
    },
    backgroundColor: {
      type: "string",
      default: "#ffffff",
    },
    textColor: {
      type: "string",
      default: "#000000",
    },
  },
};

export { blockData };
