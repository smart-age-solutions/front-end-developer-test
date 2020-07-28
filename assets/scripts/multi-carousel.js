const scrollL = () => {
  let x = document.getElementsByClassName("instagram__carousel__images")[0];
  let step = window.outerWidth / 2;
  x.scrollLeft -= step;
}

const scrollR = () => {
  let x = document.getElementsByClassName("instagram__carousel__images")[0];
  let step = window.outerWidth / 2;
  x.scrollLeft += step;
}
