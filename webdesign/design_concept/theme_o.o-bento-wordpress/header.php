<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
  <script src="<?php bloginfo('template_directory'); ?>/js/jquery.js" type="text/javascript" charset="utf-8"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/script.js" type="text/javascript" charset="utf-8"></script>
  
  <title>openSUSE.org - Mockup - <?php echo bloginfo('name'); ?></title>
  
</head>

<body>
  
  <!-- Start: Header -->
  <div id="header">
    
    <div id="header-content" class="container_12">
      
      <a id="header-logo" href="#home">
        <img src="<?php bloginfo('template_directory'); ?>/images/header-logo.png" width="46" height="26" alt="Header Logo" />
      </a>
      
      <ul id="global-navigation">
        <li><a href="#">Downloads</a></li>
        <li><a href="">Support</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Development</a></li>
        <li id="global-favorites"><a href="#">Favorites</a></li>
      </ul>
      
      <form id="global-search-form" action="" method="post" accept-charset="utf-8">
        <input type="text" name="q" value="search" id="search" />
        <input type="submit" value="Search" class="hidden" accesskey="" />
      </form>

    </div>
  </div>
  <!-- End: Header -->

  <div id="subheader" class="container_12">
    <div id="breadcrump">
      <a href="/"><img src="<?php bloginfo('template_directory'); ?>/images/home_grey.png" width="16" height="16" alt="Home" /></a> <?php echo do_shortcode('[simple_crumbs root="Home" /]') ?>
    </div>
  </div>
