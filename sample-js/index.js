function handleClickSquare(element) {
  element.innerHTML = "○"
}

window.onload = () => {
  const square = document.getElementById("square")

  square.addEventListener("click", (e) => {
    e.target.innerHTML = "×"
  })
};
