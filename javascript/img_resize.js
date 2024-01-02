// cambiar la imagen de acuerdo al ancho de ventana
var picture = document.querySelector("#picture");
picture.src = "assets/images/illustration-sign-up-desktop.svg";

window.addEventListener("resize", () => {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  if (windowWidth <= 600) {
    picture.src = "assets/images/illustration-sign-up-mobile.svg";
  } else {
    picture.src = "assets/images/illustration-sign-up-desktop.svg";
  }
});
