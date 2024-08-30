const blockData = {
    title: "MapIntro",
    icon: "format-image",
    category: "common",
    attributes: {
        hideLogo: {
            type: 'boolean',
            default: false
        },
        rightDescription: {
            type: 'boolean',
            default: true
        },
        noContent: {
            type: 'boolean',
            default: false
        },
        backgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        title: {
            type: 'string',
            default: 'Title'
        },
        category: {
            type: 'string',
            default: 'Category'
        },
        image: {
            type: 'object',
            default: null
        },
        imagePortrait: {
            type: 'object',
            default: null
        },
        location: {
            type: 'string',
            default: 'Midplaza 1 Lobby'
        },
        description: {
            type: 'string',
            default: 'Jl. Jenderal Sudirman No.Kav 10-11, Karet Tengsin, Jakarta.'
        },
        url: {
            type: 'string',
            default: null
        },
        link: {
            type: "object",
            default: {
                title: "View on Google Maps",
                url: "https://maps.app.goo.gl/eW524AugLRnepRt87",
            },
        },
    }
}

export {
    blockData
}
