const blockData = {
    title: 'DoubleDesc',
    icon: 'format-image',
    category: 'common',
    attributes: {
        contentStart: {
            type: 'string',
            default: 'Content'
        },
        contentEnd: {
            type: 'string',
            default: 'Content'
        },
        mediaSlider: {
            type: 'array',
            default: []
        },
        mediaRight: {
            type: 'object',
            default: null
        }
    }
}

export {
    blockData
}
