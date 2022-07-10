// carousel start
const prevBtn = document.querySelector(".arrow-prev");
const nextBtn = document.querySelector(".arrow-next");
// 5개씩 보여줄 때 width 값

const lis5Width =
  document.querySelector(".carousel_container ul li:nth-child(1)").clientWidth *
  5;
// alert(lis5Width);
const c = document.querySelector(".carousel_container").clientWidth;
// alert(c);
// next btn 클릭 시
nextBtn.addEventListener("click", function () {
  const container = document.querySelector(".container");
  let container_width = lis5Width + 2;
  console.log(`container_width : ${container_width}`);
  container.style.transform = `translateX(${-container_width}px)`;
});
prevBtn.addEventListener("click", function () {
  const container = document.querySelector(".container");
  let container_width = lis5Width + 2;
  console.log(`container_width : ${container_width}`);
  container.style.transform = `translateX(${0}px)`;
});
// carousel 둥
