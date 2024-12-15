function fest() {
  textSize(14);
  fill('#000000');
  checkArtistHover();
  renderArtists();
  renderLineup();
}

function renderArtists() {
  for (var i = 0; i < artists.length; i++) {
    if (lineup.includes(artists[i])) {
      fill('#aaaaaa');
    } else {
      fill('#000000');
    }
    text(i + 1 + '. ' + artists[i], 200, 100 + 30 * (i + 1));
  }
}

function checkArtistHover() {
  sketch.style.cursor = 'auto';
  if (mouseX >= 190 && mouseY >= 100 && mouseY <= 699) {
    let pos = Math.floor((mouseY - 100) / 30);
    let width = textWidth(pos - 1 + '. ' + artists[pos]) + 20;
    if (mouseX <= 200 + width) {
      fill('#ffffff');
      rect(190, 110 + 30 * pos, width, 30, 5);
      sketch.style.cursor = 'pointer';
    }
  }
}

function addArtistToLineup() {
  if (mouseX >= 200 && mouseX <= 500 && mouseY >= 100 && mouseY <= 699) {
    let pos = Math.floor((mouseY - 100) / 30);
    if (lineup.includes(artists[pos])) {
      const index = lineup.indexOf(artists[pos]);
      lineup.splice(index, 1);
    } else {
      lineup.push(artists[pos]);
    }
  }
}

function renderLineup() {
  fill('#ffffff');
  let lineupWidth = width / 2;
  let lineupHeight = height / 2;
  rect(width / 2 - 100, height / 6, lineupWidth, lineupHeight, 16);
  fill('#000000');
  textSize(40);
  text(userName + '-chella', width / 2, 100);
  push();
  translate(width / 2 - 100, height / 6);
  // textWrap('CHAR');

  fill('#5EF38C');
  // headliner
  rect(
    lineupWidth / 4,
    lineupHeight / 10,
    lineupWidth / 2,
    lineupHeight / 5,
    16
  );
  fill('#000000');
  text(
    lineup[0],
    lineupWidth / 4 + 16,
    lineupHeight / 10 + 50,
    lineupWidth / 2 - 16,
    lineupHeight / 5 - 16
  );

  // subliners
  textSize(32);
  fill('#5EF38C');
  rect(
    lineupWidth / 9,
    (lineupHeight * 2) / 5,
    lineupWidth / 3,
    lineupHeight / 5,
    16
  );
  fill('#000000');
  text(
    lineup[1],
    16 + lineupWidth / 9,
    56 + (lineupHeight * 2) / 5,
    -16 + lineupWidth / 3,
    -16 + lineupHeight / 5
  );

  fill('#5EF38C');
  rect(
    (lineupWidth * 5) / 9,
    (lineupHeight * 2) / 5,
    lineupWidth / 3,
    lineupHeight / 5,
    16
  );
  fill('#000000');
  text(
    lineup[2],
    16 + (lineupWidth * 5) / 9,
    56 + (lineupHeight * 2) / 5,
    -16 + lineupWidth / 3,
    -16 + lineupHeight / 5
  );

  // openers
  textSize(24);
  fill('#5EF38C');
  rect(
    lineupWidth / 16,
    (lineupHeight * 7) / 10,
    lineupWidth / 4,
    lineupHeight / 5,
    16
  );
  fill('#000000');
  text(
    lineup[3],
    16 + lineupWidth / 16,
    46 + (lineupHeight * 7) / 10,
    -16 + lineupWidth / 4,
    -16 + lineupHeight / 5
  );

  fill('#5EF38C');
  rect(
    (lineupWidth * 6) / 16,
    (lineupHeight * 7) / 10,
    lineupWidth / 4,
    lineupHeight / 5,
    16
  );
  fill('#000000');
  text(
    lineup[4],
    16 + (lineupWidth * 6) / 16,
    46 + (lineupHeight * 7) / 10,
    -16 + lineupWidth / 4,
    -16 + lineupHeight / 5
  );

  fill('#5EF38C');
  rect(
    (lineupWidth * 11) / 16,
    (lineupHeight * 7) / 10,
    lineupWidth / 4,
    lineupHeight / 5,
    16
  );
  fill('#000000');
  text(
    lineup[5],
    16 + (lineupWidth * 11) / 16,
    46 + (lineupHeight * 7) / 10,
    -16 + lineupWidth / 4,
    -16 + lineupHeight / 5
  );

  pop();
}
