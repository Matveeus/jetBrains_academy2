//Open modal window function
let openWindowButton = document.getElementById("open-window-button");
let openWindowFunction = () => {
    let modalWindow = document.getElementById("modal-window");
    modalWindow.style.display = "block"
}
openWindowButton.addEventListener("click" , openWindowFunction);

//Close modal window function
let closeWindowButton = document.getElementById("close-window-button");
let closeWindowFunction = () => {
    let modalWindow = document.getElementById("modal-window");
    modalWindow.style.display = "none"
}
closeWindowButton.addEventListener("click", closeWindowFunction);

//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("nav");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
})




