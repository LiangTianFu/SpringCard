window.onload = function() {
  var page1 = document.getElementById('page1');
  var page2 = document.getElementById('page2');
  var page3 = document.getElementById('page3');

  var music = document.getElementById('music');
  var audio = document.getElementsByTagName('audio')[0];

  // 但音乐播放完毕，自动停止光盘旋转效果
  audio.addEventListener('ended', function(event) {
    music.setAttribute('class', '');
    // this.style.animationPlayState = 'paused';
    // this.style.webkitanimationPlayState = 'paused';
  }, false);

  // 点击音乐图标，控制播放
  // music.onclick = function() {
  //   if (audio.paused) {
  //     audio.play();
  //     // this.setAttribute('class', 'play');
  //     this.style.animationPlayState = 'running';
  //     this.style.webkitanimationPlayState = 'running';
  //   } else {
  //     audio.pause();
  //     // this.setAttribute('class', '');
  //     this.style.animationPlayState = 'paused';
  //     this.style.webkitanimationPlayState = 'paused';
  //      }
  //   }

  // 点击音乐图标，控制播放
  music.addEventListener('touchstart', function(event) {
    if (audio.paused) {
      audio.play();
      // this.setAttribute('class', 'play');
      this.style.animationPlayState = 'running';
      this.style.webkitanimationPlayState = 'running';
    } else {
      audio.pause();
      // this.setAttribute('class', '');
      this.style.animationPlayState = 'paused';
      this.style.webkitanimationPlayState = 'paused';
    }
  }, false);

  //点击屏幕切换页面
  page1.addEventListener('touchstart', function(event) {
    page1.style.display = 'none';
    page2.style.display = 'block';
    page3.style.display = 'block';
    page3.style.top = '100%';

    setTimeout(function() {
      page2.setAttribute('class', 'page fadeOut');
      page3.setAttribute('class', 'page fadeIn');
    }, 5500);
  }, false);

}
