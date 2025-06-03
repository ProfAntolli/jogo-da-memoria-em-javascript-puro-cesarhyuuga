const emojis = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍍', '🥝', '🍒'];
const cartas = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
const tabuleiro = document.getElementById('tabuleiro');

let primeira = null;
let segunda = null;
let travar = false;

cartas.forEach((emoji, index) => {
  const carta = document.createElement('div');
  carta.classList.add('carta');

  const conteudo = document.createElement('div');
  conteudo.classList.add('conteudo');

  const frente = document.createElement('div');
  frente.classList.add('frente');
  frente.textContent = '❓';

  const tras = document.createElement('div');
  tras.classList.add('tras');
  tras.textContent = emoji;

  conteudo.appendChild(frente);
  conteudo.appendChild(tras);
  carta.appendChild(conteudo);
  tabuleiro.appendChild(carta);

  carta.addEventListener('click', () => {
    if (travar || carta.classList.contains('revelada') || carta.classList.contains('finalizada')) return;

    carta.classList.add('revelada');

    if (!primeira) {
      primeira = carta;
    } else {
      segunda = carta;
      travar = true;

      const emoji1 = primeira.querySelector('.tras').textContent;
      const emoji2 = segunda.querySelector('.tras').textContent;

      if (emoji1 === emoji2) {
        setTimeout(() => {
          primeira.classList.add('finalizada');
          segunda.classList.add('finalizada');
          primeira = null;
          segunda = null;
          travar = false;
        }, 500);
      } else {
        setTimeout(() => {
          primeira.classList.remove('revelada');
          segunda.classList.remove('revelada');
          primeira = null;
          segunda = null;
          travar = false;
        }, 1000);
      }
    }
  });
});
