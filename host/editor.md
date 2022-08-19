---
layout: post
title: EDITOR
---

<script src="/website/code/super-build-ckeditor.min.js?v=1"></script> 
<span id="editor"></span>
   <script>
        ClassicEditor
            .create( document.querySelector('#editor') )
            .catch( error => {
                console.error( error );
            } );
    </script> 
