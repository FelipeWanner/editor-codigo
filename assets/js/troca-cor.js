const $cor = document.querySelector(".color-picker")
const $borda = document.querySelector(".editor-codigo__borda-js")

$cor.addEventListener("change", () => {
  const novaCor = document.querySelector(".color-picker").value
  $borda.style.borderColor = novaCor
  $borda.style.backgroundColor = novaCor
})


