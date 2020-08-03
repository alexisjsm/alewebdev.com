window.onscroll = () => {
  let btnTop = document.getElementById('top')
  if (window.scrollY > 20) {
    btnTop.hidden = false
  } else {
    btnTop.hidden = true
  }
}

function ScrollToTop () {
  window.scrollTo(0, 0)
}
