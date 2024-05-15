const blockData = {
    title: 'SideImage',
    icon: 'format-image',
    category: 'common',
    attributes: {
        heading: {
            type: 'string',
            default: 'Title'
        },
        description: {
            type: 'string',
            default: 'Description'
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
