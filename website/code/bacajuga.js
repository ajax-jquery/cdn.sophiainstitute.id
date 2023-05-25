var label = "Translasi";
  (function() {
    var jumlah = 4;
    let post = document.querySelectorAll('#TTS br, #TTS p'),
    a = jumlah + 1,
    b = post.length / a;
c = Array.from({
    length: jumlah
}, (gila, bangke) => bangke + 1);
for (let d = 0; d < c.length; d++) {
    let e = c[d],
        f = parseInt((b * e)),
        g = document.createElement('div');
    g.className = 'ignielMultiRelated';
    if (post[f].nodeName == 'P') {
        post[f].parentNode.insertBefore(g, post[f])
    } else {
        post[f].parentNode.insertBefore(g, post[f].nextSibling)
    }
}
  })();
  
  $(function() {
    $.ajax({
        url: 'https://www.sophiainstitute.id/feeds/posts/default/-/'+label+'?alt=json-in-script',
        type: 'get',
        dataType: 'jsonp',
        success: function (JSONNYA) {
           var judulbaca = new Array();
var judulbacaNum = 0;
var linkbaca = new Array();
          
    for (var ndatau = 0; ndatau < JSONNYA.feed.entry.length; ndatau++) {
        var malas = JSONNYA.feed.entry[ndatau];
        judulbaca[judulbacaNum] = malas.title.$t;
        for (var jsonnya1 = 0; jsonnya1 < malas.link.length; jsonnya1++) {
            if (malas.link[jsonnya1].rel == 'alternate') {
                linkbaca[judulbacaNum] = malas.link[jsonnya1].href;
                judulbacaNum++;
                break
            }
        }
    
    
      var text = 'BACA JUGA:';
      let r = Math.floor((judulbaca.length - 1) * Math.random());
let i = 0;
let jumlah = document.querySelectorAll('.ignielMultiRelated');
while (i < judulbaca.length && i < jumlah.length) {
    for (let a = 0; a < jumlah.length; a++) {
        jumlah[a].innerHTML = '<span class="content"><span class="text">' + text + '</span><a href="' + linkbaca[r] + '" title="' + judulbaca[r] + '">' + judulbaca[r] + '</a></span><span class="icon"></span>';
        if (r < judulbaca.length - 1) {
            r++
        } else {
            r = 0
        };
        i++
    }
}
    
    
    
    
    }
},
       
    });

    
 

function removeRelatedDuplicates() {
    var remov1 = new Array(0);
    var remove2 = new Array(0);
    for (var ndatau = 0; ndatau < linkbaca.length; ndatau++) {
        if (!contains(remov1, linkbaca[ndatau])) {
            remov1.length += 1;
            remov1[remov1.length - 1] = linkbaca[ndatau];
            remove2.length += 1;
            remove2[remove2.length - 1] = judulbaca[ndatau]
        }
    };
    judulbaca = remove2;
    linkbaca = remov1
}

function contains(fadhel, fikri) {
    for (var moh = 0; moh < fadhel.length; moh++) {
        if (fadhel[moh] == fikri) {
            return true
        }
    };
    return false
};
  
      
      });
