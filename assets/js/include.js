function includeHTML() {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(async el => {
      const file = el.getAttribute('data-include');
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Erro ao carregar ${file}`);
        const content = await response.text();
        el.innerHTML = content;
      } catch (err) {
        console.error(err);
        el.innerHTML = "<p>Erro ao carregar componente.</p>";
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', includeHTML);

  function abrirFecharMenu() {
    const div = document.getElementById("dropdown-menu");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "flex";
        div.style.flexDirection = "column"
    } else {
        div.style.display = "none";
    }
}