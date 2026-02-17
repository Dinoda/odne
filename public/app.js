(() => {
  // src/app/overlay.js
  var body = document.body;
  var overlay = document.createElement("div");
  overlay.classList = "overlay";
  overlay.style.display = "none";
  var overlayContent = document.createElement("div");
  overlay.appendChild(overlayContent);
  body.appendChild(overlay);
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlayContent.innerHTML = "";
  });
  function displayOverlay(content) {
    overlayContent.appendChild(content);
    overlay.style.display = "block";
  }

  // src/app/img-display.js
  var images = document.querySelectorAll("img");
  for (const image of images) {
    image.addEventListener("click", () => {
      const display = document.createElement("img");
      display.src = image.src;
      displayOverlay(display);
    });
  }
})();
