let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });

  // 👉 Mostrar u ocultar el corazón según la página
  const heart = document.getElementById("heart");
  if (heart) {
    if (index === pages.length - 1) {
      heart.style.display = "none"; // Ocultar en la última
    } else {
      heart.style.display = "block"; // Mostrar en las demás
    }
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
    lanzarFrase();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
    lanzarFrase();
  }
}

function entrarAlLibro() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("book").style.display = "block";
  document.getElementById("controls").style.display = "block";
  showPage(currentPage);

  // ▶️ Reproducir música después del clic
  const music = document.getElementById("background-music");
  if (music) {
    music.play().catch((error) => {
      console.log("Autoplay bloqueado:", error);
    });
  }
}

const frasesVoladoras = [
  "Te Pienso...",
  "LA MEJOR!!",
  "Mi Niña",
  "MI VALERIA 🖤", 
  "Mi Reina 👑", 
  "Eres Magia 🌟", 
  "Te Quiero!! ☕", 
  "Te Extraño..."
];

function lanzarFrase() {
  const container = document.getElementById('frase-voladora-container');
  const frase = document.createElement('div');
  frase.className = 'flotante';
  frase.textContent = frasesVoladoras[Math.floor(Math.random() * frasesVoladoras.length)];
  container.appendChild(frase);

  setTimeout(() => {
    frase.remove();
  }, 2000);
}

// ✅ Escuchar eventos de botones correctamente
document.getElementById("siguiente").addEventListener("click", nextPage);
document.getElementById("anterior").addEventListener("click", prevPage);
