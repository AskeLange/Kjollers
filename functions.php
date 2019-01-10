<?php

// Root
ll_fetch ( array (
  'setup',
  'includes'
));

// Fetch files
function ll_fetch ( $files, $path='.' ) {
  foreach ( $files as $file ) { require_once ( 
    __DIR__ . '/functions/' . $path . '/' . $file . '.php' 
  ); }
}