const blockData = {
    title: 'ThreeHighlights',
    icon: 'format-image',
    category: 'common',
    attributes: {
        image: {
            type: 'object',
            default: null
        },
        items: {
            type: 'array',
            default: [
                {
                    title: 'Title',
                    description: 'Description'
                },
                {
                    title: 'Title',
                    description: 'Description'
                },
                {
                    title: 'Title',
                    description: 'Description'
                }
            ]
        }
    }
}

export {
    blockData
}
