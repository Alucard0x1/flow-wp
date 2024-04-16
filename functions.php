<?php

// Load Composer dependencies.

require_once __DIR__ . '/vendor/autoload.php';

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

    return $context;
}

function after_setup_theme()
{
    register_nav_menus([
        'footer-menu' => 'Footer Menu',
        'footer-social' => 'Footer Social',
        'footer-end' => 'Footer End'
    ]);
}


function enqueue_blocks()
{
    wp_enqueue_script(
        'flow-sc-blocks',
        get_theme_file_uri('/dist/blocks.js'),
        ['wp-block-editor'],
        filemtime(get_theme_file_path('/dist/blocks.js')),
    );

    wp_enqueue_style(
        'flow-st-blocks',
        get_theme_file_uri('/dist/main.css'),
        ['wp-block-editor'],
        filemtime(get_theme_file_path('/dist/main.css'))
    );
}

add_action('enqueue_block_editor_assets', 'enqueue_blocks');
add_action('wp_enqueue_scripts', 'enqueue_blocks', 100);
