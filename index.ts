// Import stylesheets
import './style.css';

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
      console.log('o jogador X venceu');
      finalizarJogo();
      return;
    } else if (
      locaisy.includes(a) &&
      locaisy.includes(b) &&
      locaisy.includes(c)
    ) {
      console.log('o jogador O venceu');
      finalizarJogo();
      return;
    }
  }
}

function finalizarJogo() {
  const tabuleiro = document.querySelector('.areajogo');
  tabuleiro.classList.add('finalizarjogo');

}
