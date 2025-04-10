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
                    imagePortrait: null,
                    title: 'Title',
                    description: 'Description',
                    label: 'From',
                    price: 'IDR 4,000,000 /Month',
                    showLabel: true,
                    link: {
                        text: 'Link',
                        url: '#',
                        newTab: false
                    }
                }
            ]
        }
    }
}

export {
    blockData
}
