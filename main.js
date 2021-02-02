// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const like = document.getElementsByClassName("like")
const like_glyph = document.getElementsByClassName("like-glyph")
const modal = document.getElementById("modal")

modal.classList.add('hidden')

for( const keys of like_glyph ){
  keys.addEventListener("click", () => {
    mimicServerCall()
    .then(response => {
      if (keys.innerHTML == EMPTY_HEART) {
        keys.innerHTML = FULL_HEART
        keys.classList.add('activated-heart')
      } else {
        keys.innerHTML = EMPTY_HEART
        keys.classList.remove('activated-heart')
      }
    })
    .catch(error => {
      modal.classList.remove('hidden')
      modal.querySelector("#modal-message").innerText = error

      setTimeout(modal.classList.add('hidden'), 5000)
    })
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
