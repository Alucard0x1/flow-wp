<?php
/**
 * The template for displaying the footer
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
    </div><!-- #content -->
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