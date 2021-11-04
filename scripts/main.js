var shareBtn = document.querySelector("button.share-btn");

shareBtn.addEventListener("click", changeColor);
shareBtn.addEventListener("click", displayPopup);

function changeColor() {
    this.classList.toggle("active-btn");
}

function displayPopup() {
    var popup = document.querySelector("div.popup-wrapper");
    console.log("Clicked");
    popup.classList.toggle("show");
}