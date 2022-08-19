---
layout: post
title: EDITOR
---

<script src="/website/code/super-build-ckeditor.min.js?v=1"></script> 
<textarea id="editor"></textarea>
    <script>
        ClassicEditor
            .create( document.querySelector('#editor') )
            .catch( error => {
                console.error( error );
            } );
    </script>
