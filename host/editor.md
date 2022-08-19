---
layout: post
title: EDITOR
---
<script src="https://cdn.ckeditor.com/ckeditor5/35.0.1/classic/ckeditor.js"></script>
<span id="editor"></span>
    <script>
        ClassicEditor
            .create( document.querySelector( 'span#editor' ) )
            .catch( error => {
                console.error( error );
            } );
    </script> 
