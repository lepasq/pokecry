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

// if no battle theme is selected, this is the standard battle theme
var battle = "Battle (vs Trainer)";
var myAudio = "";
var path = "";

function selectBattle(bt) {
  battle = bt;
  console.log(battle + " was selected!");
}

function battleTheme() {
  if (myAudio == "" || path != "/res/themes/" + battle + ".mp3") {
    path = "/res/themes/" + battle + ".mp3";
    myAudio = new Audio("/res/themes/" + battle + ".mp3");
    myAudio.volume = 0.1;
    console.log("started");
    myAudio.play();
  } else {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
  }
}

function myDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        document.getElementById("current-text").innerHTML = battle;
        myAudio.pause();
      }
    }
  }
};
