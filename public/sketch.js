var userName;
let artists = [];
let songs = [];
let songsUp = [];
var s = new SpotifyWebApi();
let lineup = [];
var sketch;
let scene;
let font;
let bar;
let animations = [];
let modalOpen = true;

function preload() {
  font = loadFont('/mono.otf');
}

function setup() {
  setToken();
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(mySketch);
  sketch = document.querySelector('CANVAS');
  setName();
  getTopArtists();
  getTopSongs();
  scene = 'menu';
  textFont(font);
  songsUp;
}

function draw() {
  background('#5EF38C');
  switch (scene) {
    case 'menu':
      menu();
      break;
    case 'fest':
      fest();
      break;
    case 'quiz':
      quiz();
      break;
    default:
      break;
  }
  anims();
}

function mouseClicked() {
  if (!modalOpen) {
    if (scene === 'fest') {
      addArtistToLineup();
    }
    if (scene === 'menu') {
      changeScene();
    }
  }
}

// adds top artists to artists[] array
function getTopArtists() {
  s.getMyTopArtists({ limit: 20 }, function (err, data) {
    if (err) print(err);
    else {
      for (let i of data.items) {
        artists.push(i.name);
      }
    }
  });
}

function getTopSongs() {
  s.getMyTopTracks({ limit: 50 }, function (err, data) {
    if (err) print(err);
    else {
      for (let i of data.items) {
        songs.push(i.name.toLowerCase());
      }
    }
  });
}

// gets user's display name from their spotify profile
function setName() {
  s.getMe({}, function (err, data) {
    if (err) print(err);
    else {
      userName = data.display_name;
    }
  });
}

function anims() {
  for (i of animations) {
    i.display();
  }
}

// helper function to display text in the center of the page;
function displayTextCenter(msg, y, xmin, xmax) {
  let localWidth = xmax - xmin;
  let tWidth = textWidth(msg);
  let x = xmin + (localWidth - tWidth) / 2;
  text(msg, x, y);
}
