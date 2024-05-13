document.addEventListener("DOMContentLoaded", function() {
  const circles = document.querySelectorAll(".circle");

  circles.forEach((circle, index) => {
      const angle = index * (360 / circles.length); // Distribute circles evenly around the center
      const radius = 150; // Radius of the circular path
      const centerX = window.innerWidth / 2; // X coordinate of the center of the screen
      const centerY = window.innerHeight / 2; // Y coordinate of the center of the screen

      moveCircle(circle, angle, radius, centerX, centerY); // Move each circle initially

      setInterval(() => {
          moveCircle(circle, angle, radius, centerX, centerY); // Move each circle periodically
      }, 1000); // Adjust the interval as needed
  });
});

function moveCircle(circle, angle, radius, centerX, centerY) {
  const speed = 2; // Speed of rotation, adjust as needed
  const time = Date.now() * speed;

  const x = centerX + radius * Math.cos(time / 1000 + angle);
  const y = centerY + radius * Math.sin(time / 1000 + angle);

  circle.style.left = x + "px";
  circle.style.top = y + "px";
}
