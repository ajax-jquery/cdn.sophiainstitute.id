---

layout: post 
title: CDN Host

---

<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,700|Source+Code+Pro:400,700">
<link rel="stylesheet" href="//rawcdn.githack.com/neoascetic/rawgithack/9e126bd/rawgithack.css">
<div class="bd"><div class="content"><div class="url-helper"><div class="url-paste"><p id="url-form"><label for="url" class="offscreen">URL:</label><input id="url" class="url" type="url" placeholder="Paste an URL here" autofocus tabindex="1"></p></div><div class="column"><p class="url-container"><input id="url-prod" class="url" placeholder="https://rawcdn.githack.com/user/repo/tag/file" readonly tabindex="2"> <button id="url-prod-copy" class="url-copy-button" data-clipboard-target="#url-prod" title="Copy URL" disabled style="display:inline-block"><img src="//rawcdn.githack.com/neoascetic/rawgithack/4558441/clippy.svg" alt=""></button></p></div><div class="column"><p class="url-container"><input id="url-dev" class="url" placeholder="https://raw.githack.com/user/repo/branch/file" readonly tabindex="3"> <button id="url-dev-copy" class="url-copy-button" data-clipboard-target="#url-dev" title="Copy URL" disabled style="display:inline-block"><img src="//rawcdn.githack.com/neoascetic/rawgithack/4558441/clippy.svg" alt=""></button></p></div></div></div></div>

<script src="https://rawcdn.githack.com/zenorocha/document.queryCommandSupported/v1.0.0/dist/queryCommandSupported.min.js"></script>
<script src="https://rawcdn.githack.com/zenorocha/clipboard.js/v1.5.10/dist/clipboard.min.js"></script>
<script src="https://rawcdn.githack.com/jackmoore/autosize/master/dist/autosize.min.js"></script>
<script src="https://rawcdn.githack.com/neoascetic/rawgithack/c3942b4/rawgithack.js"></script>

<style>
/* CSS Safelink ubah warna cari kode #f89000 */
.wcSafeShow{position:relative;width:35px;height:35px;display:flex;margin:auto} /* atur margin untuk mengubah posisi icon */
.safeWrap{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.5);z-index:999999;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.panel-primary{background:#fff;text-align:center;display:block;overflow:hidden;width:100%;max-width:80%;padding:0 0 25px 0;border-radius:5px;margin:15% auto;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)}.panel-body{position:relative;margin:0 25px}.panel-heading h2{background:#f89000;color:#fff;margin:0 auto 25px auto;font-weight:400;padding:15px;font-size:20px}.panel-body input{background:rgba(0,0,0,0.04);width:100%;padding:15px;border-radius:5px;border:1px solid transparent;font-size:16px;color:#000;outline:none;text-indent:60px;transition:all .3s}.panel-body input:focus{background:#fff;color:#000;border-color:#f89000;outline:none;box-shadow:0 0 5px rgba(0,0,0,0.1)}.panel-body .input-group-btn{position:absolute;top:0;right:0}.panel-body button{border-radius:0 5px 5px 0;background:#f89000;color:#fff;border:0;padding:17px 52px;font-weight:500;outline:none;transition:all .3s}.panel-body button:hover,.panel-body button:focus{background:#f89000;outline:none}#generatelink{margin:20px auto 0 auto}#generatelink button{background:#f89000;border-radius:5px;font-size:14px;padding:14px 32px}#generatelink button:hover,#generatelink button:focus{background:#f89000;border-radius:5px;font-size:14px}#generatelink input{background:rgba(0,0,0,0.05);text-indent:0}#generatelink input:hover,#generatelink input:focus{background:#f89000;border-color:transparent;box-shadow:none}#generateloading{margin:20px auto 0 auto;font-size:20px;color:#f89000;font-weight:normal}
.panel-body:before{content:'\279C';background:rgba(0,0,0,0.05);position:absolute;left:0;top:0;color:#888;padding:17px 20px;border-radius:5px 0 0 5px;border-right:1px solid transparent;transition:all .6s}.panel-body:focus-within:before{content:'\279C';background:#f89000;color:#fff}.bt-success{display:inline-flex;align-items:center;margin:15px 15px;padding:10px 20px;outline:0;border:0;border-radius:2px;color:#fefefe;background-color:#f89000;font-size:14px;white-space:nowrap;overflow:hidden;max-width:100%;line-height:2em}.bt-success:hover{color:#f89000;background-color:transparent;border:1px solid #f89000}.hidden,.bt-success.hidden{display:none}.wcSafeClose{display:inline-flex;align-items:center;margin:15px auto -15px;padding:5px 15px;outline:0;border:0;border-radius:2px;color:#fefefe;background-color:#f89000;font-size:14px;white-space:nowrap;overflow:hidden;max-width:100%;line-height:2em}.copytoclipboard{margin:10px auto 5px}
#timer{margin:0 auto 20px auto;width:80px;text-align:center}.pietimer{position:relative;font-size:200px;width:1em;height:1em}.pietimer > .percent{position:absolute;top:25px;left:12px;width:3.33em;font-size:18px;text-align:center;display:none}.pietimer > .slice{position:absolute;width:1em;height:1em;clip:rect(0px,1em,1em,0.5em)}.pietimer >.slice.gt50{clip:rect(auto,auto,auto,auto)}.pietimer > .slice > .pie{border:0.06em solid #c0c0c0;position:absolute;width:1em;height:1em;clip:rect(0em,0.5em,1em,0em);border-radius:0.5em}.pietimer > .slice > .pie.fill{-moz-transform:rotate(180deg)!important;-webkit-transform:rotate(180deg)!important;-o-transform:rotate(180deg)!important;transform:rotate(180deg)!important}.pietimer.fill > .percent{display:none}.pietimer.fill > .slice > .pie{border:transparent;background-color:#c0c0c0;width:1em;height:1em}
.wcSafeShow svg{fill:none!important;stroke:#48525c;stroke-linecap:round;stroke-linejoin:round;stroke-width:1;width:22px;height:22px}
#generateloading svg{width:22px;height:22px;fill:#f89000}
.btn-primary svg,.darkMode .btn-primary svg{fill:none;stroke:#fff;stroke-width:1.5;width:22px;height:22px;vertical-align:-5px;margin-right:10px}
@media screen and (max-width:768px){.panel-body .input-group-btn{display:block;position:relative;overflow:hidden;margin:20px auto 0 auto}.panel-body button{border-radius:5px;width:100%}}
@media screen and (max-width:480px){.panel-primary{margin-top:30%}}
  
/* CSS darkmode sesuaikan classnya jika berbeda atau hapus bagian ini */
.darkMode .panel-primary{background:#2d2d30;color:#fefefe}
.darkMode .panel-body input,.darkMode .panel-body input:focus{background:#2d2d30;color:#fefefe}
.darkMode .wcSafeClose{color:#fefefe}
</style>

<div class='panel-primary'>
<div class='panel-heading'>
<h2>Generate Link</h2>
</div>
<div class='panel-body'>
<input autocomplete='off' id='generateurl' oninvalid='this.setCustomValidity(&apos;Please Enter valid link&apos;)' placeholder='Enter your link here...' required='required' type='url'/>
<span class='input-group-btn'>
<button class='btn-primary' id='btngenerate' oninvalid='this.setCustomValidity(&apos;Please Enter valid link&apos;)' required='required' type='button'>
<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M18.865 5.1238C19.302 5.2768 19.594 5.6888 19.594 6.1518V12.9248C19.594 14.8178 18.906 16.6248 17.691 18.0248C17.08 18.7298 16.307 19.2788 15.486 19.7228L11.928 21.6448L8.364 19.7218C7.542 19.2778 6.768 18.7298 6.156 18.0238C4.94 16.6238 4.25 14.8158 4.25 12.9208V6.1518C4.25 5.6888 4.542 5.2768 4.979 5.1238L11.561 2.8108C11.795 2.7288 12.05 2.7288 12.283 2.8108L18.865 5.1238Z'/><path class='svg-c' d='M9.32251 11.9177L11.2145 13.8107L15.1125 9.91269'/></svg>Generate</button></span>
<div class='hidden' id='generateloading'>
<svg viewBox='0 0 50 50' x='0px' y='0px'><path d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'><animateTransform attributeName='transform' attributeType='xml' dur='0.6s' from='0 25 25' repeatCount='indefinite' to='360 25 25' type='rotate'/></path></svg></div>
<div class='hidden' id='generatelink'>
<input id='resulturl' onclick='this.focus();this.select()' readonly='readonly' type='text'/>
<button class='copytoclipboard' data-clipboard-action='copy' data-clipboard-target='#resulturl' id='copytoclipboard'>Copy URL</button></div></div>
<a class='wcSafeClose' href='javascript:void'>Close</a>
</div>
<script>
$(".wcSafeShow").click(function(){$(".safeWrap").fadeIn()}),$(".wcSafeClose").click(function(){$(".safeWrap").fadeOut(),$("#generatelink").addClass("hidden"),$("#generateurl").val("")});$(document).ready(function(){$("#btngenerate").on("click",function(){var e=$("#generateurl").val(),r=$("#generatelink"),a=$("#generateloading"),n=$("#resulturl");if(""==e)return $("#generateurl").focus(),!1;$("#copytoclipboard").html(setCopyUrl),a.removeClass("hidden"),r.addClass("hidden"),$.ajax({url:"https://link.sophiainstitute.id/feeds/posts/summary/-/Pendidikan?alt=json-in-script",type:"get",dataType:"jsonp",success:function(t){var o="",l=t.feed.entry,s=new Array;if(void 0!==l){for(var i=0;i<l.length;i++){for(var d=0;d<l[i].link.length;d++)if("alternate"==l[i].link[d].rel){o=l[i].link[d].href;break}s[i]=o;var c=Math.random()*s.length;c=parseInt(c)}resultgenerate=s[c]+"#?o="+aesCrypto.encrypt(convertstr(e),convertstr("root")),a.addClass("hidden"),r.removeClass("hidden"),n.val(resultgenerate)}else n.val("No result!")},error:function(){n.val("Error loading feed!")}})}),new ClipboardJS(".copytoclipboard").on("success",function(e){$("#copytoclipboard").html(setCopied)})});
</script>
<script>
//<![CDATA[
/* Pengaturan safeLink */
var setTimer = 10; //waktu detik
var setColor = '#f89000'; //warna loading timer
var setText = 'Harap Tunggu...'; //pesan pada tombol
var setCopyUrl = 'Salin URL'; // generator salin
var setCopied = 'URL Tersalin'; //generator tersalin
//]]>
</script>
<script src="/safelink/css/wcsafelink.js"></script>
