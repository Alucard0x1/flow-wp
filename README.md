# Flow WP Theme

A modern, high-performance WordPress theme built with Elementor compatibility and advanced features.

## Features

- **Elementor Integration**: Fully compatible with Elementor page builder
- **Multilingual Support**: Built-in Polylang integration for multilingual websites
- **Modern Design**: Clean, responsive design with smooth animations
- **Performance Optimized**: Optimized for speed and performance
- **Custom Navigation**: Advanced navigation system with smooth transitions
- **Lazy Loading**: Built-in lazy loading for images and assets
- **GSAP Animations**: Smooth animations powered by GSAP
- **Mobile Responsive**: Fully responsive design for all devices

## Requirements

- WordPress 5.0 or higher
- PHP 7.4 or higher
- Elementor (recommended)
- Polylang (for multilingual support)

## Installation

1. Download the theme files
2. Upload the theme folder to `/wp-content/themes/`
3. Activate the theme through the WordPress admin panel
4. Install and activate required plugins:
   - Elementor
   - Polylang (if multilingual support is needed)

## Development Setup

1. Install Node.js and npm
2. Navigate to the theme directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` for development
5. Run `npm run build` for production build

## Theme Structure

```
flow-wp/
├── assets/          # Static assets
├── dist/            # Compiled assets
├── src/             # Source files
│   ├── scripts/     # JavaScript files
│   ├── styles/      # SCSS files
│   └── views/       # Twig templates
├── template-parts/  # WordPress template parts
└── views/           # Theme templates
```

## Customization

### Navigation

The theme includes a custom navigation system with smooth transitions. To customize:

1. Edit `src/scripts/motion/nav.js` for navigation behavior
2. Modify `src/styles/_nav.scss` for styling
3. Update `views/navbar.twig` for structure

### Language Switcher

The theme includes a built-in language switcher for Polylang:

1. Configure languages in WordPress admin > Languages
2. Add the language switcher to your menu
3. Customize the switcher style in `style.css`

## Elementor Integration

The theme is fully compatible with Elementor. Special features include:

- Custom Elementor templates
- Full-width page support
- Custom widgets integration
- Smooth page transitions

## Performance Optimization

The theme includes several performance optimizations:

- Lazy loading for images
- Optimized JavaScript loading
- CSS optimization
- Asset minification

## Support

For support, please contact the theme developer or create an issue in the GitHub repository.

## License

This theme is licensed under the MIT License. See the LICENSE file for details.

## Credits

- GSAP for animations
- Elementor for page building
- Polylang for multilingual support
- Vanilla LazyLoad for image loading