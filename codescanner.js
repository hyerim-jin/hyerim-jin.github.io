<script src="js/jquery.js"></script>
<script src="js/WebCodeCam.js"></script>

<script src="js/qrcodelib.js"></script>
<script src="js/DecoderWorker.js"></script>

<div style="container">
  <canvas id="qr-canvas" width="320" height="240"></canvas>    
  <div class="scanner-laser laser-rightBottom" style="opacity: 0.5;"></div>
  <div class="scanner-laser laser-rightTop" style="opacity: 0.5;"></div>
  <div class="scanner-laser laser-leftBottom" style="opacity: 0.5;"></div>
  <div class="scanner-laser laser-leftTop" style="opacity: 0.5;"></div>
</div>


$('#qr-canvas').WebCodeCam({
  ReadQRCode: true, 
  ReadBarecode: true, 
  width: 320,
  height: 240,

  <a href="https://www.jqueryscript.net/tags.php?/video/">video</a>Source: {
    // max Videosource resolution width
    maxWidth: 640,
    // max Videosource resolution height
    maxHeight: 480 
  },

  flipVertical: false,  
  flipHorizontal: false,  

  // if zoom = -1, auto zoom for optimal resolution else int
  zoom: -1, 

  // string, audio file location
  beep: "js/beep.mp3", 

  // functional when value autoBrightnessValue is int
  autoBrightnessValue: false, 

  brightness: 0, 
  grayScale: false, 
  contrast: 0, 
  threshold: 0, 

  // or matrix, example for sharpness ->  [0, -1, 0, -1, 5, -1, 0, -1, 0]
  sharpness: [], 

  resultFunction: function(resText, lastImageSrc) {
    // resText as decoded code, lastImageSrc as image source 
    alert(resText);
  }
});


