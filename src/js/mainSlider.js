const slideImgs = document.querySelectorAll('.main-slider-unity')
const slideLength = slideImgs.length
const seconds = 2000
let currentActive = 0;


/* bullets */
const bulletsDiv = document.querySelector('.slider-pagination')

for (let i = 1; i < slideLength + 1; i++) {
  const span = document.createElement('span')
  span.innerText = i
  span.classList.add('bullet')
  bulletsDiv.append(span)
}

document.querySelectorAll('.bullet')[0].classList.add('active')
const bulletActive = document.querySelectorAll('.bullet')

const bulletArray = [...bulletActive]
const slideArray = [...slideImgs]

const moveSlide = (e) => {
  const newCurrentIndex = bulletArray.indexOf(e)
  currentActive = newCurrentIndex

  slideArray.forEach((item, index) => {
    item.classList.remove('active')
  })

  bulletArray.forEach((item, index) => {
    item.classList.remove('active')
  })

  bulletActive[currentActive].classList.add('active')
  slideImgs[currentActive].classList.add('active')
}

bulletActive.forEach((li, index) => {
  li.addEventListener('click', (e) => {
    moveSlide(e.target)
  })
})

setInterval(() => {
  slideArray.forEach((item, index) => {
    item.classList.remove('active')
  })

  bulletArray.forEach((item, index) => {
    item.classList.remove('active')
  })

  currentActive += 1

  if (currentActive === slideLength) {
    currentActive = 0
  }

  bulletActive[currentActive].classList.add('active')
  slideImgs[currentActive].classList.add('active')
}, seconds);

