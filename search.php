<?php
/**
 * The template for displaying search results
 */

get_header();

if (class_exists('\ElementorPro\Modules\ThemeBuilder\Module')) {
    $documents_manager = \ElementorPro\Modules\ThemeBuilder\Module::instance()->get_conditions_manager()->get_documents_for_location('archive');
    
    if (!empty($documents_manager)) {
        // Use Elementor's search results template
        \ElementorPro\Modules\ThemeBuilder\Module::instance()->get_locations_manager()->do_location('archive');
    } else {
        // Fallback if no Elementor template exists
        ?>
        <div id="primary" class="content-area">
            <main id="main" class="site-main">
                <?php
                if (have_posts()) :
                    ?>
                    <header class="page-header">
                        <h1 class="page-title">
                            <?php
                            printf(
                                /* translators: %s: search query */
                                esc_html__('Search Results for: %s', 'flow-wp'),
                                '<span>' . get_search_query() . '</span>'
                            );
                            ?>
                        </h1>
                    </header>

                    <?php
                    while (have_posts()) :
                        the_post();
                        get_template_part('template-parts/content', 'search');
                    endwhile;

                    the_posts_navigation();
                else :
                    ?>
                    <header class="page-header">
                        <h1 class="page-title"><?php esc_html_e('Nothing Found', 'flow-wp'); ?></h1>
                    </header>

                    <div class="page-content">
                        <p><?php esc_html_e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'flow-wp'); ?></p>
                        <?php get_search_form(); ?>
                    </div>
                <?php
                endif;
                ?>
            </main>
        </div>
        <?php
    }
} else {
    // Elementor Pro not active, show default search results
    ?>
    <div id="primary" class="content-area">
        <main id="main" class="site-main">
            <?php
            if (have_posts()) :
                ?>
                <header class="page-header">
                    <h1 class="page-title">
                        <?php
                        printf(
                            /* translators: %s: search query */
                            esc_html__('Search Results for: %s', 'flow-wp'),
                            '<span>' . get_search_query() . '</span>'
                        );
                        ?>
                    </h1>
                </header>

                <?php
                while (have_posts()) :
                    the_post();
                    get_template_part('template-parts/content', 'search');
                endwhile;

                the_posts_navigation();
            else :
                ?>
                <header class="page-header">
                    <h1 class="page-title"><?php esc_html_e('Nothing Found', 'flow-wp'); ?></h1>
                </header>

                <div class="page-content">
                    <p><?php esc_html_e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'flow-wp'); ?></p>
                    <?php get_search_form(); ?>
                </div>
            <?php
            endif;
            ?>
        </main>
    </div>
    <?php
}

get_footer(); 