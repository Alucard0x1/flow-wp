<?php

use Timber\Timber;

$context = Timber::context();

$context['relatedPosts'] = Timber::get_posts([
    'posts_per_page' => 3,
    'post_type' => 'solutions',
    'post__not_in' => [$context['post']->ID],
]);

Timber::render('solution.twig', $context);
