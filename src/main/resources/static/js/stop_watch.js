'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const restart = document.getElementById('restart');
  const target_time = document.getElementById('target_time');

  let startTime;
  let timeoutId;

  function countUp() {
    const d = new Date(Date.now() - startTime);

    if (d > 3000) {
      timer.classList.add('disappear')
    }

    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  function create_target_time() {
    target_time.textContent = Math.floor(Math.random() * 8) + 8;
  }

  create_target_time();

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
    start.classList.add('disappear');
    stop.classList.remove('disappear');
  });

  stop.addEventListener('click', () => {
    clearTimeout(timeoutId);
    timer.classList.remove('disappear');
    restart.classList.remove('disappear');
    stop.classList.add('disappear');
  });

  restart.addEventListener('click', () => {
    restart.classList.add('disappear');
    start.classList.remove('disappear');
    timer.textContent = '00:00.000';
    create_target_time();
  });

}