const questions = [
  {
    text: '日本で最も長い川はどれですか？',
    choices: ['利根川', '信濃川', '荒川', '木曽川'],
    correct: 1,
    explanation: '信濃川は全長約367kmで日本最長の川です。新潟県と長野県を流れています。'
  },
  {
    text: '光の速さ（真空中）は秒速およそ何万kmですか？',
    choices: ['10万km', '20万km', '30万km', '40万km'],
    correct: 2,
    explanation: '光の速さは秒速約30万km（正確には約29万9,792km）です。'
  },
  {
    text: '世界で最も面積の大きい国はどこですか？',
    choices: ['アメリカ', '中国', 'カナダ', 'ロシア'],
    correct: 3,
    explanation: 'ロシアの面積は約1,710万km²で、世界最大の国土を持ちます。日本の約45倍の広さです。'
  },
  {
    text: '標準的なピアノの鍵盤の数はいくつですか？',
    choices: ['76', '80', '88', '92'],
    correct: 2,
    explanation: '標準的なピアノは88鍵（白鍵52・黒鍵36）です。19世紀後半に現在の形に統一されました。'
  },
  {
    text: '人体の臓器の中で最も重い（大きい）ものはどれですか？',
    choices: ['肺', '肝臓', '心臓', '胃'],
    correct: 1,
    explanation: '肝臓は成人で約1,000〜1,500gあり、体内最大の臓器です。解毒・代謝・胆汁生成など500以上の機能を担います。'
  }
];

const TOTAL = questions.length;

let currentIndex = 0;
let score = 0;

const startScreen  = document.getElementById('start-screen');
const quizScreen   = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const progressBar    = document.getElementById('progress-bar');
const questionNumber = document.getElementById('question-number');
const questionText   = document.getElementById('question-text');
const choicesEl      = document.getElementById('choices');
const feedbackEl     = document.getElementById('feedback');
const feedbackText   = document.getElementById('feedback-text');
const explanationEl  = document.getElementById('explanation');

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('retry-btn').addEventListener('click', resetQuiz);

function startQuiz() {
  currentIndex = 0;
  score = 0;
  startScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const q = questions[currentIndex];

  progressBar.style.width = `${(currentIndex / TOTAL) * 100}%`;
  questionNumber.textContent = `問題 ${currentIndex + 1} / ${TOTAL}`;
  questionText.textContent = q.text;

  feedbackEl.className = 'feedback hidden';
  feedbackText.textContent = '';
  explanationEl.textContent = '';

  choicesEl.innerHTML = '';
  q.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.addEventListener('click', () => selectAnswer(i));
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const q = questions[currentIndex];
  const buttons = choicesEl.querySelectorAll('.choice-btn');

  buttons.forEach(btn => btn.disabled = true);

  const isCorrect = selectedIndex === q.correct;

  if (isCorrect) {
    score++;
    buttons[selectedIndex].classList.add('correct');
    feedbackEl.className = 'feedback correct-fb';
    feedbackText.textContent = '✓ 正解！';
  } else {
    buttons[selectedIndex].classList.add('incorrect');
    buttons[q.correct].classList.add('reveal');
    feedbackEl.className = 'feedback incorrect-fb';
    feedbackText.textContent = `✗ 不正解。正解は「${q.choices[q.correct]}」です。`;
  }

  explanationEl.textContent = q.explanation;
  feedbackEl.classList.remove('hidden');
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < TOTAL) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  progressBar.style.width = '100%';
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  document.getElementById('score-text').textContent = `${TOTAL}問中 ${score}問 正解`;

  const comments = {
    5: '完璧です！さすがですね！',
    4: '惜しい！もう少しで満点でした！',
    3: 'まずまずの結果です。復習してみましょう！',
    2: '半分以上は正解できましたか？',
    1: 'もう少し頑張りましょう！',
    0: '次は挽回しましょう！'
  };
  document.getElementById('score-comment').textContent = comments[score];
}

function resetQuiz() {
  resultScreen.classList.add('hidden');
  startQuiz();
}
