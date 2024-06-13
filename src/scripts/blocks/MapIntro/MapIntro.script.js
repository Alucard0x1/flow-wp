const blockData = {
    title: "MapIntro",
    icon: "format-image",
    category: "common",
    attributes: {
        noContent: {
            type: 'boolean',
            default: false
        },
        backgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        title: {
            type: 'string',
            default: 'Title'
        },
        category: {
            type: 'string',
            default: 'Category'
        },
        image: {
            type: 'object',
            default: null
        },
        imagePortrait: {
            type: 'object',
            default: null
        },
        location: {
            type: 'string',
            default: 'Location'
        },
        description: {
            type: 'string',
            default: 'Description'
        },
        url: {
            type: 'string',
            default: null
        }
    }
}

export {
    blockData
}
