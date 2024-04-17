const blockData = {
    title: 'ListImage',
    icon: 'format-image',
    category: 'common',
    attributes: {
        title: {
            type: 'string',
            default: 'Title'
        },
        items: {
            type: 'array',
            default: []
        },
        image: {
            type: 'object',
            default: null
        }
    }
}

export {
    blockData
}
