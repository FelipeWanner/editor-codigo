const $menuImagemAbrir = document.querySelector(".menu-abre-fecha-js");
const $menuDiv = document.querySelector(".menu-hamburguer-js");
let abrir = true;

$menuImagemAbrir.addEventListener("click", function(){
  if(abrir){
    $menuDiv.classList.remove("invisivel")
    $menuImagemAbrir.classList.remove("abrir-menu")
    $menuImagemAbrir.classList.add("fechar-menu")
    abrir = false
  } else if (!abrir){
    $menuDiv.classList.add("invisivel")
    $menuImagemAbrir.classList.add("abrir-menu")
    $menuImagemAbrir.classList.remove("fechar-menu")
    abrir = true
  }
});