<?php
/**
 * @package WordPress
 * @subpackage oo-bento_Theme
 */
?>

<?php get_header(); ?>


<!-- Start: Main Content Area -->
<div id="content" class="container_16 ui-oo-content-wrapper">
  <div class="ui-oo-box-shadow grid_12 alpha">

      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <div class="post" id="post-<?php the_ID(); ?>">
      <h2><?php the_title(); ?></h2>
        <div class="entry">
          <?php the_content('<p class="serif">Read the rest of this page &raquo;</p>'); ?>

          <?php wp_link_pages(array('before' => '<p><strong>Pages:</strong> ', 'after' => '</p>', 'next_or_number' => 'number')); ?>

        </div>
      </div>
      <?php endwhile; endif; ?>
    <?php edit_post_link('Edit this entry.', '<p>', '</p>'); ?>

  </div>

    <?php get_sidebar(); ?>

</div>
<!-- End: Main Content Area -->

<?php get_footer(); ?>