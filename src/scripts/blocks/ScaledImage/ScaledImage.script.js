const blockData = {
    title: "ScaledImage",
    icon: "format-image",
    category: "common",
    attributes: {
        bgColor: {
            type: 'string',
            default: null
        },
        title: {
            type: 'string',
            default: 'Title'
        },
        category: {
            type: 'string',
            default: 'Category'
        },
        description: {
            type: 'string',
            default: 'Description'
        },
        descriptionM: {
            type: 'string',
            default: 'Description M'
        },
        link: {
            type: 'object',
            default: {
                text: 'Link',
                url: '#'
            }
        }
    }
}

export {
    blockData
}
