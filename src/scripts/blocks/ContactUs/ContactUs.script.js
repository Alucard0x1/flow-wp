const blockData = {
  title: "ContactUs",
  icon: "format-image",
  category: "common",
  attributes: {
    description_1: {
      type: "string",
      default: `Thank you for your interest in Flow Coworking. We're excited to connect with you! Whether you have questions, need more information, or want to explore our space, there are several ways to reach out to us:`,
    },
    description_2: {
      type: "string",
      default: `Eager to see our space in person? Drop by at your convenience for a walk-in tour, subject to availability, or schedule an in-person tour below.`,
    },
    link_1: {
        type: "object",
        default: {
            title: "Inquiry Form",
            url: "https://form.asana.com/?k=L_b-zJ6I-RiKEDAVbvbS6A&d=7388513620959",
        },
    },
    link_2: {
        type: "object",
        default: {
            title: "Book a Tour",
            url: "https://calendly.com/flow_/booking",
        },
    },
  },
};

export { blockData };
