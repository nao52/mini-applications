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
          'information',
          'traditional',
          'comfortable',
          'disappoint',
          'emergency',
          'advantage',
          'knowledge',
          'government',
          'experiment',
          'material',
        ];
        break;
      case 3:
        words = [
          'take part in',
          'as a result',
          'in order to',
          'not only A but also B',
          'according to',
          'more and more',
          'in addition',
          'on the other hand',
          'in contrast',
          'participate in',
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

  function countdown() {
    isCounting = true;
    result.textContent = '';
    setTimeout(() => {
      if (currentIndex > 2) {
        console.log(currentIndex);
        countdowns[currentIndex - 1].classList.remove('current');
        target.classList.remove('disappear');
        currentIndex = 0;
        isCounting = false;
        gameStart();
        return;
      }

      if (currentIndex === 0) {
        countdowns[currentIndex].classList.add('current');
        currentIndex++;
        countdown();
        return;
      }

      countdowns[currentIndex - 1].classList.remove('current');
      countdowns[currentIndex].classList.add('current');
      currentIndex++;

      countdown();
    }, 1000);
  }

  let words;
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  let isCounting = false;
  let level = 0;
  let currentIndex = 0;

  const start = document.getElementById('start');
  const target = document.getElementById('target');
  const currentLevel = document.getElementById('current_level');
  const countdowns = document.querySelectorAll('.count_down');

  start.addEventListener('click', () => {
    start.classList.add('disappear');
    countdown();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== ' ') {
      return;
    } else if (isCounting === true) {
      return;
    } else if (isPlaying === true) {
      return;
    }

    start.classList.add('disappear');
    countdown();
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
        target.classList.add('disappear');
        start.classList.remove('disappear');
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