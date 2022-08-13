let submitButton = document.querySelector('#submit');
let content = document.querySelector("#privacy");
const correctPassword="4321";
function clickListener(event){
    event.preventDefault();
    let input_password=document.querySelector('#password');
    let password_value=input_password.value;
    if(password_value===correctPassword){
        console.log("Access granted!");
        content.classList.remove("hidden");
    }
}
submitButton.addEventListener('click', clickListener);