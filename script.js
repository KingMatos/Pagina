const canvas = document.getElementById('fondo-particulas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const gotas = [];

for (let i = 0; i < 150; i++) {
  gotas.push({
    x: Math.random() * width,
    y: Math.random() * height,
    velocidadY: Math.random() * 2 + 1,
    tamaño: Math.random() * 2 + 1
  });
}

function dibujar() {
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = 'rgba(173, 216, 230, 0.7)'; // Azul claro, semi-transparente

  gotas.forEach(gota => {
    ctx.beginPath();
    ctx.arc(gota.x, gota.y, gota.tamaño, 0, Math.PI * 2);
    ctx.fill();

    gota.y += gota.velocidadY;

    if (gota.y > height) {
      gota.y = 0;
      gota.x = Math.random() * width;
    }
  });

  requestAnimationFrame(dibujar);
}

dibujar();

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});
