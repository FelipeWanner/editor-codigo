const $lupa = document.querySelector(".lupa-js")
const $barraDePesquisa = document.querySelector(".barra-pesquisa-js")
const $logoAlura = document.querySelector(".logo-alura-dev")
let mostra = true;

$lupa.addEventListener("click", function(){
  if(mostra){
    $lupa.classList.remove("lupa")
    $lupa.classList.add("lupaX")
    $barraDePesquisa.classList.add("barra-pesquisa__largura-total")
    $barraDePesquisa.classList.remove("barra-pesquisa__invisivel")
    $logoAlura.classList.add("invisivel")
    mostra = false;
  } else if (!mostra){
    $lupa.classList.add("lupa")
    $lupa.classList.remove("lupaX")
    $barraDePesquisa.classList.add("barra-pesquisa__invisivel")
    $barraDePesquisa.classList.remove("barra-pesquisa__largura-total")
    $logoAlura.classList.remove("invisivel")
    mostra = true
  }
})
