<?php
/**
 * Template part for displaying posts in archive pages
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <?php
        if (has_post_thumbnail()) :
            ?>
            <div class="post-thumbnail">
                <a href="<?php the_permalink(); ?>">
                    <?php the_post_thumbnail('medium'); ?>
                </a>
            </div>
            <?php
        endif;

        the_title(sprintf('<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url(get_permalink())), '</a></h2>');

        if ('post' === get_post_type()) :
            ?>
            <div class="entry-meta">
                <span class="posted-on">
                    <?php echo get_the_date(); ?>
                </span>
                <?php if (get_the_author()) : ?>
                    <span class="byline">
                        <?php echo get_the_author(); ?>
                    </span>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    </header>

    <div class="entry-summary">
        <?php the_excerpt(); ?>
    </div>

    <footer class="entry-footer">
        <?php
        $categories_list = get_the_category_list(', ');
        if ($categories_list) {
            printf('<span class="cat-links">%s</span>', $categories_list);
        }

        $tags_list = get_the_tag_list('', ', ');
        if ($tags_list) {
            printf('<span class="tags-links">%s</span>', $tags_list);
        }
        ?>
    </footer>
</article> 