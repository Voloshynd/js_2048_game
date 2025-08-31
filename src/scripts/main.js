'use strict';

const Game = require('../modules/Game.class');
const game = new Game();

const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
  if (btn.classList.contains('start')) {
    if (game.start()) {
      btn.classList.remove('start');
      btn.className += ' restart';
      btn.textContent = 'Restart';
    }
  } else {
    game.restart();
  }
});

document.addEventListener('keydown', (e) => checkKey(e));

function checkKey(e) {
  switch (e.key) {
    case 'ArrowLeft':
      game.moveLeft();
      break;
    case 'ArrowRight':
      game.moveRight();
      break;
    case 'ArrowUp':
      game.moveUp();
      break;
    case 'ArrowDown':
      game.moveDown();
      break;
    default:
      return null;
  }
}
