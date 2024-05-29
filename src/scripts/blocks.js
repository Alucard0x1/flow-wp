import blocks from "./blocks/**/*.jsx";
import scripts from "./blocks/**/*.script.js";
import kebabCase from "lodash/kebabCase.js";

const { registerBlockType } = wp.blocks;

blocks.forEach((block, index) => {
  if (block.default.name === "") {
    registerBlockType("media108/list-post", {
      title: "List Post",
      icon: "universal-access-alt",
      category: "common",
      edit: block.default,
    });

    return;
  }

  registerBlockType("media108/" + kebabCase(block.default.name), {
    ...scripts[index].blockData,
    edit: (props) => block.default({ ...props, edit: true }),
    save: block.default,
  });
});
