function CSSPost(d,e,a){var b=window.document.createElement("link");var c=e||window.document.getElementsByTagName("script")[0];b.href=d;b.rel="stylesheet";c.parentNode.insertBefore(b,c);setTimeout(function(){b.media=a||"all"})}
CSSPost("https://cdn.sophiainstitute.id/website/code/CSS-CarouselPost.min.css");

function PostM(f,e,i){'use strict';var h=window.document.createElement("script"),g=e||window.document.getElementsByTagName("script")[0];h.async=!0,h.src=f,g.parentNode.insertBefore(h,g),setTimeout(function(){h.media=i||"all"})}
PostM('https://cdn.sophiainstitute.id/website/code/Permalinks-bar.min.js');
PostM('https://code.responsivevoice.org/responsivevoice.js?key=BACrqbq3');

/*! Ebook Slide */
var jumlah=6;var containernyaId="ignielRandom";function getRandomInt(d,c){return Math.floor(Math.random()*(c-d+1))+d}function shuffleArray(f){var h,g,e=f.length;if(0===e){return falplse}for(;--e;){h=Math.floor(Math.random()*(e+1)),g=f[e],f[e]=f[h],f[h]=g}return f}function randomPost(d){var c=getRandomInt(1,d.feed.openSearch$totalResults.$t-jumlah);document.write('<script src="https://ebook.sophiainstitute.id/feeds/posts/summary?alt=json-in-script&start-index=1&max-results=11&callback=ignielRandom"><\/script>')}function ignielRandom(q){var p="https://4.bp.blogspot.com/-Mpgs0kSln2I/WnRcTqvlOII/AAAAAAAAFh4/VTrxpLBIC7oxQi6xs2t6z0W2sV2h_zSiwCLcBGAs/w300-h225-p-k-no-nu/ignielcom-no-image.png";for(var k,e,n,h,m,f=document.getElementById(containernyaId),o=shuffleArray(q.feed.entry),c="<div class='team-slider owl-carousel'>",d=0,g=o.length;d<g;d++){for(var l=0,j=o[d].link.length;l<j;l++){k="alternate"==o[d].link[l].rel?o[d].link[l].href:"#",n=o[d].category[0].term,h=o[d].summary.$t.substring(0,90),m=o[d].title.$t.substring(0,25),"media$thumbnail" in o[d]?e=o[d].media$thumbnail.url.replace(/\=s[0-9]+(\-c)?/,"=s360-c").replace(/\/s[0-9]+(\-c)?/,"/s360-c"):(e=p,p="https://4.bp.blogspot.com/-Mpgs0kSln2I/WnRcTqvlOII/AAAAAAAAFh4/VTrxpLBIC7oxQi6xs2t6z0W2sV2h_zSiwCLcBGAs/w300-h225-p-k-no-nu/ignielcom-no-image.png")}c+='<div class="single-box text-center"><div class="img-area"><a href="'+k+'" title="'+m+'"><img class="img-fluid move-animation" src="'+e+'" alt="'+m+'" title="'+m+'"/></a></div><div class="info-area"><a class="linktit" href="'+k+'" title="'+m+'"><h4>'+m+"...</h4><h5>EBOOK</h5></a><p>"+h+'...</p><a href="'+k+'" title="'+m+'">Download</a></div></div>'}f.innerHTML=c+"</div>"}document.write('<script src="'+window.location.origin+'/feeds/posts/summary?alt=json-in-script&max-results=0&callback=randomPost"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"><\/script>');
/*! Scriptnya iframe ebook post dan news*/
$("div#widget_ebook").html('<iframe loading="lazy" title="Widget Ebook"  allowtransparency="true" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src="https://cdn.sophiainstitute.id/website/code/Embed/product.html?URLfeed=https://ebook.sophiainstitute.id/feeds/posts/summary&jumlah=10" frameborder="0" style="min-width:100%;height:340px;border:0" scrolling="no"> </iframe>'),$("div#RecentPost").html('<iframe loading="lazy" title="Widget Recent Post"  allowtransparency="true" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src="https://rawcdn.githack.com/ajax-jquery/cdn.sophiainstitute.id/17307f670731cadf3fb2af26e40ff28fb2646977/website/code/recentpost-carousel.html" frameborder="0" style="min-width:100%;height:480px;border:0;border-radius:20px" scrolling="no"> </iframe>'),$("div#ReelatedPost").html('<iframe loading="lazy" title="Widget Recent Post"  allowtransparency="true" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="min-width:100%;height:335px;border:0" src="https://cdn.sophiainstitute.id/website/code/Embed/relatedpost.html?URLfeed=https://www.sophiainstitute.id/feeds/posts/summary/-/'+ReelatedPostLab+'&jumlah=9" scrolling="no"> </iframe>');
/*! Scriptnya iframe AUTHORBOXXX WOW*/
$(document).ready(function(){var t=$(".entry-author a").attr("href").replace("https://www.sophiainstitute.id/search/label/%E1%8E%AAuthor%20","").split("%20").join("-").toLowerCase().split(".").join("");$("div#BOXAuthor").html('<iframe title="Widget Recent Post"  allowtransparency="true" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="margin:-50px 0 0 0;min-width:100%;height:480px;border:0" src="https://www.sophiainstitute.id/author/'+t+'" scrolling="no"> </iframe>')});
/*AUTHOR*/
$(document).ready(function(){$("head").append('<link href="https://cdn.sophiainstitute.id/website/code/Fontawesome/6.0.0/style.min.css" rel="stylesheet preload dns-prefetch" />');var a=$(".entry-author a").attr("href").replace("https://www.sophiainstitute.id/search/label/%E1%8E%AAuthor%20","").split("%20").join("-").toLowerCase().split(".").join("");$.ajax({url:"https://www.sophiainstitute.id/author/"+a,type:"GET",success:function(a){var t="https://www.sophiainstitute.id/author/"+$(".entry-author a").attr("href").replace("https://www.sophiainstitute.id/search/label/%E1%8E%AAuthor%20","").split("%20").join("-").toLowerCase().split(".").join(""),i=$(a).find("#namanya").text(),r=$(a).find("span#bionya").html(),s=$(a).find("span#fotonya img").attr("src"),e=$(a).find("span#LinkFB").text(),l=$(a).find("span#LinkIG").text(),d=$(a).find("span#LinkTW").text(),o=$("#AuthorBAwah");""==e&&""==d&&""==l?o.html("<div class='cardheader' id='cardheader'></div><div class='avatar' id='AvatarAuthor'><a href='"+t+"' rel='author' target='_blank'><img alt='"+i+"' id='fotoauthor' src='"+s+"' title='"+i+"'/></a></div><div class='info' id='infoauthor'><div class='title'><a href='"+t+"' rel='author' target='_blank'>"+i+"</a></div><div class='desc'>"+r+"</div></div><div class='bottom'></div>"):""==e&&""==d?o.html("<div class='cardheader' id='cardheader'></div><div class='avatar' id='AvatarAuthor'><a href='"+t+"' rel='author' target='_blank'><img alt='"+i+"' id='fotoauthor' src='"+s+"' title='"+i+"'/></a></div><div class='info' id='infoauthor'><div class='title'><a href='"+t+"' rel='author' target='_blank'>"+i+"</a></div><div class='desc'>"+r+"</div></div><div class='bottom'><a class='btn btn-ig' href='"+l+"' rel='nofollow' target='_blank'><i class='fab fa-instagram'></i></a></div>"):""==e&&""==l?o.html("<div class='cardheader' id='cardheader'></div><div class='avatar' id='AvatarAuthor'><a href='"+t+"' rel='author' target='_blank'><img alt='"+i+"' id='fotoauthor' src='"+s+"' title='"+i+"'/></a></div><div class='info' id='infoauthor'><div class='title'><a href='"+t+"' rel='author' target='_blank'>"+i+"</a></div><div class='desc'>"+r+"</div></div><div class='bottom'><a class='btn btn-primary btn-twitter btn-sm' href='"+d+"' rel='nofollow' target='_blank'><i class='fab fa-twitter-square'></i></a></div>"):""==d&&""==l?o.html("<div class='cardheader' id='cardheader'></div><div class='avatar' id='AvatarAuthor'><a href='"+t+"' rel='author' target='_blank'><img alt='"+i+"' id='fotoauthor' src='"+s+"' title='"+i+"'/></a></div><div class='info' id='infoauthor'><div class='title'><a href='"+t+"' rel='author' target='_blank'>"+i+"</a></div><div class='desc'>"+r+"</div></div><div class='bottom'><a class='btn btn-primary btn-facebook btn-sm' href='"+e+"' rel='nofollow' target='_blank'><i class='fab fa-facebook-square'></i></a></div>"):""==d?o.html("<div class='cardheader' id='cardheader'></div><div class='avatar' id='AvatarAuthor'><a href='"+t+"' rel='author' target='_blank'><img alt='"+i+"' id='fotoauthor' src='"+s+"' title='"+i+"'/></a></div><div class='info' id='infoauthor'><div class='title'><a href='"+t+"' rel='author' target='_blank'>"+i+"</a></div><div class='desc'>"+r+"</div></div><div class='bottom'><a class='btn btn-primary btn-facebook btn-sm' href='"+e+"' rel='nofollow' target='_blank'><i class='fab fa-facebook-square'></i></a><a class='btn btn-ig' href='"+l+"' rel='nofollow' target='_blank'><i class='fab fa-instagram'></i></a></div>"):""==l?o.html("<div class='cardheader' id='cardheader'></div><div class='avatar' id='AvatarAuthor'><a href='"+t+"' rel='author' target='_blank'><img alt='"+i+"' id='fotoauthor' src='"+s+"' title='"+i+"'/></a></div><div class='info' id='infoauthor'><div class='title'><a href='"+t+"' rel='author' target='_blank'>"+i+"</a></div><div class='desc'>"+r+"</div></div><div class='bottom'><a class='btn btn-primary btn-facebook btn-sm' href='"+e+"' rel='nofollow' target='_blank'><i class='fab fa-facebook-square'></i></a><a class='btn btn-primary btn-twitter btn-sm' href='"+d+"' rel='nofollow' target='_blank'><i class='fab fa-twitter-square'></i></a></div>"):""==e?o.html("<div class='cardheader' id='cardheader'></div><div class='avatar' id='AvatarAuthor'><a href='"+t+"' rel='author' target='_blank'><img alt='"+i+"' id='fotoauthor' src='"+s+"' title='"+i+"'/></a></div><div class='info' id='infoauthor'><div class='title'><a href='"+t+"' rel='author' target='_blank'>"+i+"</a></div><div class='desc'>"+r+"</div></div><div class='bottom'><a class='btn btn-primary btn-twitter btn-sm' href='"+d+"' rel='nofollow' target='_blank'><i class='fab fa-twitter-square'></i></a><a class='btn btn-ig' href='"+l+"' rel='nofollow' target='_blank'><i class='fab fa-instagram'></i></a></div>"):o.html("<div class='cardheader' id='cardheader'></div><div class='avatar' id='AvatarAuthor'><a href='"+t+"' rel='author' target='_blank'><img alt='"+i+"' id='fotoauthor' src='"+s+"' title='"+i+"'/></a></div><div class='info' id='infoauthor'><div class='title'><a href='"+t+"' rel='author' target='_blank'>"+i+"</a></div><div class='desc'>"+r+"</div></div><div class='bottom'><a class='btn btn-primary btn-facebook btn-sm' href='"+e+"' rel='nofollow' target='_blank'><i class='fab fa-facebook-square'></i></a><a class='btn btn-primary btn-twitter btn-sm' href='"+d+"' rel='nofollow' target='_blank'><i class='fab fa-twitter-square'></i></a><a class='btn btn-ig' href='"+l+"' rel='nofollow' target='_blank'><i class='fab fa-instagram'></i></a></div>")}})});
