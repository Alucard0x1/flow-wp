import blocks from "./blocks/**/*.jsx";
import scripts from "./blocks/**/*.script.js";
import kebabCase from "lodash.kebabcase";

const { registerBlockType } = wp.blocks;

blocks.forEach((block, index) => {
    registerBlockType("media108/" + kebabCase(block.default.name), {
        ...scripts[index].blockData,
        edit: (props) => block.default({ ...props, edit: true }),
        save: block.default,
    });
});
