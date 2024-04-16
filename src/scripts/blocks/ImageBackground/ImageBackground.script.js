const blockData = {
  title: "ImageBackground",
  icon: "format-image",
  category: "common",
  attributes: {
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
    },
    items: {
      type: 'array',
      default: [
        {
          background: null,
          num: "01",
          title: "Title",
          description: "Description",
          list: []
        }
      ]
    }
  },
};

export { blockData };
