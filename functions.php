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
    ]);
}


function enqueue_blocks()
{
    wp_enqueue_script('flow-sc-blocks', get_theme_file_uri('/dist/blocks.js'), ['wp-block-editor'], filemtime(get_theme_file_path('/dist/blocks.js')),);

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

function register_custom_post_type()
{
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
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'has_archive' => false
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
