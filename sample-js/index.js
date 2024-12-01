function del(element) {
  element.parentElement.remove()
}

function add() {
  const ul = document.querySelector("ul")
  const li = document.createElement("li")
  const div = document.createElement("div")
  const btn = document.createElement("button")
  const idx = ul.children.length + 1

  div.innerText = `add${idx}`
  btn.innerText = "削除"
  btn.onclick = () => del(btn)
  li.append(div)
  li.append(btn)
  ul.prepend(li)
}
