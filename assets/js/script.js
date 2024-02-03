let hamburger = document.getElementById("ham");
let links = document.getElementsByClassName("links")[0];
let product = document.getElementById("cc");
let recent = document.getElementById("cc1");
let count = 1;
hamburger.addEventListener("click", () => {
  count++;
  hamburger.classList.toggle("bx-x");
  if (count % 2 == 0) {
    links.style.display = "flex";
  } else {
    links.style.display = "none";
  }
});

window.addEventListener("resize", function () {
  const currentWidth = window.innerWidth;
  if (currentWidth > 983) {
    links.style.display = "flex";
    product.classList.add("container");
    product.classList.remove("container-fluid");
    recent.classList.add("container");
    recent.classList.remove("container-fluid");
  } else {
    links.style.display = "none";
    product.classList.add("container-fluid");
    product.classList.remove("container");
    recent.classList.add("container-fluid");
    recent.classList.remove("container");
  }
});
