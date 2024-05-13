function rotateImage() {
  const randomDegree = Math.floor(Math.random() * 360); // 0도부터 360도 사이의 랜덤한 각도 생성
  const image = document.getElementById('random-image');
  image.style.transform = `rotate(${randomDegree}deg)`; // 이미지 회전
}
