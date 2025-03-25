<?php
/**
 * Template Name: Elementor Full Width
 * 
 * This template is for full-width Elementor pages and posts
 * It includes header and footer while allowing full-width content
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<div id="page" class="site">
	<?php
	if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'header' ) ) {
		// Fallback header if Elementor header doesn't exist
		get_template_part( 'template-parts/header' );
	}
	?>

	<div id="content" class="site-content elementor-full-width">
		<?php
		while ( have_posts() ) : 
			the_post();
			the_content();
		endwhile;
		?>
	</div>

	<?php
	if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'footer' ) ) {
		// Fallback footer if Elementor footer doesn't exist
		get_template_part( 'template-parts/footer' );
	}
	?>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html> 