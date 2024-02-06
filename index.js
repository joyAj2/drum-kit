// Function to play audio and trigger animation
function playDrum(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      break;
  }

  // Trigger animation
  var button = document.querySelector("." + buttonInnerHTML + ".drum");
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

// Click event listener for buttons
document.querySelectorAll(".drum").forEach(function (element) {
  element.addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playDrum(buttonInnerHTML);
  });
});

// Keydown event listener for keyboard
document.addEventListener("keydown", function (event) {
  // Get the key that was pressed
  var key = event.key.toLowerCase();

  // Check if the pressed key corresponds to one of the drum keys (w, a, s, d, j, k, l)
  if (["w", "a", "s", "d", "j", "k", "l"].includes(key)) {
    // Play the corresponding audio file and trigger animation
    playDrum(key);
  }
});

// document.querySelectorAll(".drum").forEach(function (element) {
//   element.addEventListener("click", function () {
//     var buttonInnerHTML = this.innerHTML;
//     switch (buttonInnerHTML) {
//       case "w":
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//       case "k":
//         var kickbass = new Audio("sounds/kick-bass.mp3");
//         kickbass.play();
//         break;
//       case "l":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;

//       default:
//         break;
//     }
//   });
// });
