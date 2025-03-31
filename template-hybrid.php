<?php
/**
 * Template Name: Hybrid Template
 * Description: Uses Twig header/footer with Elementor content
 */

$context = Timber::context();
$post = Timber::get_post();

// Get the raw content before it's processed by Timber
ob_start();
the_post();
the_content();
$content = ob_get_clean();

// Add the raw content to the context
$post->content = $content;
$context['post'] = $post;

Timber::render('hybrid.twig', $context); 