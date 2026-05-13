const btn = document.getElementById("loveBtn");
const message = document.getElementById("message");

const frases = [

  "Eres lo mejor que me ha pasado ❤️",
  "Mi universo favorito eres tú 🌌",
  "Te amo muchísimo 💖",
  "Quiero abrazarte toda la vida ✨",
  "Tus ojos son mis estrellas favoritas ⭐",
  "Gracias por existir mi amor 💕",
  "Siempre tú ❤️",
  "Eres mi lugar seguro 💫"

];

btn.addEventListener("click", () => {

  const random =
  frases[Math.floor(Math.random() * frases.length)];

  message.innerHTML = random;

});

/* CONTADOR */

const contador =
document.getElementById("contador");

const fechaInicio =
new Date("2023-05-13");

function actualizarTiempo(){

  const ahora = new Date();

  const diferencia =
  ahora - fechaInicio;

  const dias =
  Math.floor(diferencia / (1000 * 60 * 60 * 24));

  contador.innerHTML =
  dias + " días juntos ❤️";

}

setInterval(actualizarTiempo,1000);