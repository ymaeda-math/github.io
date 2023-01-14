// Get the image element
var image = document.querySelector("#image");

// Add a mouseover event listener to the image
image.addEventListener("mouseover", function () {
  // Change the image's source when the mouse is over it
  image.src = "image/new_yota.jpg";
});

// Add a mouseout event listener to the image
image.addEventListener("mouseout", function () {
  // Change the image's source back when the mouse is no longer over it
  image.src = "image/yota.jpg";
});

// Get the header element
var header = document.querySelector("#header");

// Add a click event listener to the header
header.addEventListener("click", function () {
  // Toggle a class on the header to change its background color
  header.classList.toggle("blue-header");
});
