const blockData = {
    title: "Hero",
    icon: "format-image",
    category: "common",
    attributes: {
        image: {
            type: 'object',
            default: null
        },
        imagePortrait: {
            type: 'object',
            default: null
        },
        title: {
            type: 'string',
            default: 'Title'
        },
        still: {
            type: 'boolean',
            default: false
        }
    }
}

export {
    blockData
}
