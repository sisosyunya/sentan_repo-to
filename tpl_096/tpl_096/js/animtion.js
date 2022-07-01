// ４
{/* <scrip> */}
// Add scrollmagic controller
let controller = new ScrollMagic.Controller();
  anime({
      targets: ".", // 対象を指定
      translateX: 800,
      rotate: 360,
      duration: 3000, // ミリ秒指定
      loop: false, // 繰り返し
      easing: "easeInOutCubic" // 加減速の種類
    });
  

let fadeInTarget = 
document.querySelectorALL('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0;i <fadeInTarget.length ; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset|| document.documentElement.scrollTop;
    const offset = rect + scroll;
    // const windowHeight = window.innerHeight;現在のブラウザの高さ
    if (scroll > offset -windowHeight+150){
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
})