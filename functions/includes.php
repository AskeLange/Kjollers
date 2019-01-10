<?php


// Jquery, bundle & fonts
add_action ( 'wp_enqueue_scripts', function() {
  wp_enqueue_script ( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' );
  wp_enqueue_script ( 'bundle', get_template_directory_uri() . '/scripts/bundle.js' );
  wp_enqueue_style ( 'poppins', 'https://fonts.googleapis.com/css?family=Poppins:200,900' );
});