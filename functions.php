<?php

// Load Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';

// Initialize Timber.
Timber\Timber::init();

Timber\Timber::$dirname = ['src/views'];


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
