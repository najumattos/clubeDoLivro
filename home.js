function abrirFecharMenu() {
  const div = document.getElementById("dropdown-menu");
  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "flex";
    div.style.flexDirection = "column"
  } else {
    div.style.display = "none";
  }
}