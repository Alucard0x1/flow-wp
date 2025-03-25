<?php
/**
 * The template for displaying archive pages
 */

use Timber\Timber;

// Check if Elementor Pro is active and has an archive template
if (class_exists('\ElementorPro\Modules\ThemeBuilder\Module')) {
    $elementor = \ElementorPro\Modules\ThemeBuilder\Module::instance();
    $documents_manager = $elementor->get_conditions_manager()->get_documents_for_location('archive');

    if (!empty($documents_manager) && is_array($documents_manager)) {
        get_header();
        if (method_exists($elementor, 'get_locations_manager')) {
            $elementor->get_locations_manager()->do_location('archive');
        }
        get_footer();
        return;
    }
}

// If no Elementor template, use Timber
$context = Timber::context();
$context['archive_title'] = get_the_archive_title();
$context['archive_description'] = get_the_archive_description();
$context['posts'] = Timber::get_posts();

// Render the archive page with a Twig template
Timber::render('hybrid.twig', $context);
