// Import stylesheets
import './style.css';
import './style-winner.css';
import './style-button.css';

const possibilidadesVitoria = [
  // linhas
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  // colunas
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  // diagonais
  [1, 5, 9],
  [3, 5, 7],
];

const modalWinner = document.getElementById('modal-winner');
let winner = document.getElementById('winner');
const fecharWinner = document.querySelector('.fechar-winner');
const myButtons = document.querySelectorAll('.option');
let vez = 'x';
let locaisx = [];
let locaisy = [];
let optionselected;

myButtons.forEach((button) => {
  button.addEventListener('click', buttonClick);
});

function buttonClick(event) {
  const obotao = event.target;
  if (vez == 'x') {
    obotao.classList.add('optionx');
    adicionar(obotao.id);
    verificarVitoria();
    vez = 'o';
  } else if (vez == 'o') {
    obotao.classList.add('optiono');
    adicionar(obotao.id);
    verificarVitoria();
    vez = 'x';
  }
}

function adicionar(any) {
  if (vez == 'x') {
    locaisx += any;
  } else if (vez == 'o') {
    locaisy += any;
  }
}

function verificarVitoria() {
  for (let i = 0; i < possibilidadesVitoria.length; i++) {
    const [a, b, c] = possibilidadesVitoria[i];
    if (locaisx.includes(a) && locaisx.includes(b) && locaisx.includes(c)) {
      winner.textContent = "X";
      finalizarJogo();
      return;
    } else if (
      locaisy.includes(a) &&
      locaisy.includes(b) &&
      locaisy.includes(c)
    ) {
      winner.textContent = "O";
      finalizarJogo();
      return;
    }
  }
}

function finalizarJogo() {
  const tabuleiro = document.querySelector('.areajogo');
  tabuleiro.classList.add('finalizarjogo');
  modalWinner.style.display = 'block';
}

fecharWinner.addEventListener('click', reiniciarJogo);

function reiniciarJogo(){
  location.reload();
}

