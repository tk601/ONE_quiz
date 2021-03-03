const quiz = [
  {
    question: 'カポネ・ギャングベッジの息子の名前は？',
    answers: [
      'ベンツ',
      'ベッツ',
      'ベッシ',
      'ペッツ'
    ],
    correct: 'ペッツ'
  }, {
    question: 'サンジの母親の名前は？',
    answers: [
      'ベルメール',
      'マキノ',
      'ナミ',
      'ソラ'
    ],
    correct: 'ソラ'
  },{
    question: 'プリンはシャーロット家何女か？',
    answers: [
      '25女',
      '35女',
      '45女',
      '15女'
    ],
    correct: '35女'
  },{
    question: 'カタクリの三叉槍の名前といえば？',
    answers: [
      '土竜',
      '餅銀着',
      '鏡餅',
      'もちもちの槍'
    ],
    correct: '土竜'
  },{
    question: 'ペドロの賞金金額は？',
    answers: [
      '7200万べリー',
      '9600万ベリー',
      '1億5600万ベリー',
      '3億8200万べリー'
    ],
    correct: '3億8200万べリー'
  },{
    question: 'ルフィとナミがクラッカーと交戦した場所は？',
    answers: [
      'ナッツ島',
      'カカオ島',
      'ホールケーキアイランド',
      '誘惑の森'
    ],
    correct: '誘惑の森'
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
