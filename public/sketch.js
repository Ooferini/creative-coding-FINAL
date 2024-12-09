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
  print(songs);
  scene = 'fest';
  textFont(font);
  songsUp;
  //startQuiz();
}

function draw() {
  background('#5EF38C');
  switch (scene) {
    case 'fest':
      fest();
      break;
    case 'quiz':
      quiz();
      break;
    default:
      break;
  }
}

function mouseClicked() {
  addArtistToLineup();
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
        songs.push(i.name);
      }
    }
  });
}

// sets spotify access token
function setToken() {
  var hash = window.location.hash.split('&');
  s.setAccessToken(hash[0].substring(14));
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
