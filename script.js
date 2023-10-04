document.addEventListener("DOMContentLoaded", function() {
  let navLink = document.getElementById("nav-link-opciones");
  let opciones = document.getElementById("opciones");

  navLink.addEventListener("click", function() {
    opciones.classList.toggle("ocultar");
  });
});
