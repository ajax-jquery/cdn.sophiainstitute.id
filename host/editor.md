---
layout: post
title: EDITOR
---

<script src="/website/code/super-build-ckeditor.min.js"></script> 
<div id="editor"></div>
    <script>
        ClassicEditor
            .create( document.querySelector('#editor') )
            .catch( error => {
                console.error( error );
            } );
    </script>
