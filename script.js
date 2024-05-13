// script.js
const sun = document.getElementById('sun');
const planets = document.querySelectorAll('.planet');

const orbitRadius = 200; // 원 궤도 반지름
const orbitSpeed = 0.05; // 공전 속도

let angle = 0;

function movePlanets() {
  planets.forEach((planet, index) => {
    const x = sun.offsetLeft + orbitRadius * Math.cos(angle + index * (Math.PI * 2) / planets.length);
    const y = sun.offsetTop + orbitRadius * Math.sin(angle + index * (Math.PI * 2) / planets.length);
    planet.style.left = `${x - planet.offsetWidth / 2}px`; // 행성의 중심을 설정합니다.
    planet.style.top = `${y - planet.offsetHeight / 2}px`; // 행성의 중심을 설정합니다.
  });
  
  angle += orbitSpeed;
  
  requestAnimationFrame(movePlanets);
}

movePlanets();
