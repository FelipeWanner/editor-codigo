const $lupa = document.querySelector(".lupa-js");
const $barraDePesquisa = document.querySelector(".barra-pesquisa-js");
let mostra = true;

$lupa.addEventListener("click", function(){
  if(mostra){
    $lupa.classList.remove("lupa");
    $lupa.classList.add("lupaX");
    $barraDePesquisa.classList.remove("barra-pesquisa__invisivel");
    mostra = false;
  } else if (!mostra){
    $lupa.classList.add("lupa");
    $lupa.classList.remove("lupaX");
    $barraDePesquisa.classList.add("barra-pesquisa__invisivel");
    mostra = true;
  }
});
