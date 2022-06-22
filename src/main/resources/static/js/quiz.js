'use strict'

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const explain = document.getElementById('explain');
  const commentary = document.querySelector('#explain > p');
  const start = document.getElementById('start');
  const running = document.getElementById('running');

  const quizSet = shuffle([
    {
      q: '一番高価なお茶の値段は100gあたり何円でしょうか？'
      , c: ['1400万円', '5万円', '560万円']
      , e: 'なんと一番高価なお茶の値段は100gあたり1400万円です。驚愕の値段ですよね。1400万円もするお茶の名前は、大紅袍（だいこうほう）というものです。大紅袍は、350年の歴史を持つ中国茶です。原生木は、わずか4本しかなく大変超貴重なお茶となっています。'
    },
    {
      q: '人気ランキング1位のスナック菓子は何でしょうか？'
      , c: ['ポテトチップス', 'キャラメルコーン', 'かっぱえびせん']
      , e: '人気ランキング1位のスナック菓子は、ポテトチップスです。ポテトチップスは、すべての世代で1位になっており、不動の人気を誇っています。'
    },
    {
      q: 'フォ―チュンクッキー」とはどんなクッキーなのでしょうか？'
      , c: ['おみくじが入ったクッキー', 'コインが入ったクッキー', '好きだという思いを込めて作ったクッキー']
      , e: 'フォーチュンクッキーといえばAKBの曲のタイトルとして使用されたという事もあり聞いた事がある方は多いと思います。フォーチュンクッキーとは、中におみくじが入っているクッキーの事です。アメリカ・カナダにある中華料理店の食後のデザートとしてよく出されるそうです。'
    },
    {
      q: 'ポップコーンを漢字で書いたものはどれでしょうか？'
      , c: ['爆裂玉蜀黍', '噴火玉蜀黍', '爆発玉蜀黍']
      , e: 'ポップコーンは、「爆裂玉蜀黍（ばくれつとうもろこし）」と漢字で書くそうです。ちなみにポップコーンで使われているトウモロコシは、爆裂種というトウモロコシだそうです。爆裂種は、粒の皮が硬いのが特徴です。'
    },
    {
      q: 'うまい棒の中で一番原価が高い味はどれでしょうか？'
      , c: ['たこ焼き味', 'チーズ味', 'めんたい味']
      , e: 'うまい棒の中で一番原価が高いのは、たこ焼き味です。たこ焼き味は、味を濃くするために二度漬けされたりしております。なんと、原価は9円となっており10円の販売価格に対し1円の儲けしかありません。'
    },

  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
    explain.classList.remove('hidden');
  }

  function setQuiz() {
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffleedChoices = shuffle([...quizSet[currentNum].c]);
    shuffleedChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    commentary.textContent = quizSet[currentNum].e;

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');
    explain.classList.add('hidden');

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    } else {
      currentNum++;
      setQuiz();
    }
  });

  start.addEventListener('click', () => {
    running.classList.remove('hidden');
    start.classList.add('hidden');
    setQuiz();
  });
}