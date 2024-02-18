let currentWordIndex = 0;
let maxWordsOnScreen = 120;
let currentWords = 0;
let lastMouseX = -1;
let lastMouseY = -1;
const moveThreshold = 120; // 鼠标移动阈值，可调整以降低灵敏度
let displayThreshold = 2500; // 显示下一句句子前的延时

const wordContainer = document.getElementById("wordContainer");

// 获取输入框和按钮元素
const wordInput = document.getElementById("wordInput");
const submitWord = document.getElementById("submitWord");

// 处理提交按钮的点击事件
submitWord.addEventListener("click", () => {
    const newWord = wordInput.value.trim();
    if (newWord) {
        words.push(newWord); // 将用户输入的单词添加到队列中
        wordInput.value = ''; // 清空输入框
    }
});

function displayNextSentence() {
  if (currentWordIndex >= words.length) {
      currentWordIndex = 0; // 如果当前索引超过数组长度，重置为0
  }

  const sentence = words[currentWordIndex]; // 获取当前句子
  // 在这里添加代码来显示句子
  console.log(sentence); // 假设这里是显示句子的逻辑

  currentWordIndex++; // 更新句子索引以便下次显示下一句
}


function addWord() {
  if (currentWords >= maxWordsOnScreen) return;

  let word = document.createElement("div");
  word.classList.add("word");
  word.textContent = words[currentWordIndex];
  word.style.left = `${(Math.random() - 0.1) * 100}%`;
  word.style.top = `${Math.random() * 100 - 10}%`;

  // 设置随机字体大小
  const fontSize = Math.random() * (50 - 16) + 16;
  word.style.fontSize = `${fontSize}px`;

  wordContainer.appendChild(word);
  currentWords++;

  setTimeout(addWord, 500);
}

function removeWord() {
  if (wordContainer.firstChild) {
      wordContainer.removeChild(wordContainer.firstChild);
      currentWords--;
  }

  // 当所有单词都被移除后，开始显示下一个单词
  if (currentWords === 0 && !wordContainer.firstChild) {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    onSentenceDisappear();
  }
}


function onSentenceDisappear() {
  setTimeout(() => {
      addWord(); 
  }, displayThreshold);
}


// 计算鼠标移动距离
function getMouseDistance(x, y) {
  if (lastMouseX === -1 || lastMouseY === -1) {
      lastMouseX = x;
      lastMouseY = y;
      return 0;
  }
  const dx = x - lastMouseX;
  const dy = y - lastMouseY;
  return Math.sqrt(dx * dx + dy * dy);
}

// 鼠标移动事件
document.addEventListener("mousemove", (event) => {
  const distance = getMouseDistance(event.clientX, event.clientY);
  if (distance > moveThreshold) {
      removeWord();
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;
  }
});

// 检测鼠标停止
let mouseMoveTimeout;
document.addEventListener("mousemove", () => {
  clearTimeout(mouseMoveTimeout);
  mouseMoveTimeout = setTimeout(() => {
      if (currentWords < maxWordsOnScreen) {
          addWord();
      }
  }, 500); // 鼠标停止500毫秒后视为静止
});

addWord();


// Buttons
document.getElementById('invertColorsButton1').addEventListener('click', function() {
  document.body.classList.toggle('inverted');
  this.classList.toggle('invertedButton1'); // Toggle the button's style too
});

document.getElementById('invertColorsButton2').addEventListener('click', function() {
  document.body.classList.toggle('inverted2');
  this.classList.toggle('invertedButton2'); // Toggle the button's style too
});

document.getElementById('backButton').addEventListener('click', function() {
  window.location.href = '../index.html';
});
