const btn = document.querySelector(".user__btn");
const userActive = document.querySelector(".user__active");
const btnClassess = btn.classList;

btn.addEventListener("click", () => {
  btnClassess.toggle("active");
  active();
});

// change z-index && opacity of the element
const active = () => {
  let popup = btnClassess.contains("active")
    ? (userActive.style.zIndex = "2")
    : (userActive.style.zIndex = "-1");

  let opacity =
    userActive.style.zIndex === "-1"
      ? (userActive.style.opacity = "0")
      : (userActive.style.opacity = "1");
};
