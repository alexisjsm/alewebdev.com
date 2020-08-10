window.onscroll = () => {
  const btnTop = document.getElementById('top')
  if (window.scrollY > 20) {
    btnTop.hidden = false
  } else {
    btnTop.hidden = true
  }
}

(
  document.getElementById('top').addEventListener('click', (ev) => {
    ev.preventDefault()
    window.scrollTo(0, 0)
  })
)
