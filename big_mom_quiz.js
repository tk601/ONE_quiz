const quiz = [
  {
    question: '錦えもんはなんの能力者か？',
    answers: [
      'どろどろの実',
      'ふくふくの実',
      'じゃけじゃけの実',
      'ゴロゴロの実'
    ],
    correct: 'ふくふくの実'
  }, {
    question: 'クイーンの異名は？',
    answers: [
      '厄災のクイーン',
      '防災のクイーン',
      '減災のクイーン',
      '疫災のクイーン'
    ],
    correct: '疫災のクイーン'
  },{
    question: 'お玉を人質にした真打ち、ライオンのSMILEの能力者といえば？',
    answers: [
      'ホールデム',
      'ポールデム',
      'トールデム',
      'ノールデム'
    ],
    correct: 'ホールデム'
  },{
    question: 'おこぼれ町の茶屋の店主をしていた、錦えもんの妻といえば？',
    answers: [
      'お鶴',
      'お菊',
      'おロビ',
      'しのぶ'
    ],
    correct: 'お鶴'
  },{
    question: '元々は光月おでんが大名として治めていたワノ国の6つの郷の一つといえば？',
    answers: [
      '兎丼',
      '白舞',
      '花の都',
      '九里'
    ],
    correct: '九里'
  },{
    question: 'ロックス海賊団の拠点だった、現在の黒ひげ海賊団の拠点といえば？',
    answers: [
      'ゴッドバレー',
      'ハチノス',
      '海賊島',
      'ラフテル'
    ],
    correct: 'ハチノス'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//問題文と選択肢を定義
const setQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setQuiz();
  } else {
    window.alert('終了！あなたのスコアは' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたときの正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
