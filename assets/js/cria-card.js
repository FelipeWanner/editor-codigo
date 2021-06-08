const $cardContainer = document.querySelector(".card-container-js")

new function () {
  montaProjetos()
}

function montaProjetos() {
  if (localStorage.length == 0) {
    return
  }
  /* Primeiro estou verificando se o localStorage tem algum projeto para pegar, se o lenght forigual a zero,
  significa que não, e a funcao não precisa continuar */
  let listaDeProjetos = []
  for (let i = 0; i < localStorage.length; i++) {
    listaDeProjetos.push(JSON.parse(localStorage.getItem(i)))
  }

  console.log(listaDeProjetos)
  listaDeProjetos.forEach((projeto) => {
    const criaCard = montaCard(projeto)
    $cardContainer.innerHTML += criaCard
    const $areaCodigo = $cardContainer.querySelector(`[data-id="${projeto.id}"]`)
    $areaCodigo.querySelector("code").innerText = projeto.detalhes.codigo
  })
}

/* 
1º : Como o localStorage é um objeto e não um array, primeiro precisamos guardar todos os
projetos dentro de uma lista, para poder percorrer por ela.

2º : Para isso, utilizamos o for para percorrer enquanto o i for menor que o tamanho do localStorage, e, para pegar 
um item do localStorage, utilizamos a funcao localStorage.getItem(), passando como parametro o id do item
que queremos (nesse caso, nossos cards tem os seus id como numeros, portanto, simplesmente coloquei "i").

3º : antes de pegar o item, vamos transforma-lo de texto para objeto novamente, com a funcao JSON.parse;
 */

function montaCard(projeto) {
  console.log(projeto.id)
  let card = `
    <div class="editor-codigo" data-id="${projeto.id}">
      <div class="editor-codigo__borda" style="background-color:${projeto.detalhes.corDaBorda}; border-color:${projeto.detalhes.corDaBorda};">
        <div class="editor-codigo__barra-circulos">
          <img src="../../img/mac_buttons.svg">
          <div class="editor-codigo-js">
            <code class="editor-codigo__canvas hljs ${projeto.detalhes.linguagem}" contenteditable="false" aria-label="editor"></code>
          </div>
        </div>
      </div>
      <div class="editor-codigo__informacoes">
        <h1 class="editor-codigo__informacoes__titulo">${projeto.detalhes.tituloDoProjeto}</h1>
        <p class="editor-codigo__informacoes__descricao">${projeto.detalhes.descricao}</p>
        <div class="editor-codigo__informacoes__container">
          <div class="editor-codigo__informacoes__curtidas-container">
            <img src="../img/balao-comentarios.png">
            <p>9</p>
            <img src="../img/coracao-curtidas.png">
            <p>9</p>
          </div>
          <div class="editor-codigo__informacoes__usuario-container">
            <img class="editor-codigo__informacoes__usuario-container__foto-perfil" src="../img/Photo.png" alt="Logo da alura Dev">
            <p>@Harry</p>
          </div>
        </div>
      </div>
    </div>
  `
  return card
}