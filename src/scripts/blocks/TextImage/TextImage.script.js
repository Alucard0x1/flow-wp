const blockData = {
  title: "TextImage",
  icon: "format-image",
  category: "common",
  attributes: {
    showFloatingDesc: {
      type: 'boolean',
      default: false
    },
    floatingDescDir: {
      type: 'string',
      default: 'right'
    },
    wide: {
      type: 'boolean',
      default: false
    },
    title: {
      type: "string",
      default: "Title",
    },
    subtitle: {
      type: "string",
      default: "Description",
    },
    quote: {
      type: "string",
      default: "Quote",
    },
    description: {
      type: "string",
      default: "Description",
    },
    image: {
      type: "object",
      default: null,
    },
    imagePortrait: {
      type: 'object',
      default: null
    }
  },
};

export { blockData };
