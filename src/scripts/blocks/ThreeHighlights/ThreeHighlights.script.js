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
                    description: 'Description',
                    link: {
                        title: 'Book Now',
                        url: '#'
                    },
                    showButton: false
                },
                {
                    title: 'Title',
                    description: 'Description',
                    link: {
                        title: 'Book Now',
                        url: '#'
                    },
                    showButton: false
                },
                {
                    title: 'Title',
                    description: 'Description',
                    link: {
                        title: 'Book Now',
                        url: '#'
                    },
                    showButton: false
                }
            ]
        }
    }
}

export {
    blockData
}
