<?php


namespace Fleava\Classes;

defined('ABSPATH') || exit;

use Timber\Timber;
use Timber\PostQuery;

class ListPost
{
    public function __construct()
    {
        add_action('init', [$this, 'register_block_type']);
    }

    public function register_block_type(): void
    {
        register_block_type(
            'media108/list-post',
            [
                'attributes'      => [
                    'postType'                => [
                        'type'    => 'string',
                        'default' => 'post'
                    ],
                    'taxonomy'                => [
                        'type'    => 'string',
                        'default' => 'category'
                    ],
                    'categories'              => [
                        'type' => 'string',
                    ],
                    'className'               => [
                        'type' => 'string'
                    ],
                    'postsToShow'             => [
                        'type'    => 'number',
                        'default' => 5
                    ],
                    'displayPostContent'      => [
                        'type'    => 'boolean',
                        'default' => false
                    ],
                    'displayPostContentRadio' => [
                        'type'    => 'string',
                        'default' => 'excerpt'
                    ],
                    'excerptLength'           => [
                        'type'    => 'number',
                        'default' => 55
                    ],
                    'displayPostDate'         => [
                        'type'    => 'boolean',
                        'default' => true
                    ],
                    'postLayout'              => [
                        'type'    => 'string',
                        'default' => 'list'
                    ],
                    'columns'                 => [
                        'type'    => 'number',
                        'default' => 3
                    ],
                    'order'                   => [
                        'type'    => 'string',
                        'default' => 'desc'
                    ],
                    'orderBy'                 => [
                        'type'    => 'string',
                        'default' => 'date'
                    ],
                ],
                'render_callback' => [$this, 'render_callback'],
            ],
        );
    }

    public function render_callback($attributes): string
    {
        global $post;

        $args = [
            'post_type'        => $attributes['postType'],
            'posts_per_page'   => $attributes['postsToShow'],
            'post_status'      => 'publish',
            'order'            => $attributes['order'],
            'orderby'          => $attributes['orderBy'],
            'suppress_filters' => false,
        ];

        $postType = $attributes['postType'];
        if ($postType === $post->post_type) {
            $args['post__not_in'] = [$post->ID];
        }

        $recentPosts = Timber::get_posts(apply_filters('media108/list-post/widget_posts_args', $args));

        Timber::$locations = __DIR__ . '../views/';

        $context          = Timber::context();
        $context['posts'] = $recentPosts;

        return Timber::compile("posts/{$postType}.twig", $context);
    }
}
