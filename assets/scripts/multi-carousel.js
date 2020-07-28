const scrollL = () => {
  let x = document.getElementsByClassName("multi-carousel")[0];
  let step = window.outerWidth / 2;
  x.scrollLeft -= step;
}

const scrollR = () => {
  let x = document.getElementsByClassName("multi-carousel")[0];
  let step = window.outerWidth / 2;
  x.scrollLeft += step;
}
