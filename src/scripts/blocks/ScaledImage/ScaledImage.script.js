const blockData = {
    title: "ScaledImage",
    icon: "format-image",
    category: "common",
    attributes: {
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
