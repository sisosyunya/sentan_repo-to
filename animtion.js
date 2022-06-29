// ４
{/* <script> */}
// Add scrollmagic controller
let controller = new ScrollMagic.Controller();
  anime({
      targets: ".card", // 対象を指定
      translateX: 800,
      rotate: 360,
      duration: 3000, // ミリ秒指定
      loop: false, // 繰り返し
      easing: "easeInOutCubic" // 加減速の種類
    });
  
// </script>