function sidebar(status) {
  let sidebar = document.getElementById("sidebar")
  if(status === "close") {
    sidebar.classList.remove("active")
  } else if(status === "open") {
    sidebar.classList.add("active")
  } else if(!status) {
    sidebar.classList.toggle("active")
  }
}

function search() {
	let value = document.getElementById("search").value;
	console.log(value)
}

document.addEventListener("touchstart", handleTouchStart)
document.addEventListener("touchmove", handleTouchMove)

let x1, y1

function handleTouchStart(event) {
  let touch = event.touches[0];
  x1 = touch.screenX, y1 = touch.screenY
}

function handleTouchMove(event) {
  if(!x1 || !y1) return;
  let x2 = event.touches[0].screenX, y2 = event.touches[0].screenY
  let x = x1 - x2, y = y1 - y2
  if(Math.abs(x) > Math.abs(y)) {
    if(x > 0) sidebar("close") //to left
    else sidebar("open") // to right
  }/* else {
    if(y > 0) res = "Вверх" // to up
    else res = "Вниз" // to down*
  }*/
  x1 = null, y1 = null
}