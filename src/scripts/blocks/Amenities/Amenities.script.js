const blockData = {
    title: 'Amenities',
    icon: 'format-image',
    category: 'common',
    attributes: {
        media: {
            type: 'object',
            default: null
        },
        items: {
            type: 'array',
            default: [
                {
                    title: 'Title',
                    description: 'Description',
                }
            ]
        }
    }
}

export {
    blockData
}
