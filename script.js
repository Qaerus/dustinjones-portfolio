const words = ["Frontend Developer", "Web Designer", "Problem Solver"];
let i = 0, timer;
const typedText = document.getElementById('typed-text');

function typingEffect() {
  let word = words[i].split("");
  let loopTyping = function() {
    if (word.length > 0) {
      typedText.innerHTML += word.shift();
      timer = setTimeout(loopTyping, 150);
    } else {
      setTimeout(deletingEffect, 1500);
    }
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  let loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      typedText.innerHTML = word.join("");
      timer = setTimeout(loopDeleting, 100);
    } else {
      i = (i + 1) % words.length;
      typingEffect();
    }
  };
  loopDeleting();
}

document.addEventListener("DOMContentLoaded", function() {
  typingEffect();
});
