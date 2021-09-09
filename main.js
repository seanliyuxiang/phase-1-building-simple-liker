// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

// grab all the hearts, NodeList
let heartIcons = document.querySelectorAll('.like-glyph');

let modal = document.getElementById('modal');
let modalParagraph = document.getElementById('modal-message');

let callServerAndCatch = (event) => {
  mimicServerCall()
  .then(() => handleResponse(event))
  .catch(error => handleError(error));
};

let handleError = (errorMessage) => {
  modal.classList.remove('hidden');
  modalParagraph.innerText = errorMessage;
  setTimeout(() => {
    modal.classList.add('hidden')
    modalParagraph.innerText = ""
  }, 3000);
};

let handleResponse = (event) => {
  if (event.target.innerText === EMPTY_HEART) {
    event.target.classList.add('activated-heart');
    event.target.innerText = FULL_HEART;
  } else {
    event.target.classList.remove('activated-heart');
    event.target.innerText = EMPTY_HEART;
  }
};

// iterate through the hearts NodeList to add an event listener to each heart
heartIcons.forEach(heart => {
  heart.addEventListener('click', callServerAndCatch);
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
