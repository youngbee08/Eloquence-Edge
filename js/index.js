// var typed = new Typed("#typewriter", {
//   strings: [
//     "Where we help you improve your speaking skills.",
//     "Where we help you master communication like a pro.",
//     "Where we help you speak with clarity and impact.",
//     "Where we help you express yourself fluently.",
//     "Where we help you build confidence through words."
//   ],
//   typeSpeed: 60,
//   backSpeed: 40,
//   backDelay: 2000,
//   loop: true
// });
// Event Listeners for buttons //
const getStartedBtn = document.querySelector("#getStartedBtn");
getStartedBtn.addEventListener("click", goTodashBoard)
function goTodashBoard() {
  location.href=`./auth/signUp.html`;
}