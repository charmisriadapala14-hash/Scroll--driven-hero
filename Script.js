const car = document.querySelector(".car");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

  const heroTop = hero.getBoundingClientRect().top;
  const heroHeight = hero.offsetHeight;

  let progress = -heroTop / heroHeight;

  progress = Math.max(0, Math.min(1, progress));

  const moveX = progress * 700 - 350;
  const rotate = progress * 10 - 5;
  const scale = 1 + progress * 0.15;

  car.style.transform =
    `translateX(${moveX}px) rotate(${rotate}deg) scale(${scale})`;

});
