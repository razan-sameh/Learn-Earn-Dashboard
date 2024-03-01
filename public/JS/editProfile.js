//open popup-picture 
let picture = document.querySelector(".pictures .pro-picture");
let picOverlay = document.querySelector(".overlay-picture");
let popupPicture = document.querySelector(".popup-picture");
let picExit = document.querySelector(".popup-picture .exit span")
picture.addEventListener("click",(e) => {
    e.preventDefault();
    picOverlay.style.display= "block";
    popupPicture.style.display = "block";
});
//close popup-picture 
picOverlay.addEventListener("click",(e) => {
    e.preventDefault();
    picOverlay.style.display= "none";
    popupPicture.style.display = "none";
});
picExit.addEventListener("click",(e) => {
    e.preventDefault();
    picOverlay.style.display= "none";
    popupPicture.style.display = "none";
});

//open popup-background-picture
let backgroundPicture = document.querySelector(".pictures .background");
let backgroundPictureIcon = document.querySelector(".pictures .edit-ground i");
let overlaybackground = document.querySelector(".overlay-background-picture");
let popupBackgroundPic = document.querySelector(".popup-background-picture");
let exitBackgroundPic = document.querySelector(".popup-background-picture .exit span")
backgroundPicture.addEventListener("click",(e) => {
    e.preventDefault();
    overlaybackground.style.display= "block";
    popupBackgroundPic.style.display = "block";
});
backgroundPictureIcon.addEventListener("click",(e) => {
    e.preventDefault();
    overlaybackground.style.display= "block";
    popupBackgroundPic.style.display = "block";
});
//close popup-background-picture
overlaybackground.addEventListener("click",(e) => {
    e.preventDefault();
    overlaybackground.style.display= "none";
    popupBackgroundPic.style.display = "none";
});
exitBackgroundPic.addEventListener("click",(e) => {
    e.preventDefault();
    overlaybackground.style.display= "none";
    popupBackgroundPic.style.display = "none";
});