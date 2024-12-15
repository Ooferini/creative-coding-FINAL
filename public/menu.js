let festHover = false;
let quizHover = true;

function menu() {
  if (festHover || quizHover) {
    sketch.style.cursor = 'pointer';
  } else {
    sketch.style.cursor = 'auto';
  }

  fill('#000000');
  textSize(60);
  textStyle(BOLD);
  displayTextCenter("Jo's Spotify Things", height / 6 - 30);
  updateButtons();
}

function updateButtons() {
  // draw buttons
  noStroke();
  fill('#ffffff');
  let x = (width - height) / 2;
  let x2 = x + (height * 2) / 3;
  rect(x, height / 3, height / 3, height / 3, 16);
  rect(x2, height / 3, height / 3, height / 3, 16);

  // text in buttons
  fill('#000000');
  textSize(24);
  text('festival', x, height / 3, height / 3, height / 3);
  text('quiz', x2, height / 3, height / 3, height / 3);

  // check hover over buttons
  let a = mouseX >= x && mouseX <= x + height / 3;
  let b = mouseX >= x2 && mouseX <= x2 + height / 3;
  let c = mouseY >= height / 3 && mouseY <= (height * 2) / 3;
  festHover = c && a;
  quizHover = c && b;
}

function changeScene() {
  print('change scene');
  if (festHover) {
    scene = 'fest';
  } else if (quizHover) {
    scene = 'quiz';
    startQuiz();
  }
}
