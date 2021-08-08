'use strict';

const getNumber = function () {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let a = getRandomInt(1, 100);
  let guesses = 10;

  let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  const checkNumber = function (guesses) {
    let n = prompt('Угадайте число от 1 до 100');

    if (n === null) {
      return alert('Игра окончена');
    }

    if (!isNumber(n)) {
      alert('Введи число!');
      checkNumber(guesses);
    } else {
      guesses--;
    }

    if (guesses === 0) {
      let g = confirm('Нет попыток! Хотите сыграть еще?');
      if (g === true) {
        getNumber();
      }
      else {
        return alert('Игра окончена');
      }
    }

    if (n > a) {
      alert('Загаданное число меньше! ' + 'Осталось ' + guesses + ' попыток');
      checkNumber(guesses);
    }

    if (n < a) {
      alert('Загаданное число больше! ' + 'Осталось ' + guesses + ' попыток');
      checkNumber(guesses);
    }

    if (+n === a) {
      alert('Поздравляю, Вы угадали!!!');
    }
  };
  checkNumber(guesses);
};

getNumber();