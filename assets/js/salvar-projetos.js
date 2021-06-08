const $botaoSalvar = document.querySelector(".botao-salvar-js")
const $tituloDoProjeto = document.querySelector(".campo-nome-pojeto-js")
const $descricaoDoProjeto = document.querySelector(".campo-descricao-js")
const $corDaBorda = document.querySelector(".color-picker")
const $codigo = document.querySelector(".editor-codigo-js").querySelector("code")
const $linguagem = document.querySelector("#selecao-linguagem-js")

$botaoSalvar.addEventListener("click", () => {
  if (typeof(Storage) !== "undefined"){
    const projeto = montaProjeto()
    salvarProjetoNoLocalStorage(projeto)
    limpaCampos()
  } else if (typeof(Storage) === "undefined"){
    alert("infelizmente o seu navegador não suporta o Local-Storage, e não será possível salvar o projeto")
  }
})

function montaProjeto() {
  let projeto = {
    "id" : localStorage.length,
      /* Quero que o numero do Id seja igual ao tamanho de itens dentro do localStorage, ou seja, se houver 1 item,
      o id sera 1, se houver zero, o id será zero, se houver 30... */
    "detalhes" : {
      "tituloDoProjeto" : $tituloDoProjeto.value,
      "descricao" : $descricaoDoProjeto.value,
      "corDaBorda" : $corDaBorda.value,
      "codigo" : $codigo.innerText,
      "linguagem" : $linguagem.value
    }
  }
  return projeto
}

function salvarProjetoNoLocalStorage(objetoJson){
  localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}
/* Sobre salvar projetos no localStorage, existem alguns detalhes:
    1º : a função para salvar algo no localStorage é o setItem(), e ela recebe 2 parametros, um id e
    e um texto (o localStorage recebe APENAS textos (strings));
    Para pegarmos algo do localStorage, utilizamos o processo inverso com a funcao localStorage.getItem(), passando
    como parametro o id do item que queremos.

    2º : como queremos passar um objeto para o localStorage, precisamos primeiro transforma-lo em uma string, e 
    para isso, passamos o objeto como parametro da funcao JSON.stringify()

    3º : o localStorage NÃO é um array, mas sim um objeto, por isso ele não guarda nossos arquivos em sequencia,
    e é por isso que devemos criar uma lógica de keys para guardar a ordem dos nossos arquivos.

    4º : para limpar o localStoraga, no console do navegador, chamamos a funcao localStorage.clear()
*/

function limpaCampos() {
  $tituloDoProjeto.value = ""
  $descricaoDoProjeto.value = ""
  $codigo.innerText = ""
  $linguagem.value = "JavaScript"
}