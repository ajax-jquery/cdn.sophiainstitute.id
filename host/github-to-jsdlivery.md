---

layout: post
tittle: Github to Jsdlivry

---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/www.jsdelivr.com/9d08d41c6d3a827fa3f95a6a74e847bcd74bca98/css/app.css?v=9d08d41c6d3a827fa3f95a6a74e847bcd74bca98"/>

<style>
.start-using, .hidden{display:none}
</style>
<div id="page"><div class="p-github"><div class="bg"><div class="bg-inner"></div></div> <div class="content"><div class="title"><h1>Migrating from GitHub to jsDelivr</h1> <h2 class="subtitle">jsDelivr is a free, fast, and reliable Open Source CDN for npm and GitHub. <br> Most GitHub links can be easily converted to jsDelivr links.</h2></div> <div class="container"><div class="box"><div class="bar "><div class="circle"></div> <div class="line"><div class="line-inner"></div></div> <div class="circle circle-bottom"></div></div> <div class="icon-competitor"><img height="50" width="100" src="https://cdn.jsdelivr.net/www.jsdelivr.com/9d08d41c6d3a827fa3f95a6a74e847bcd74bca98/img/github.png" srcset="https://cdn.jsdelivr.net/www.jsdelivr.com/9d08d41c6d3a827fa3f95a6a74e847bcd74bca98/img/github@2x.png 2x"></div>

<div class="input-wrapper">
<input class="input" id="driveID" type="text" placeholder="Paste a GitHub link here" value></div>

<div class="icon-jsdelivr"><img height="34" width="140" src="https://cdn.jsdelivr.net/www.jsdelivr.com/9d08d41c6d3a827fa3f95a6a74e847bcd74bca98/img/logo-horizontal.svg"></div>
<div class="input-wrapper">

<input readonly class="input" id="output" type="text" placeholder="Get a jsDelivr link here" value>
<a class="copy hidden" style="background-color:#fff" data-clipboard-action="copy" data-clipboard-target="#output" id="copytoclipboardA">Copy</a>
</div> <div id="my"> </div></div></div></div></div></div>
<script src="/host/Script/Jsdlivery.js"></script>
<script>
//<![CDATA[
/* Pengaturan safeLink */
var setTimer = 1; //waktu detik
var setColor = '#f89000'; //warna loading timer
var setCopyUrl = 'Copy URL Download'; // generator salin
var setText = 'Harap Tunggu...'; //pesan pada tombol
var setCopyUrlA = 'Salin URL Download'; //generator Salin
var setCopyUrlB = 'Salin URL Safelink'; //generator Salin
var setCopiedA = 'COPY'; //generator tersalin
var setCopiedB = 'URL Safelink Tersalin'; //generator tersalin
//]]> 
</script>
