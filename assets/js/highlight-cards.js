const $tagCode = document.querySelectorAll("code")

$tagCode.forEach(element => {
  hljs.highlightElement(element)
});