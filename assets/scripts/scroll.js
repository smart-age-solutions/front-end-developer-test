const anchorLinks = document.querySelectorAll('.scrolling a[href^="#"]')

anchorLinks.forEach( (item) => {
  item.addEventListener('click', (e) => {
    let hashVal = item.getAttribute('href')
    let target = document.querySelector(hashVal)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    history.pushState(null, null, hashVal)
    e.preventDefault()
  })
})
