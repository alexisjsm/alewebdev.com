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
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  })
)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
