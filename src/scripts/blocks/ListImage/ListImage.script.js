const blockData = {
    title: 'ListImage',
    icon: 'format-image',
    category: 'common',
    attributes: {
        title: {
            type: 'string',
            default: 'Title'
        },
        description: {
            type: 'string',
            default: 'Description'
        },
        items: {
            type: 'array',
            default: []
        },
        image: {
            type: 'object',
            default: null
        },
        imagePortrait: {
            type: 'object',
            default: null
        }
    }
}

export {
    blockData
}
