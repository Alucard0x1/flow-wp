const blockData = {
    title: 'TextBackground',
    icon: 'format-image',
    category: 'common',
    attributes: {
        image: {
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
        }
    }
}

export {
    blockData
}
