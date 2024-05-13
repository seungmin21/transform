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
  const x = centerX + radius * Math.cos(angle * Math.PI / 180);
  const y = centerY + radius * Math.sin(angle * Math.PI / 180);

  circle.style.left = x + "px";
  circle.style.top = y + "px";
}
