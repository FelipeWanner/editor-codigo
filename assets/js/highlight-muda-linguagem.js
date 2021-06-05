const $areaDoCodigo = document.querySelector(".editor-codigo-js")
const $selecaoDeLinguagem = document.querySelector("#selecao-linguagem-js")
const $botao = document.querySelector(".botao-syntax-highlight-js")

function mudaLinguagem() {
  const codigo = $areaDoCodigo.querySelector("code") //capturando a tag code dentro da div ".editor-codigo-js"//
  $areaDoCodigo.innerHTML = `<code class="editor-codigo__canvas hljs ${$selecaoDeLinguagem.value}" contenteditable="true" aria-label="editor"></code>`
  $areaDoCodigo.querySelector("code").innerText = codigo.innerText 
  /*essa linha garante que o que está sendo colocado dentro da tag code é um texto, e deve ser interpretado como
  um texto pelo navegador */
}

$selecaoDeLinguagem.addEventListener("change", () =>{
  mudaLinguagem()
})

$botao.addEventListener("click", () => {
  const codigo = $areaDoCodigo.querySelector("code")
  hljs.highlightBlock(codigo)
})