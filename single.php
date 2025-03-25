<?php
/**
 * The template for displaying all single posts
 */

use Timber\Timber;

$context = Timber::context();
$post = Timber::get_post();

// Get the raw content before it's processed by Timber
ob_start();
the_post();

// Check if Elementor template exists for single posts
if (class_exists('\ElementorPro\Modules\ThemeBuilder\Module')) {
    $documents_manager = \ElementorPro\Modules\ThemeBuilder\Module::instance()->get_conditions_manager()->get_documents_for_location('single');
    if (!empty($documents_manager)) {
        \ElementorPro\Modules\ThemeBuilder\Module::instance()->get_locations_manager()->do_location('single');
    } else {
        the_content();
    }
} else {
    the_content();
}

$content = ob_get_clean();

// Add the content to the context
$post->content = $content;
$context['post'] = $post;

// Render with Twig template that includes header/footer
Timber::render('hybrid.twig', $context); 