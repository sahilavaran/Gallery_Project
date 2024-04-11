const container = document.getElementById("container");
const display = document.getElementById("display");

//adding image
//1 first thing is put all this things on the thumbnails.
const images = [
  {
    url: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "forest",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "forest",
  },
  {
    url: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "forest",
  },
];

//creating thumbnails in function
function createThumbnails() {
  images.forEach(function (image) {
    //forEach needs call back function
    //1.create a image dom node
    const img = document.createElement("img");
    //next is set source and alt attribute
    img.src = image.url;
    img.alt = image.alt;

    //put the img onto the page
    container.appendChild(img);

    //when we click the image something happens
    img.addEventListener("click", function () {
      console.log(image.alt);
    });
  });
}
createThumbnails();
//display the large image
function createBigImage(image) {
  const bigImg = document.createElement("img");
  bigImg.src = image.url;
  bigImg.alt = image.alt;
  display.appendChild(bigImg);
}

createBigImage(image[0]);

function createThumbnails() {
  images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    container.appendChild(img);

    img.addEventListener("click", function () {
      display.innerHTML = ""; // Clear previous big image
      createBigImage(image);
    });
  });
}

function createBigImage(image) {
  const bigImg = document.createElement("img");
  bigImg.src = image.url;
  bigImg.alt = image.alt;
  display.appendChild(bigImg);
}

createThumbnails();
// });
