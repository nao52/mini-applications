'use strict'

{
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const money = document.getElementById('money');
  const money_status = document.getElementById('money_status');

  let totalMoney = 0;

  function setButtonStateInitial() {
    btn1.classList.remove('inactive');
    btn2.classList.add('disappear');
    btn3.classList.add('disappear')
    money_status.textContent = 'あなたの現在の所持金は・・・';
  }

  function setButtonStateRunning() {
    btn1.classList.remove('inactive');
    btn2.classList.remove('disappear');
  }

  function setButtonStateStopped() {
    btn1.classList.add('inactive');
    btn2.classList.add('disappear');
    btn3.classList.remove('disappear');
    money_status.textContent = 'あなたの最終金額は・・・';
  }

  function startGame() {
    setButtonStateRunning();

    const n = Math.random();
    if (n < 0.2) {
      const results = [5000, 10000, -500, -1000];
      const result = results[Math.floor(Math.random() * results.length)];
      btn1.textContent = result;
      totalMoney += result;
    } else if (n < 0.3) {
      btn1.textContent = 'Game Over';
      totalMoney = 0;
      setButtonStateStopped();
    } else {
      const results = [100, 300, 500, 1000];
      const result = results[Math.floor(Math.random() * results.length)];
      btn1.textContent = result;
      totalMoney += result;
    }
    money.textContent = totalMoney;
  }

  function finishGame() {
    totalMoney = 0;
    setButtonStateInitial();
    money.textContent = totalMoney;
    btn1.textContent = '?';
    btn1.classList.remove('inactive');
  }

  setButtonStateInitial();

  btn1.addEventListener('click', () => {
    if (btn1.classList.contains('inactive')) {
      return;
    }

    startGame();

  });

  btn2.addEventListener('click', () => {
    setButtonStateStopped();
    btn1.textContent = '?';
  });

  btn3.addEventListener('click', () => {
    finishGame();
  });

}