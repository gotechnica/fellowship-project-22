// First Column
const resultName = document.querySelector("#results-name");
const resultImg = document.querySelector("#results-img");
const resultText = document.querySelector("#results-text");
const pictures = [
  {
    name: "Wooden Couch",
    img: "randomPictures/IMG_2886.JPG",
    desc: "This is a picture of a tenon (from a mortise and tenon joint) from my wooden couch project.", 
  },
  {
      name: "8th Grade Car",
      img: "randomPictures/7P9A2763.JPG",
      desc: "Using a jigsaw to cut a part for our car."
  },
  {
      name: "8th Grade Boat",
      img: "randomPictures/7P9A4740.JPG",
      desc: "Using a marker to mark where to cut the plexiglass to use for the bottom of our boat."
  },
  {
    name: "7th Grade Boat",
    img: "randomPictures/7P9A4411.jpg",
    desc: "Creating a cardboard model of my 7th grade boat"
  },
];
const doRoll = () => {
  let picture = pictures[Math.floor(Math.random() * pictures.length)];
  resultName.textContent = picture.name;
  resultImg.src = picture.img;
  resultText.textContent = picture.desc;
}

// Second Column
const resultName2 = document.querySelector("#results-name2");
const resultImg2 = document.querySelector("#results-img2");
const resultText2 = document.querySelector("#results-text2");
const pictures2 = [
  {
    name: "8th Grade Interview",
    img: "randomPictures/7P9A1693.jpg",
    desc: "Being interviewed by a local news station about the Design & Engineering Club and what we have made over the years.", 
  },
  {
      name: "8th Grade Boat",
      img: "randomPictures/7P9A5636.JPG",
      desc: "Using a sand belt to sand down excess fiberglass"
  },
  {
      name: "Purple Heart Wood Table",
      img: "randomPictures/PurpleHeartTable2.png",
      desc: "Image of a lap desk made from naturally purple wood."
  },
  {
    name: "7th Grade Car",
    img: "randomPictures/7P9A7474.jpg",
    desc: "Using the scroll saw to cut a part for my car"
  },
];
const doRoll2 = () => {
  let picture2 = pictures2[Math.floor(Math.random() * pictures2.length)];
  resultName2.textContent = picture2.name;
  resultImg2.src = picture2.img;
  resultText2.textContent = picture2.desc;
}

// Third Column
const resultName3 = document.querySelector("#results-name3");
const resultImg3 = document.querySelector("#results-img3");
const resultText3 = document.querySelector("#results-text3");
const pictures3 = [
  {
    name: "6th Grade Car",
    img: "/Users/rebeccawu/Documents/Github/rebecca-wu-fellowship/randomPictures/7P9A3624.JPG",
    desc: "Testing out our hand pulled steering system.", 
  },
  {
      name: "Wooden Couch Pieces",
      img: "randomPictures/IMG_2892.JPG",
      desc: "All completed parts for the wooden couch"
  },
  {
      name: "8th Grade Car",
      img: "randomPictures/D_E_2-22-17 (6).jpg",
      desc: "Painting my 8th grade car"
  },
  {
    name: "Tree Bookshelf",
    img: "randomPictures/TreeBookshelf.jpeg",
    desc: "A side project I made during 7th grade"
  },
  {
    name: "Deck",
    img: "randomPictures/Deck.jpeg",
    desc: "Helped make a deck for a friend in just under 6 hours"
  },
];
const doRoll3 = () => {
  let picture3 = pictures3[Math.floor(Math.random() * pictures3.length)];
  resultName3.textContent = picture3.name;
  resultImg3.src = picture3.img;
  resultText3.textContent = picture3.desc;
}