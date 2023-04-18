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
  [3, 5, 7]
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
    vez = 'o';
    adicionar(obotao.id);
  } else if (vez == 'o') {
    obotao.classList.add('optiono');
    vez = 'x';
    adicionar(obotao.id);
  }
}

function adicionar(any) {
  if (vez == 'x') {locaisx += any;}
  else if (vez == 'o') {locaisy += any;}
}

function verificarVitoria(){
 
  
}
