# Flow WordPress Theme

A modern, high-performance WordPress theme built with Elementor and advanced JavaScript animations.

## Features

- **Elementor Integration**: Fully compatible with Elementor page builder
- **Multilingual Support**: Built-in Polylang integration for multilingual websites
- **Modern Animations**: Smooth page transitions and scroll animations using GSAP
- **Responsive Design**: Fully responsive layout for all devices
- **Performance Optimized**: Lazy loading, optimized assets, and efficient code
- **Custom Navigation**: Advanced navigation system with smooth transitions
- **SEO Ready**: Clean code structure and semantic HTML

## Requirements

- WordPress 6.0 or higher
- PHP 7.4 or higher
- MySQL 5.6 or higher
- Elementor Pro (recommended)
- Polylang (for multilingual support)

## Installation

1. Download the theme from GitHub
2. Upload the theme folder to `/wp-content/themes/`
3. Activate the theme through WordPress admin panel
4. Install and activate required plugins:
   - Elementor
   - Polylang (if multilingual support is needed)

## Theme Setup

### Navigation Setup

1. Go to Appearance > Menus
2. Create a new menu or use an existing one
3. Add menu items and configure the menu structure
4. Set the menu location to "Primary Menu"

### Language Switcher Setup

1. Install and activate Polylang
2. Go to Settings > Languages
3. Add your languages
4. Go to Appearance > Menus
5. Add the "Languages" switcher to your menu
6. Save the menu

### Elementor Integration

1. Install and activate Elementor
2. Create pages using Elementor
3. Use the "Elementor Full Width" template for full-width pages
4. Use the "Elementor Header" template for header-only pages

## Development

### Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

### Setup Development Environment

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

### File Structure

```
flow-wp/
├── assets/          # Static assets
├── dist/            # Compiled assets
├── src/             # Source files
│   ├── scripts/     # JavaScript files
│   ├── styles/      # SCSS files
│   └── views/       # Twig templates
├── template-parts/  # WordPress template parts
└── views/           # Main theme templates
```

### Key Features

- **Smooth Scrolling**: Custom smooth scrolling implementation
- **Lazy Loading**: Optimized image loading
- **Page Transitions**: Smooth transitions between pages
- **Mobile Navigation**: Responsive mobile menu
- **Language Switcher**: Integrated Polylang language switcher
- **Custom Animations**: GSAP-based animations

## Troubleshooting

### Common Issues

1. **Elementor Not Initializing**
   - Clear browser cache
   - Check console for JavaScript errors
   - Ensure Elementor is properly installed

2. **Language Switcher Not Showing**
   - Verify Polylang is installed and activated
   - Check menu settings in Appearance > Menus
   - Ensure content exists in multiple languages

3. **Links Not Working**
   - Clear WordPress cache
   - Check for JavaScript errors in console
   - Verify Elementor settings

### Debug Mode

To enable debug mode, add these lines to your `wp-config.php`:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## Support

For support, please:
1. Check the documentation
2. Search for existing issues
3. Create a new issue if needed

## License

This theme is licensed under the MIT License. See the LICENSE file for details.

## Credits

- GSAP for animations
- Elementor for page building
- Polylang for multilingual support
- Vanilla LazyLoad for image optimization