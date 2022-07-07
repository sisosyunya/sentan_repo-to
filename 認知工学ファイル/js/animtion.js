

window.addEventListener('scroll', function() {
  // ターゲットの画面トップからの距離
  var target = document.querySelector('.fade-up_list');
  target_position = document.querySelector('.fade-up_list').getBoundingClientRect().top;
  // 画面のトップからの距離
  if (target_position < this.window.innerHeight){
    target.classList.add('fadeUp');
}});

