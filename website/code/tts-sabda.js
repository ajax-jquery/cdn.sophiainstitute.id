


function submitTryit() {
let Path=Pathlink,
rootstyle=document.getElementById("styleroot").innerHTML,
isi_tts=ISI_POSTINGANSI,
  Mydate=new Date(DatePost).getTime();


  function generateRandomString(length = 50) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Contoh penggunaan
let MYstring=generateRandomString();

var artikel=localStorage.getItem("Bahasa");-1!==artikel.indexOf("-")&&(artikel=artikel.split("-")[0]),-1!==artikel.indexOf("_")&&(artikel=artikel.split("_")[0]),console.log(artikel);var bahasa="Google id-ID-Wavenet-A",bahasacode="id-ID";switch(artikel){
  case"en":bahasacode="en-US";bahasa="Amazon2 Danielle";break;
  case"ar":bahasacode="arb";bahasa="Amazon Zeina";break;
  case"hi":bahasacode="hi-IN";bahasa="Google hi-IN-Neural2-A";break;
  case"iw":bahasacode="he-IL";bahasa="Google he-IL-Wavenet-B";break;
  case"de":bahasacode="de-DE";bahasa="Google de-DE-Standard-A";break;
  case"ta":bahasacode="ta-IN";bahasa="Google ta-IN-Standard-A";break;
  case"es":bahasacode="es-ES";bahasa="Amazon Conchita";break;
  case"it":bahasacode="it-IT";bahasa="Amazon2 Adriano";break;
  case"ms":bahasacode="ms-MY";bahasa="Google ms-MY-Standard-A";break;
  case"pt":bahasacode="pt-PT";bahasa="Amazon Cristiano";break; 
  case"zh-CN":case"zh":bahasacode="yue-CN";bahasa="Amazon2 Hiujin";break;
  case"ja":bahasacode="ja-JP";bahasa="Amazon2 Kazuha";break;
  case"ru":bahasacode="ru-RU";bahasa="Amazon Maxim";break;
  default:bahasacode="id-ID";bahasa="Google id-ID-Wavenet-A"
  }
  var html='<div class="ra-group"><div class="ra-btn ra-btn-play"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg><svg width="20" height="20" viewBox="0 0 24 24"><path d="M10 24h-6v-24h6v24zm10-24h-6v24h6v-24z"/></svg></div></div><div class="ra-group"><div class="ra-btn ra-btn-rewind"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M8 16.61c.33.2.944.39 1.672.39 1.429 0 2.305-.728 2.305-1.715 0-.745-.546-1.256-1.222-1.377v-.018c.693-.234 1.03-.71 1.03-1.308 0-.771-.667-1.403-1.862-1.403-.736 0-1.403.208-1.741.425l.27.953c.225-.139.71-.338 1.169-.338.563 0 .831.251.831.589 0 .476-.555.649-.996.649h-.52v.944h.537c.58 0 1.135.251 1.135.814 0 .416-.347.745-1.03.745-.537 0-1.074-.216-1.309-.347l-.269.997zm6.904-5.431c-1.456 0-2.14 1.282-2.14 2.919.008 1.594.65 2.902 2.105 2.902 1.43 0 2.131-1.204 2.131-2.937 0-1.542-.598-2.884-2.096-2.884zm-.009 4.824c-.502 0-.813-.615-.813-1.905 0-1.316.329-1.923.806-1.923.527 0 .797.658.797 1.905-.001 1.283-.279 1.923-.79 1.923zm-12.881-7.594l1.701 1.078c-.46 1.08-.715 2.267-.715 3.513 0 4.962 4.037 9 9 9s9-4.038 9-9c0-3.525-2.04-6.577-5-8.052v3.052l-6-4 6-4v2.768c4.095 1.6 7 5.571 7 10.232 0 6.075-4.925 11-11 11s-11-4.925-11-11c0-1.641.369-3.192 1.014-4.591zm1.986-4.409l6-4v8l-6-4z"/></svg></div></div><div class="ra-group ra-grow-1"><div class="ra-status-bg ra-grow-1"><div class="ra-load-progress-bar"></div><div class="ra-playback-position-bar"></div><div class="ra-seek-knob"></div></div><div class="ra-time-text">00:00</div></div><div class="ra-group"><div class="ra-btn ra-btn-menu" data-toggle="#ra-player .ra-menu-overlay">&#x22ee;</div><div class="ra-overlay ra-menu-overlay"><div class="ra-menu-item"><div class="ra-logo">SiteNarrator&trade;</div></div><div class="ra-menu-item"><img src="https://assets.readaloudwidget.com/embed/skins/default/voice-icon.png"/><select class="ra-voice-select ra-grow-1"><option>Select Voice</option></select></div><div class="ra-menu-item ra-no-ios"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z"/></svg><div class="ra-rate-bg ra-grow-1"><div class="ra-rate-bar"></div><div class="ra-rate-knob"></div></div></div><div class="ra-menu-item ra-no-ios"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z"/></svg><div class="ra-volume-bg ra-grow-1"><div class="ra-volume-bar"></div><div class="ra-volume-knob"></div></div></div></div></div>',text=`
  <!DOCTYPE html>
<html lang="`+artikel+`">
<head>
<script>
let bahasa="`+bahasa+`",
bahasacode="`+bahasacode+`",
Path="`+Path+`";
<\/script>
<meta name="referrer" content="none">
<style>`+rootstyle+`</style>
<style>#postSplit div,#postSplit img,#postSplit figure,#postSplit hr,#postSplit iframe{display:none}.read-aloud,.read-aloud *{font-size:0px;margin:0;color:#fff0!important}#ra-player svg {fill:var(--linkB)}.ra-button{width:99%;margin:0 0 0 -5px;padding:.3em 0 .3em 10px;border-radius:.25em;background:linear-gradient(#fff,var(--mobB));box-shadow:0 1px .2em grey;display:inline-flex;align-items:center;cursor:pointer}.ra-button svg{height:1em;margin:0 .5em 0 0}div#postSplit{line-height:0;width:100%;margin:0}#ra-player .ra-overlay{right:0;display:none;position:absolute;z-index:99999;background:linear-gradient(#fff,var(--mobB),var(--mobB));border-radius:0 0 .5em .5em;box-shadow:0 1px .2em grey}#ra-player .ra-menu-item{width:calc(49% - 50px)!important;display:inline-flex!important}#ra-player .ra-logo{width:1px;font-size:1px!important;text-shadow:1px 1px #0000!important;color:#0000!important}#ra-player .ra-menu-item:first-child{width:1px!important}#ra-player>div:nth-child(4)>div.ra-overlay.ra-menu-overlay>div:nth-child(2){display:none!important}#ra-player .ra-overlay.ra-menu-overlay { display: block !important; top: 2.5rem; width: 100%!important; }body{position:relative;overflow:hidden}div#ra-player{max-width:99%!important}#ra-player .ra-logo,#ra-player .ra-time-text{font-size:smaller;font-weight:700;text-shadow:1px 1px #fff}#ra-player{display:flex;border-radius:.25em;background:linear-gradient(#fff,var(--mobB));box-shadow:0 1px .2em gray;user-select:none;font-family:Arial,sans-serif;max-width:30em}#ra-player .ra-grow-1{flex-grow:1}#ra-player .ra-btn,#ra-player .ra-group:nth-child(3){display:flex;align-items:center}#ra-player .ra-group:not(:last-child){border-right:2px solid #e2e2e2}#ra-player .ra-group:nth-child(3)>:first-child{margin-left:1em}#ra-player .ra-group:nth-child(3)>:nth-child(2){margin:0 1em 0 .8em}#ra-player img{display:block;height:1em;margin:0}#ra-player .ra-btn{cursor:pointer;width:2.5em;height:2em;justify-content:center}#ra-player.ra-playing .ra-btn-play>:first-child,#ra-player:not(.ra-playing) .ra-btn-play>:not(:first-child){display:none}#ra-player.ra-loading .ra-status-bg,#ra-player.ra-stalled .ra-status-bg{background-color:#888;background-image:linear-gradient(-45deg,rgba(255,255,255,.4) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.4) 50%,rgba(255,255,255,.4) 75%,transparent 75%,transparent);background-size:1em 1em;animation:1s linear infinite cssProgressActive}#ra-player .ra-rate-bg,#ra-player .ra-status-bg,#ra-player .ra-volume-bg{position:relative;height:.8em;border-radius:1em;background-image:linear-gradient(#888,#959595,#a7a7a7,#b4b4b4)}#ra-player .ra-time-text{color:#666}#ra-player .ra-load-progress-bar{position:absolute;height:100%}#ra-player .ra-playback-position-bar,#ra-player .ra-rate-bar,#ra-player .ra-volume-bar{position:absolute;height:100%;border-radius:1em;background:linear-gradient(var(--mobB),var(--linkC),var(--linkB))}#ra-player .ra-rate-knob,#ra-player .ra-seek-knob,#ra-player .ra-volume-knob{position:absolute;cursor:ew-resize;margin:-.4em 0 0 -.5em;width:24px;height:24px;border-radius:10.4em;background:linear-gradient(var(--mobB),var(--linkC),var(--linkB));touch-action:none}#ra-player .ra-voice-select{min-width:0;padding:2px 1px;border:1px solid #a8cbc6}#ra-player .ra-btn-menu{color:#666;font-weight:700}#ra-player .ra-overlay{display:none;position:absolute;z-index:99999;background:linear-gradient(#fff,var(--mobB),var(--mobB));border-radius:0 0 .5em .5em;box-shadow:0 1px .2em gray}#ra-player .ra-overlay.ra-menu-overlay{width:12em;margin-left:-9.5em;border-radius:.5em}#ra-player .ra-menu-item{display:flex;align-items:center;padding:.8em 1.2em .8em 1em}#ra-player .ra-menu-item:first-child{padding:.4em 0;justify-content:center}#ra-player .ra-menu-item:last-child{padding-bottom:1.1em}#ra-player .ra-menu-item>:not(:first-child){margin-left:.8em}#ra-player .ra-logo{color:#b5b5b5}@keyframes cssProgressActive{0%{background-position:0 0}100%{background-position:1em 1em}}#ra-player > div:nth-child(4) > div.ra-btn.ra-btn-menu,.hidden { display: none; }</style><link href="//ws.readaloudwidget.com" rel="preconnect dns-prefetch"/> <link href="//cdn.readaloudwidget.com" rel="preconnect dns-prefetch"/> <link href="//assets.sitespeaker.link" rel="preconnect dns-prefetch"/> <link href="//assets.readaloudwidget.com" rel="preconnect dns-prefetch"/> 
</head>
<body id='BodyTTS' class=''>
<div id="tts_article">
<div id="dengar" onclick="dengar()"> 
<div id="ra-player" data-skin="https://sabdaliterasi.xyz/assets/html/skin/tema">`+html+`</div></div>
<audio id="ra-audio" data-lang="`+bahasacode+`" data-voice="`+bahasa+`" data-key="afs537fsjdkr846ta241f263sfad25"></audio></div>
<article><div id="postSplit">`+isi_tts+`</div></article>
<script>
let A=document.getElementById("postSplit");
    let K = A.querySelectorAll("h1,h2,h3,h4,h5,h6,p,blockquote,ul,ol");
    for (let i=0;i < K.length;i++){
    
K[i].setAttribute('class','read-aloud');
    
    };
function dengar(){
document.getElementById("dengar").innerHTML = '<div id="ra-player" data-skin="https://sabdaliterasi.xyz/assets/html/skin/tema" class="ra-loading">`+html+`</div>';document.getElementById("dengar").removeAttribute("onclick");
setTimeout(go(), 2000);
}
</\script>
<script src="https://cdn.sophiainstitute.xyz/website/code/go-tts.js?o=${MYstring}"><\/script>
</body>
</html>
  `;
  var ifr = document.createElement("iframe");
  ifr.setAttribute("frameborder", "0");
  ifr.setAttribute("scrolling", "no");
  ifr.setAttribute("id", "iframeResult");
  ifr.setAttribute("height", "103");
  document.getElementById("iframewrapper").innerHTML = "";
  document.getElementById("iframewrapper").appendChild(ifr);
  var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
  ifrw.document.open();
  ifrw.document.write(text);  
  ifrw.document.close();
}
submitTryit()


