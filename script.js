/*--------contact*/

let submitButton = document.querySelector("#submit-button");

function clickListener(event) {
  event.preventDefault();

  let emailInput = document.querySelector("#email");
  let messageInput = document.querySelector("#message");

  let emailText = emailInput.value;
  let messageText = messageInput.value;

  console.log("email: ", emailText, "message: ", messageText);
}

submitButton.addEventListener("click", clickListener);

/*--------lightbox*/

var slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  document.getElementById("Lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("Lightbox").style.display = "none";
}

function toSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  let modalPreviews = document.getElementsByClassName("modal-preview");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}
