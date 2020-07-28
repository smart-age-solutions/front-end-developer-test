const scrollLeftCategory = () => {
  let x = document.querySelector(".category div");
  let step = window.outerWidth / 2;
  x.scrollLeft -= step;
}

const scrollRightCategory = () => {
  let x = document.querySelector(".category div");
  let step = window.outerWidth / 2;
  x.scrollLeft += step;
}

const scrollLeftShop = () => {
  let x = document.querySelector(".shop-carousel__carousel div");
  let step = window.outerWidth / 2;
  x.scrollLeft -= step;
}

const scrollRightShop = () => {
  let x = document.querySelector(".shop-carousel__carousel div");
  let step = window.outerWidth / 2;
  x.scrollLeft += step;
}

const scrollLeftInsta = () => {
  let x = document.querySelector(".instagram__carousel div");
  let step = window.outerWidth / 2;
  x.scrollLeft -= step;
}

const scrollRightInsta = () => {
  let x = document.querySelector(".instagram__carousel div");
  let step = window.outerWidth / 2;
  x.scrollLeft += step;
}
