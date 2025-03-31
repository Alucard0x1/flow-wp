<?php
/**
 * Template Name: Elementor Header Template
 * 
 * This template is specifically for Elementor header templates
 * It's a minimal template that only includes the_content()
 */

get_header();
?>

<div class="elementor-header-content">
    <?php
    while (have_posts()) :
        the_post();
        the_content();
    endwhile;
    ?>
</div>

<?php
get_footer(); 