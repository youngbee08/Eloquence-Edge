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
// const scroll = ()=>{
//   if (window.scrollY > 0) {
//     document.querySelector(".action-buttons").style.position = 'unset'
//     document.querySelector(".content").style.height="10vh"
//     document.querySelector(".content").style.overflowY="scroll"
//   }else{
//     document.querySelector(".action-buttons").style.position = 'fixed'
//     document.querySelector(".content").style.height="50vh"
//     document.querySelector(".content").style.overflowY="visible"
//   }
// }
//   window.addEventListener("scroll", scroll)