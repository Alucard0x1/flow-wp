const blockData = {
    title: 'ScrollSlider',
    icon: 'format-image',
    category: 'common',
    attributes: {
        items: {
            type: 'array',
            default: [
                {
                    image: null,
                    title: 'Title',
                    description: 'Description',
                    link: {
                        text: 'Link',
                        url: '#'
                    }
                }
            ]
        }
    }
}

export {
    blockData
}
