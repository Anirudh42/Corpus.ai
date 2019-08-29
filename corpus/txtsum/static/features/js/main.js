function readURL(input) {
    if (input.files && input.files[0]) {
      console.log(input.files[0]);
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
      
  
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
          $('.image-upload-wrap').addClass('image-dropping');
      });
      $('.image-upload-wrap').bind('dragleave', function () {
          $('.image-upload-wrap').removeClass('image-dropping');
  });

  function summ(){
    document.getElementById("comment").style.display = "block";
    var corpus = document.getElementById("myVar").value;
    document.getElementById("comment").innerHTML = corpus;
  }

  function file(){
      var x = document.getElementById("File");
      var y = document.getElementById("img1");
      var z = document.getElementById("url1");
      var t = document.getElementById("text1");
      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        t.style.display = "none";
      } else {
        x.style.display = "none";
      }
    
  }

  function url1(){
    var x = document.getElementById("File");
    var y = document.getElementById("img1");
    var z = document.getElementById("url1");
    var t = document.getElementById("text1");
    if (z.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      t.style.display = "none";
    } else {
      z.style.display = "none";
    }
  
}

function img1(){
  var x = document.getElementById("File");
  var y = document.getElementById("img1");
  var z = document.getElementById("url1");
  var t = document.getElementById("text1");
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    t.style.display = "none";
  } else {
    y.style.display = "none";
  }

}

function text1(){
  console.log("HI")
  var x = document.getElementById("File");
  var y = document.getElementById("img1");
  var z = document.getElementById("url1");
  var t = document.getElementById("text1");
  if (t.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    t.style.display = "block";
  } else {
    t.style.display = "none";
  }

}

  