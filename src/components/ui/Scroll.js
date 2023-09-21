let position = window.scrollY.valueOf;
let $nav = document.querySelector("#nav");

window.addEventListener("scroll", function () {
  let positionStart = window.scrollY.valueOf;

  if (position >= positionStart) {
    $nav.style.top = "0px";
  } else {
    $nav.style.top = "-5rem";
  }
  position = positionStart;
});
