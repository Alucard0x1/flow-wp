<?php

// Load Composer dependencies.

require_once __DIR__ . '/vendor/autoload.php';

new Fleava\Classes\ListPost;

// Initialize Timber.
Timber\Timber::init();

Timber\Timber::$dirname = ['src/views'];

add_filter('timber/context', 'add_to_context');
add_action('after_setup_theme', 'after_setup_theme');

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

    $context['localizedPopupRight'] = Timber\Timber::get_menu('popup-right' . (pll_current_language() == 'en' ? '' : '-ja'));
    $context['localizedFooterMenu'] = Timber\Timber::get_menu('footer-menu' . (pll_current_language() == 'en' ? '' : '-ja'));

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
    $filters['pll_e'] = [
        'callable' => 'pll_e',
    ];

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
            $jp = get_post_meta($data['jp']['id'], 'alt_desc');

            if (isset($jp[0])) {
                $jp = $jp[0];
            } else {
                $jp = '';
            }

            $data['jp']['alt_desc'] = $jp;

            $en = get_post_meta($data['en']['id'], 'alt_desc');

            if (isset($en[0])) {
                $en = $en[0];
            } else {
                $en = '';
            }

            $data['en']['alt_desc'] = $en;

            return $data;
        }
    ];

    $filters['localize_post'] = [
        'callable' => function ($post_id) {
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
    ];

    return $filters;
});

function register_custom_post_type()
{
    pll_register_string('Workspace Solutions', 'Workspace Solutions');
    pll_register_string('Subscribe for the latest Flow updates.', 'Subscribe for the latest Flow updates.');
    pll_register_string('Learn More', 'Learn More');
    pll_register_string('Book a Tour', 'Book a Tour');
    pll_register_string('Discover solutions to optimize how you and your team work', 'Discover solutions to optimize how you and your team work');
    pll_register_string('/contact-us', '/contact-us');

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

