'use strict'

{
  function createWords() {
    switch (level) {
      case 0:
        words = [
          'nagetto',
          'duffy',
          'donburako',
          'sumikko',
          'kisoji',
        ];
        break;
      case 1:
        words = [
          'animal',
          'country',
          'birthday',
          'earth',
          'member',
          'money',
          'place',
          'season',
          'vacation',
          'water',
        ];
        break;
      case 2:
        words = [
          'red',
          'blue',
          'pink',
          'yellow',
          'brown',
        ];
        break;
      case 3:
        words = [
          'red',
          'blue',
          'pink',
          'yellow',
          'brown',
        ];
        break;
    }
  }

  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }

  function gameStart() {
    if (isPlaying === true) {
      return;
    }

    isPlaying = true;
    startTime = Date.now();
    result.textContent = '';
    createWords();
    setWord();
  }

  let words;
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  let level = 0;

  const start = document.getElementById('start');
  const target = document.getElementById('target');
  const currentLevel = document.getElementById('current_level');

  start.addEventListener('click', () => {
    gameStart();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== ' ') {
      return;
    }

    gameStart();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }

    loc++;

    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `今回かかった時間は「${elapsedTime}」秒です!!`;
        start.textContent = 'Click or Typing Space to start again!';
        isPlaying = false;
        return;
      }

      setWord();
    }

  });

  document.getElementById('lv1').addEventListener('click', () => {
    level = 1
    currentLevel.textContent = `現在のレベル： ${level}`
  });
  document.getElementById('lv2').addEventListener('click', () => {
    level = 2
    currentLevel.textContent = `現在のレベル： ${level}`
  });
  document.getElementById('lv3').addEventListener('click', () => {
    level = 3
    currentLevel.textContent = `現在のレベル： ${level}`
  });
}