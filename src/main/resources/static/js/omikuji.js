'use strict'

{
  const btn1 = document.getElementById('btn1');
  const money = document.getElementById('money');
  let totalMoney = 0;

  btn1.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.2) {
      const results = [5000, 10000, -500, -1000];
      const result = results[Math.floor(Math.random() * results.length)];
      btn1.textContent = result;
      totalMoney += result;
    } else if (n < 0.3) {
      btn1.textContent = 'Game Over';
      totalMoney = 0;
    } else {
      const results = [100, 300, 500, 1000];
      const result = results[Math.floor(Math.random() * results.length)];
      btn1.textContent = result;
      totalMoney += result;
    }
    money.textContent = totalMoney;
  });
}