window.addEventListener('DOMContentLoaded', clickListener, false);

let submitButton = document.querySelector('#submit-button');

function clickListener(event) {
    event.preventDefault();
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');

    let emailText = emailInput.value;
    let messageText = messageInput.value;

    console.log("email: ", emailText, " message: ", messageText);

}
submitButton.addEventListener('click', clickListener);


function openPage(pageName, element) {
    // Hide all elements with class="imageGrid" by default */
    var i, imageGrid, pageHeader, backButton;
    imageGrid = document.getElementsByClassName("art-image-grid");
    dynamicGrid = document.getElementsByClassName("dynamicGrid");
    artTypeHeader = document.getElementsByClassName("artTypeHeader");
    artTypeButton = document.getElementsByClassName("artTypeButton");
    centeredIcon = document.getElementsByClassName("centeredIcon");
    artHeaderLine = document.getElementsByClassName("artHeaderLine");
    info = document.getElementsByClassName("info");
    artTypeDescription = document.getElementsByClassName("artTypeDescription");
    for (i = 0; i < imageGrid.length; i++) {
        imageGrid[i].style.display = "none";
    }
    for (i = 0; i < dynamicGrid.length; i++) {
        dynamicGrid[i].style.display = "none";
    }
    for (i = 0; i < artTypeHeader.length; i++) {
        artTypeHeader[i].style.display = "none";
    }
    for (i = 0; i < info.length; i++) {
        info[i].style.display = "none";
    }
    for (i = 0; i < artTypeButton.length; i++) {
        artTypeButton[i].style.display = "none";
    }
    for (i = 0; i < centeredIcon.length; i++) {
        centeredIcon[i].style.display = "none";
    }
    for (i = 0; i < artTypeDescription.length; i++) {
        artTypeDescription[i].style.display = "none";
    }
    for (i = 0; i < artHeaderLine.length; i++) {
        artHeaderLine[i].style.display = "none";
    }
    pageHeader = document.getElementById("artPageHeader");
    pageHeader.style.display = "none";
    window.scrollTo(0, 0);


    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openAppPage(pageName, element) {
    var i, appContainer, pageInfo, backButton;
    appContainer = document.getElementsByClassName("appContainer");
    pageInfo = document.getElementsByClassName("pageInfo");
    pageHeader = document.getElementsByClassName("pageHeader");
    for (i = 0; i < appContainer.length; i++) {
        appContainer[i].style.display = "none";
    }
    for (i = 0; i < pageInfo.length; i++) {
        pageInfo[i].style.display = "none";
    }
    for (i = 0; i < pageHeader.length; i++) {
        pageHeader[i].style.display = "none";
    }


    document.getElementById(pageName).style.display = "block";
}



function showType(type, element) {
    var sticker, nft, other, shown;
    sticker = document.getElementsByClassName("sticker");
    nft = document.getElementsByClassName("nft");
    other = document.getElementsByClassName("other");
    for (i = 0; i < sticker.length; i++) {
        sticker[i].style.display = "none";
    }
    for (i = 0; i < nft.length; i++) {
        nft[i].style.display = "none";
    }
    for (i = 0; i < other.length; i++) {
        other[i].style.display = "none";
    }
    shown = document.getElementsByClassName(type);
    for (i = 0; i < shown.length; i++) {
        shown[i].style.display = "block";
    }

    console.log(type + "clicked");
}