const blockData = {
    title: 'Amenities',
    icon: 'format-image',
    category: 'common',
    attributes: {
        title: {
            type: 'string',
            default: 'Amenities and Services'
        },
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
