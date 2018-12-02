var form = document.querySelector('form');
var button = document.querySelector('.submit-btn')
var spinner = document.querySelector('.spinner')
var inputField = document.querySelector('#input-field');
var HyunA1 = document.querySelector('#HyunA1');
var HyunA2 = document.querySelector('#HyunA2');
var HyunA3 = document.querySelector('#HyunA3');
var HyunA4 = document.querySelector('#HyunA4');

button.addEventListener("click", function(event) {
  event.preventDefault();
  var keyword = inputField.value;
  getImages(keyword);
})

function getImages(keyword) {
  button.value = "Just A Few Seconds"

  fetch(`http://localhost:3000/HyunA/${keyword}`)
    .then(response => response.json())
    .then(images => updateImages(images))
    .then(() => button.value = "Get HyunA Photos")
    .then(() => clearInput())
    .catch(error => console.error("sorry, please try again."));
}

function clearInput() {
  inputField.value = "";
}

function updateImages(images) {
  console.log(images);
  HyunA1.src = images[0];
  HyunA2.src = images[1];
  HyunA3.src = images[2];
  HyunA4.src = images[3];
}
