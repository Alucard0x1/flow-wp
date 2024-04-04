const blockData = {
  title: "ImageBackground",
  icon: "format-image",
  category: "common",
  attributes: {
    background: {
      type: "object",
      default: null,
    },
    num: {
      type: "string",
      default: "01",
    },
    title: {
      type: "string",
      default: "Title",
    },
    description: {
      type: "string",
      default: "Description",
    },
    direction: {
      type: "string",
      default: "right",
    },
    bottomSpacing: {
      type: "boolean",
      default: true
    },
    bgColor: {
      type: 'string',
      default: null
    }
  },
};

export { blockData };
