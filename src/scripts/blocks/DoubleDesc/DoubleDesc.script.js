const blockData = {
    title: 'DoubleDesc',
    icon: 'format-image',
    category: 'common',
    attributes: {
        sMargin: {
            type: 'boolean',
            default: false
        },
        exHeight: {
            type: 'boolean',
            default: false
        },
        hideLeft: {
            type: 'boolean',
            default: false
        },
        hideSlider: {
            type: 'boolean',
            default: false
        },
        fullWidthContentEnd: {
            type: 'boolean',
            default: false
        },
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
