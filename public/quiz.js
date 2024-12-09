function quiz() {
  displaySongs();
}

function startQuiz() {
  bar = createInput('');
  bar.input(checkSong);
  bar.size(500);
  bar.position(width / 2 - 250, height - 100);
}

function displaySongs() {
  for (let i = 0; i < songs.length; i++) {
    let msg = i + 1 + '. ';
    if (songsUp.includes(songs[i])) {
      msg += songs[i];
    } else {
      for (let j = 0; j < songs[i].length; j++) {
        msg += '-';
      }
    }
    text(msg, 0, 16 * i, 100, 100);
  }
}

function checkSong() {
  if (songs.includes(bar.value)) {
    songsUp.push(bar.value);
  }
}
