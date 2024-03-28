const blockData = {
  title: "LinkHover",
  icon: "format-image",
  category: "common",
  attributes: {
    title: {
      type: "string",
      default: "Title",
    },
    links: {
      type: "array",
      default: [
        {
          text: "Link 1",
          url: "#",
          image: "https://picsum.photos/300/300",
        },
        {
          text: "Link 2",
          url: "#",
          image: "https://picsum.photos/300/300",
        },
        {
          text: "Link 3",
          url: "#",
          image: "https://picsum.photos/300/300",
        },
      ],
    },
    link: {
      type: "object",
      default: {
        text: "Link",
        url: "#",
      },
    },
  },
};

export { blockData };
