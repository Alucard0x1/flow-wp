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
                    label: 'From',
                    price: 'IDR 4,000,000 /Month',
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
