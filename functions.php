<?php

// Load Composer dependencies.

require_once __DIR__ . '/vendor/autoload.php';

new Fleava\Classes\ListPost;

// Initialize Timber.
Timber\Timber::init();

Timber\Timber::$dirname = ['src/views'];

// Add this near the top of functions.php, after the initial requires
add_action('elementor/init', 'flow_elementor_support');

function flow_elementor_support() {
    // Add support for Elementor templates
    add_post_type_support('elementor_library', 'elementor');
    add_post_type_support('post', 'elementor');
    
    // Add theme support for Elementor Pro features
    add_theme_support('elementor-pro');
    add_theme_support('elementor', [
        'default_page_template' => 'template-elementor-full-width.php',
        'viewport_meta' => true,
        'responsive' => true,
    ]);

    // Register template locations for Elementor Pro Theme Builder
    if (class_exists('\ElementorPro\Plugin')) {
        add_action('elementor/theme/register_locations', 'flow_register_elementor_locations');
        
        // Ensure proper template handling
        add_filter('elementor/theme/builder/content/content', function($content) {
            if (is_singular('post')) {
                ob_start();
                \ElementorPro\Modules\ThemeBuilder\Module::instance()->get_locations_manager()->do_location('single');
                $content = ob_get_clean();
            }
            return $content;
        });
    }
}

function flow_register_elementor_locations($elementor_theme_manager) {
    $elementor_theme_manager->register_location('header');
    $elementor_theme_manager->register_location('footer');
    $elementor_theme_manager->register_location('single');
    $elementor_theme_manager->register_location('archive');
    $elementor_theme_manager->register_location('search');
}

// Add template loading support
add_filter('template_include', 'flow_template_loader', 99);

function flow_template_loader($template) {
    if (is_singular()) {
        return $template; // Use default WordPress template hierarchy
    }
    return $template;
}

// Only add Twig context and filters for non-Elementor pages
function should_use_twig() {
    // Get current template
    $template = get_page_template_slug();
    
    // List of templates that should NOT use Twig
    $non_twig_templates = [
        'template-elementor-full-width.php',
        'elementor_header_footer',
        'elementor_canvas',
        'elementor_theme_builder'
    ];
    
    // Check if current template is in the non-Twig list
    if (in_array($template, $non_twig_templates)) {
        return false;
    }
    
    // Check if current page is using Elementor
    if (class_exists('\Elementor\Plugin')) {
        // Check if we're in Elementor editor
        if (isset($_GET['elementor-preview'])) {
            return false;
        }
        
        // Check if we're on a single post/page
        if (is_singular() && !is_singular('post')) {
            $document = \Elementor\Plugin::$instance->documents->get(get_the_ID());
            if ($document && $document->is_built_with_elementor()) {
                return false;
            }
        }
    }
    
    return true;
}

// Only add Twig context and filters if we should use Twig
if (should_use_twig()) {
    add_filter('timber/context', 'add_to_context');
    add_action('after_setup_theme', 'after_setup_theme');
}

function add_to_context($context)
{
    $context['footerMenu'] = Timber\Timber::get_menu('footer-menu');
    $context['footerSocial'] = Timber\Timber::get_menu('footer-social');
    $context['footerEnd'] = Timber\Timber::get_menu('footer-end');
    $context['popup'] = Timber\Timber::get_menu('popup');
    $context['popupRight'] = Timber\Timber::get_menu('popup-right');
    $context['popupSocial'] = Timber\Timber::get_menu('popup-social');
    $context['popupTerms'] = Timber\Timber::get_menu('popup-terms');
    $context['newsletter'] = Timber\Timber::get_menu('newsletter');
    $context['mainNavigationButton'] = Timber\Timber::get_menu('main-navigation-button');

    // Debug information for Polylang
    $context['pll_debug'] = array(
        'pll_exists' => function_exists('pll_the_languages'),
        'current_lang' => function_exists('pll_current_language') ? pll_current_language() : 'not available',
        'all_languages' => function_exists('pll_the_languages') ? pll_the_languages(array('raw' => 1)) : array(),
    );

    // Check if Polylang plugin is active before using its functions
    if (function_exists('pll_current_language')) {
        $context['localizedPopupRight'] = Timber\Timber::get_menu('popup-right' . (pll_current_language() == 'en' ? '' : '-ja'));
        $context['localizedFooterMenu'] = Timber\Timber::get_menu('footer-menu' . (pll_current_language() == 'en' ? '' : '-ja'));
    } else {
        // Fallback to English menus if Polylang is not active
        $context['localizedPopupRight'] = Timber\Timber::get_menu('popup-right');
        $context['localizedFooterMenu'] = Timber\Timber::get_menu('footer-menu');
    }

    return $context;
}

function after_setup_theme()
{


    register_nav_menus([
        'footer-menu' => 'Footer Menu',
        'footer-social' => 'Footer Social',
        'footer-end' => 'Footer End',
        'popup' => 'Popup',
        'popup-right' => 'Popup Right',
        'popup-social' => 'Popup Social',
        'popup-terms' => 'Popup Terms',
        'popup-right' => 'Popup Right',
        'main-navigation-button' => 'Navigation Buttons',
    ]);
}


function enqueue_blocks()
{
    wp_enqueue_script('flow-sc-blocks', get_theme_file_uri('/dist/blocks.js'), ['wp-block-editor'], filemtime(get_theme_file_path('/dist/blocks.js')), );

    wp_enqueue_style(
        'flow-st-blocks',
        get_theme_file_uri('/dist/main.css'),
        [],
        filemtime(get_theme_file_path('/dist/main.css'))
    );
}

function enqueue_assets()
{
    wp_enqueue_script('assetjs', get_theme_file_uri('dist/app.js'), [], filemtime(get_theme_file_path('dist/app.js')), true);

    // Add Elementor mobile mode fix
    if (class_exists('\Elementor\Plugin')) {
        // Ensure Elementor frontend config is available
        wp_enqueue_script(
            'flow-elementor-fix',
            get_theme_file_uri('assets/js/elementor-fix.js'),
            ['jquery', 'elementor-frontend', 'elementor-pro-frontend'],
            '1.0.0',
            true
        );

        // Add Elementor frontend config if not already added
        if (!wp_script_is('elementor-frontend-config', 'registered')) {
            $config = [
                'environmentMode' => [
                    'edit' => false,
                    'wpPreview' => false,
                    'isScriptDebug' => false
                ],
                'i18n' => [
                    'shareOnFacebook' => __('Share on Facebook', 'elementor'),
                    'shareOnTwitter' => __('Share on Twitter', 'elementor'),
                ],
                'is_rtl' => is_rtl(),
                'breakpoints' => [
                    'xs' => 0,
                    'sm' => 480,
                    'md' => 768,
                    'lg' => 1025,
                    'xl' => 1440,
                    'xxl' => 1600
                ],
            ];
            wp_localize_script('elementor-frontend', 'elementorFrontendConfig', $config);
        }
    }

    wp_enqueue_style(
        'flow-st-main',
        get_theme_file_uri('/dist/main.css'),
        [],
        filemtime(get_theme_file_path('/dist/main.css'))
    );

    wp_enqueue_style(
        'flow-st-blocks',
        get_theme_file_uri('/dist/blocks.css'),
        [],
        filemtime(get_theme_file_path('/dist/blocks.css'))
    );
}

add_filter('timber/twig/filters', function ($filters) {
    // Add your own filter.
    if (function_exists('pll_e')) {
        $filters['pll_e'] = [
            'callable' => 'pll_e',
        ];
    } else {
        // Fallback filter when Polylang is not active - just returns the string
        $filters['pll_e'] = [
            'callable' => function ($string) {
                return $string;
            }
        ];
    }

    $filters['md5'] = [
        'callable' => 'md5'
    ];

    $filters['json'] = [
        'callable' => function ($data) {
            return json_encode($data, JSON_PRETTY_PRINT);
        }
    ];

    $filters['add_alt'] = [
        'callable' => function ($data) {
            // Check if jp key exists before accessing it
            if (isset($data['jp']) && isset($data['jp']['id'])) {
                $jp = get_post_meta($data['jp']['id'], 'alt_desc');
                if (isset($jp[0])) {
                    $jp = $jp[0];
                } else {
                    $jp = '';
                }
                $data['jp']['alt_desc'] = $jp;
            } else {
                // Create jp key with empty alt_desc if it doesn't exist
                if (!isset($data['jp'])) {
                    $data['jp'] = ['alt_desc' => ''];
                } elseif (!isset($data['jp']['alt_desc'])) {
                    $data['jp']['alt_desc'] = '';
                }
            }

            // Check if en key exists before accessing it
            if (isset($data['en']) && isset($data['en']['id'])) {
                $en = get_post_meta($data['en']['id'], 'alt_desc');
                if (isset($en[0])) {
                    $en = $en[0];
                } else {
                    $en = '';
                }
                $data['en']['alt_desc'] = $en;
            } else {
                // Create en key with empty alt_desc if it doesn't exist
                if (!isset($data['en'])) {
                    $data['en'] = ['alt_desc' => ''];
                } elseif (!isset($data['en']['alt_desc'])) {
                    $data['en']['alt_desc'] = '';
                }
            }

            return $data;
        }
    ];

    $filters['localize_post'] = [
        'callable' => function ($post_id) {
            // Check if Polylang plugin is active
            if (function_exists('pll_get_post_translations')) {
                $posts = pll_get_post_translations($post_id);

                foreach ($posts as $key => $post) {
                    $post = Timber\Timber::get_post($post);
                    $posts[$key] = [
                        'id' => $post->ID,
                        'title' => $post->title,
                        'link' => $post->link(),
                        'excerpt' => $post->post_excerpt,
                    ];
                }

                return $posts;
            }
            
            // Fallback if Polylang is not active - return just the current post
            $post = Timber\Timber::get_post($post_id);
            return [
                'en' => [
                    'id' => $post->ID,
                    'title' => $post->title,
                    'link' => $post->link(),
                    'excerpt' => $post->post_excerpt,
                ]
            ];
        }
    ];

    return $filters;
});

function register_custom_post_type()
{
    // Check if Polylang plugin is active before using its functions
    if (function_exists('pll_register_string')) {
        pll_register_string('Workspace Solutions', 'Workspace Solutions');
        pll_register_string('Subscribe for the latest Flow updates.', 'Subscribe for the latest Flow updates.');
        pll_register_string('Learn More', 'Learn More');
        pll_register_string('Book a Tour', 'Book a Tour');
        pll_register_string('Discover solutions to optimize how you and your team work', 'Discover solutions to optimize how you and your team work');
        pll_register_string('/contact-us', '/contact-us');
    }

    add_theme_support('post-thumbnails');

    register_post_type('solutions', [
        'labels' => [
            'name' => 'Solutions',
            'singular_name' => 'Solution'
        ],
        'rewrite' => [
            'slug' => 'solutions'
        ],
        'menu_icon' => 'dashicons-groups',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'has_archive' => false
    ]);

    flow_register_meta();
}

function flow_register_meta()
{
    register_meta('post', 'alt_desc',
        [
            'show_in_rest' => true,
            'single' => true,
            'type' => 'string',
        ]);

    register_meta('post', 'responsive_desc',
    [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ]);
}

add_action('enqueue_block_editor_assets', 'enqueue_blocks');
add_action('wp_enqueue_scripts', 'enqueue_assets', 100);
add_action('init', 'register_custom_post_type');

function wpcf7_before_send_mail_function($contact_form, $abort, $submission)
{
    $properties = $contact_form->get_properties();
    $properties['messages']['mail_sent_ok'] = 'You have been successfully subscribed!';
    $contact_form->set_properties($properties);

    return $contact_form;
}

add_filter('wpcf7_before_send_mail', 'wpcf7_before_send_mail_function', 10, 3);

// Fallback functions for Polylang when not active
if (!function_exists('pll_current_language')) {
    function pll_current_language() {
        return 'en';
    }
}

if (!function_exists('pll_the_languages')) {
    function pll_the_languages($args = []) {
        // Simple fallback that returns empty array when Polylang not active
        return [];
    }
}

if (!function_exists('pll_e')) {
    function pll_e($string) {
        echo $string;
    }
}

// Keep only necessary theme support
function flow_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'flow_theme_support');

// Add custom pagination info text
add_filter('jet-smart-filters/pagination/items-info', function($info_text, $args) {
    $total = $args['total'] ?? 0;
    $page = $args['page'] ?? 1;
    $per_page = $args['per_page'] ?? 8;
    
    $start = (($page - 1) * $per_page) + 1;
    $end = min($start + $per_page - 1, $total);
    
    return sprintf('Showing %d-%d of %d items', $start, $end, $total);
}, 10, 2);

// Customize pagination items info text
add_filter('jet-smart-filters/providers/pagination-items-info', function($info, $settings) {
    $total = $settings['total'] ?? 0;
    $current_page = $settings['current_page'] ?? 1;
    $items_per_page = $settings['items_per_page'] ?? 8;
    
    $start = (($current_page - 1) * $items_per_page) + 1;
    $end = min($start + $items_per_page - 1, $total);
    
    return sprintf('Showing %d-%d of %d items', $start, $end, $total);
}, 10, 2);

// Add custom rewrite rules for blog posts
function flow_custom_rewrite_rules() {
    // Remove old rewrite rules first
    global $wp_rewrite;
    $wp_rewrite->flush_rules();

    // Add rewrite rule for blog posts only (not the blog page)
    add_rewrite_rule(
        '^blog/([^/]+)/?$',
        'index.php?name=$matches[1]',
        'top'
    );
}
add_action('init', 'flow_custom_rewrite_rules', 1);

// Modify post permalinks to include /blog/
function flow_custom_post_link($permalink, $post) {
    if ($post && is_object($post) && $post->post_type === 'post') {
        // Don't modify if it's the blog page itself
        if ($post->post_name === 'blog') {
            return $permalink;
        }
        return home_url('/blog/' . $post->post_name . '/');
    }
    return $permalink;
}
add_filter('pre_post_link', 'flow_custom_post_link', 10, 2);
add_filter('post_link', 'flow_custom_post_link', 10, 2);

// Redirect old URLs to new blog URLs
function flow_redirect_old_urls() {
    if (!is_404() && !is_admin() && is_singular('post')) {
        $current_url = rtrim($_SERVER['REQUEST_URI'], '/');
        $post = get_post();
        // Don't redirect if it's the blog page itself
        if ($post && $post->post_type === 'post' && $post->post_name !== 'blog') {
            if (strpos($current_url, '/blog/') === false) {
                wp_redirect(home_url('/blog/' . $post->post_name . '/'), 301);
                exit;
            }
        }
    }
}
add_action('template_redirect', 'flow_redirect_old_urls');

// Remove the archive template override since we're using a page for /blog/
remove_filter('template_include', 'flow_template_include', 99);

