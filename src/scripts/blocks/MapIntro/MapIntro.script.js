const blockData = {
    title: "MapIntro",
    icon: "format-image",
    category: "common",
    attributes: {
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
        location: {
            type: 'string',
            default: 'Location'
        },
        description: {
            type: 'string',
            default: 'Description'
        }
    }
}

export {
    blockData
}
