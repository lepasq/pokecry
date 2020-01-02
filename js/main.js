function cry(id) {
  var audio = new Audio("/res/cries/" + id + ".ogg");
  audio.volume = 0.1;
  audio.play();
}

function randomCry() {
  var min = 1;
  var max = 151;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  var audio = new Audio("/res/cries/" + random + ".ogg");
  audio.volume = 0.1;

  console.log(random);
  audio.play();
}
