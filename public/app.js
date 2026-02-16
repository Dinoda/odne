(() => {
  // src/app/img-display.js
  var body = document.body;
  var overlay = document.createElement("div");
  overlay.classList = "overlay";
  overlay.style.display = "none";
  var imageDisplay = document.createElement("img");
  overlay.appendChild(imageDisplay);
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });
  body.appendChild(overlay);
  var images = document.querySelectorAll("img");
  images.map((image) => {
    image.addEventListener("click", () => {
      imageDisplay.src = image.src;
      overlay.style.display = "block";
    });
  });
})();
