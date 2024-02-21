document.addEventListener('touchmove', (event) => {
  // Prevent the default touch behavior like scrolling
  event.preventDefault();

  // Use touch points to get the position
  const touch = event.touches[0];

  // Now, you can use touch.pageX and touch.pageY for the touch position
  // Implement your logic based on touch positions similar to how you handle mouse movements
  const distance = getMouseDistance(touch.pageX, touch.pageY);
  if (distance > moveThreshold) {
      removeWord();
      lastMouseX = touch.pageX;
      lastMouseY = touch.pageY;
  }

}, { passive: false });


document.addEventListener("touchmove", () => {
  clearTimeout(mouseMoveTimeout);
  mouseMoveTimeout = setTimeout(() => {
      if (currentWords < maxWordsOnScreen) {
          addWord();
      }
  }, 500); // 鼠标停止500毫秒后视为静止
});