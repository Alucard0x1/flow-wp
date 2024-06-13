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
        description: {
            type: 'string',
            default: 'Description'
        },
        still: {
            type: 'boolean',
            default: false
        },
        showDesc: {
            type: 'boolean',
            default: false
        },
        shrink: {
            type: 'boolean',
            default: false
        }
    }
}

export {
    blockData
}
