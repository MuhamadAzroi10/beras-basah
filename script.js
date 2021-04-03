$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 50) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});

function validasi() {
  var username = document.forms["myForm"]["username"].value;
  var password = document.forms["myForm"]["password"].value;
  if (username == "Roi" && password == "123") {
    return true;
  } else if (username == "" || password == "") {
    alert("Masukan username dan password Anda");
    return false;
  } else {
    alert("Username atau password yang Anda masukan SALAH");
    return false;
  }
}

AOS.init();
