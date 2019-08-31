var csrftoken = getCookie("csrftoken");



function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
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



// ##########################Start of Custom Code#####################
function send() {
  var options = document.getElementById("option").value;
  console.log("HI")
  if (options == "4") {
    var fd = new FormData();

    fd.append('csrfmiddlewaretoken', csrftoken);
    fd.append('text', document.getElementById("textarea").value);
    console.log('Sending Text to Django')
    var tet1 = $.ajax({
      url: '/home/features/sumtext',
      type: 'POST',
      data: fd,
      async: false,
      contentType: false,
      processData: false,
      success: function (data) {
        console.log(data);
        
        sessionStorage.setItem('summary', data)
        location.replace('/home/features/chatbot')
      },
      error: function (error) {
        console.log(error);
      }
    }).responseText;
  }
  // console.log(tet1);
}



// #################Toggle Functions###############

function file() {
  var x = document.getElementById("File");
  var y = document.getElementById("img1");
  var z = document.getElementById("url1");
  var t = document.getElementById("text1");
  var go = document.getElementById("go");
  document.getElementById("option").value = "1";
  go.style.display = "block"
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    t.style.display = "none";
  } else {
    x.style.display = "none";
  }

}

function url1() {
  var x = document.getElementById("File");
  var y = document.getElementById("img1");
  var z = document.getElementById("url1");
  var t = document.getElementById("text1");
  var go = document.getElementById("go");
  document.getElementById("option").value = "3";
  go.style.display = "block"
  if (z.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    t.style.display = "none";
  } else {
    z.style.display = "none";
  }

}

function img1() {
  var x = document.getElementById("File");
  var y = document.getElementById("img1");
  var z = document.getElementById("url1");
  var t = document.getElementById("text1");
  var go = document.getElementById("go");
  document.getElementById("option").value = "2";
  go.style.display = "block"
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    t.style.display = "none";

  } else {
    y.style.display = "none";
  }

}

function text1() {
  var x = document.getElementById("File");
  var y = document.getElementById("img1");
  var z = document.getElementById("url1");
  var t = document.getElementById("text1");
  var go = document.getElementById("go");
  document.getElementById("option").value = "4";
  go.style.display = "block"
  if (t.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    t.style.display = "block";
  } else {
    t.style.display = "none";
  }

}