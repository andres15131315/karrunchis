const btn = document.getElementById("loveBtn");
const message = document.getElementById("message");

const frases = [

  "Eres lo mejor que me ha pasado ❤️",
  "Mi universo favorito eres tú 🌌",
  "Te amo muchísimo 💖",
  "Quiero abrazarte toda la vida ✨",
  "Tus ojos son mis estrellas favoritas ⭐",
  "Gracias por existir mi amor 💕"

];

btn.addEventListener("click", () => {

  const random =
    frases[Math.floor(Math.random() * frases.length)];

  message.innerHTML = random;

});