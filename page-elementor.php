<?php
/**
 * Template Name: Elementor Page
 * 
 * This template is for pages that use Elementor
 * It includes the_content() function which is required for Elementor to work
 */

get_header('elementor');
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <?php
        while (have_posts()) :
            the_post();
            the_content();
        endwhile;
        ?>
    </main>
</div>

<?php
get_footer('elementor'); 