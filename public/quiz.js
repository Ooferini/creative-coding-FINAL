function quiz() {
  displayQuizHead();
  displaySongs();
}

function startQuiz() {
  bar = createInput('');
  bar.input(checkSong);
  bar.size(500);
  bar.position(width / 2 - 250, height - 100);
}

function displaySongs() {
  textSize(16);
  fill('#000000');
  for (let i = 0; i < songs.length; i++) {
    let msg = '';
    if (i < 9) {
      msg += '0';
    }
    msg += i + 1 + '. ';
    if (songsUp.includes(songs[i])) {
      msg += songs[i];
    } else {
      for (let j = 0; j < songs[i].length; j++) {
        msg += '-';
      }
    }
    let row = i < 25;
    text(
      msg,
      row ? width / 8 : width / 2 + width / 16,
      (row ? 0 : -height / 2 + 16) + 16 * (i + 1) + height / 4,
      500,
      100
    );
  }
}

function checkSong() {
  let inputVal = bar.value().toLowerCase();
  let index;
  print(inputVal);
  if (songs.includes(inputVal) && !songsUp.includes(inputVal)) {
    bar.value('');
    index = songs.indexOf(inputVal);
    songsUp.push(inputVal);
    let anim = new songReveal(index, textWidth(inputVal));
    animations.push(anim);
  }
}

class songReveal {
  constructor(index, length) {
    this.index = index;
    this.stage = 1;
    this.length = length + 60;
  }

  display() {
    if (this.stage <= 0.1) {
      this.destroy();
    }
    fill(`rgba(255,255,255,${this.stage})`);
    noStroke();
    let row = this.index < 25;
    rect(
      -10 + (row ? width / 8 : width / 2 + width / 16),
      this.index * 16 + (row ? 0 : -height / 2 + 16) + height / 4,
      this.length,
      20,
      4
    );
    this.stage -= 0.01;
  }

  destroy() {
    animations.splice(animations.indexOf(this), 1);
  }
}

function displayQuizHead() {
  fill('#000000');
  textSize(48);
  textStyle(BOLD);
  displayTextCenter('Top Songs Quiz', height / 8);
  textSize(32);
  displayTextCenter('how well do you know your taste?', height / 8 + 48);
}
