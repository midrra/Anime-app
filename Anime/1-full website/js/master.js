// not finsh (16)

// cheach if there is local  storage color_option
let mainColors = localStorage.getItem("color_option");
// if ther  is color item in local storage
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
// remove active class from all colors list getItem
document.querySelectorAll(".colors-list li").forEach(element => {
  element.classList.remove("active")

// add class on element with data colors === local storage item
if (element.dataset.color === mainColors) {
  // add active class
  element.classList.add("active");
}
});
}

// Random background option
  backgroundOption = true;
// variable to control the background interval
let backgroundInterval;
// cheack if there is local storage random background item
let backgrounLocalItem = localStorage.getItem("background_option");
// chaeck if random background local Storage is not empty
if (backgrounLocalItem !== null) {
  if (backgrounLocalItem === 'true') {
    backgroundOption = true;
  }else {
    backgroundOption = false;
}
  // Remove active class from all spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {
    element.classList.remove("active");
  });
if (backgrounLocalItem === 'true') {
  document.querySelector(".random-backgrounds .yes").classList.add("active")
}else {
  document.querySelector(".random-backgrounds .no").classList.add("active")

}
}
// togle spin class on icon
document.querySelector("nav").onclick = function(){
  // toggle class fa-spinfor rotation on it self
  this.classList.toggle("fa-spin");
  // toggle class (open) on main setting-box
   document.querySelector(".setting-box").classList.toggle("open");
};
// switch colors
const colorLi = document.querySelectorAll(".colors-list li");
// lop on all list
colorLi.forEach((li) => {
  //click on every list item
  li.addEventListener("click",(e) =>{
    // set color on root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
    // set color on local storage
    localStorage.setItem("color_option",e.target.dataset.color)

    handleActive(e)

  });
});
// switch background option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
// lop on all list
randomBackEl.forEach(span => {
  //click on every list item
  span.addEventListener("click",(e) =>{

    handleActive(e)

if (e.target.dataset.background === 'yes') {
  backgroundOption = true;
  randomizeImgs();
  localStorage.setItem("background_option", true);
}else {
  backgroundOption = false;
  clearInterval(backgroundInterval);
  localStorage.setItem("background_option", false);

}
  });
});

//set landing page elemente
let landingPage = document.querySelector(".landing-page");
// get arry of images
let imgsArry = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg",];


function randomizeImgs() {

if (backgroundOption === true) {
  backgroundInterval = setInterval(function(){
    // Get Random Number
    let randomNumber = Math.floor(Math.random()*5);
    // change background images url
    landingPage.style.backgroundImage = 'url("images/' + imgsArry[randomNumber]+ '")'
  },1000)
}
};
randomizeImgs()


// select skills selector
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  // skills offset top
  let skillsOffsetTop = ourSkills.offsetTop;


// skill outer height
let skillsOuterHeight = ourSkills.offsetHeight;

// window height
let windowHeight = this.innerHeight;

// window scroll top
let windowScrollTop = this.pageYOffset;
// console.log(windowScrollTop)
  if (windowScrollTop >730) {

  let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
  allSkills.forEach(skill => {
    skill.style.width = skill.dataset.progress;
  });

//   }else {
    // this.console.log("skills section reach");
}
}

// Creat poup with the images
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
  img.addEventListener('click', function(e){
     // Creat overlay element
  let overlay = document.createElement("div")
  // Add class to overlay/
  overlay.className = 'popup-overlay';
// Append overlay to the body
document.body.appendChild(overlay);
// Creat the popup
let popupBox = document.createElement("div");
// Add class to the poupBox
popupBox.className = 'popup-box';

if (img.alt !== null) {
  //creat heading
  let imageHeading = document.createElement("h3");
  //Creat text for heading
let imgText = document.createTextNode(img.alt);
// Append the text to the heading
imageHeading.appendChild(imgText)
//Append the haeding to the popup box
popupBox.appendChild(imageHeading);

}

// Creat images
let popupImage = document.createElement("img")
//Set image source
popupImage.src = img.src;
//Add image to popup box
popupBox.appendChild(popupImage);
//Append the popup box to body
document.body.appendChild(popupBox)

//creat the close span
let closebutton = document.createElement("span");
// creat the close button text
let closeButtonTtext = document.createTextNode("x");
// Append text to class button
closebutton.appendChild(closeButtonTtext);
// add calss  to the class button
closebutton.className = 'close-button'
// add close button to the popup box
popupBox.appendChild(closebutton);


  })
});
//close popup
document.addEventListener("click", function(e){
  if (e.target.className == "close-button") {
    // remove the current popup
e.target.parentNode.remove();
// remove overlay
document.querySelector(".popup-overlay").remove();

  }
})


// /// select All Bullets

const allBullets= document.querySelectorAll(".nav-bullets .bullet");

// allBullets.forEach(bullet => {
//   bullet.addEventListener("click", (e) => {

//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: "smooth"
//     })
//   });
// });

//Select All links

const allLinks= document.querySelectorAll(".links a");

// allLinks.forEach(link => {
//   link.addEventListener("click", (e) => {

//    e.preventDefault();

//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: "smooth"
//     })
//   });
// });

function scrollToSomewhere(elements) {
  elements.forEach(ele => {
    ele.addEventListener("click", (e) => {
  
     e.preventDefault();
     console.log(e.target.dataset.musab);
  
      document.querySelector(e.target.dataset.musab).scrollIntoView({
        behavior: "smooth"
      })
    });
  });
}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

///Handele Active state
function handleActive(ev) {
      // remove active class from all childerns
      ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
       });
       // Add active class
       ev.target.classList.add("active");
}


let bulletsSpan = document.querySelectorAll(".bullets-option span")

let bulletsconatiner = document.querySelector(".nav-bullets")

let bulletLocalItem = localStorage.getItem("bullets_option")


if (bulletLocalItem !== null) {
  bulletsSpan.forEach(span => {
    span.classList.remove("active");
  });
  if (bulletLocalItem === 'block') {

    bulletsconatiner.style.display = 'block';
    document.querySelector(".bullets-option .yes").classList.add("active")
    
  }else{

    bulletsconatiner.style.display = 'none';
    document.querySelector(".bullets-option .no").classList.add("active")

  }
}

bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display=== "show") {
      bulletsconatiner.style.display = 'block';
      localStorage.setItem("bullets_option", "block");
      
    }else{
      bulletsconatiner.style.display = 'none';
      localStorage.setItem("bullets_option", "none");

    }
    handleActive(e)

  });

});

//Reset Button

document.querySelector(".reset-options").onclick= function () {
  // localStorage.clear()
  localStorage.removeItem("bullets_option");
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");

  //Reload eindow
window.location.reload();
};

let togglebtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links")

togglebtn.onclick = function(e){

  //Stop propagation
  e.stopPropagation();


  // Toggle class "menu active on button"
  this.classList.toggle("menu-active")
  // Toggle class "menu open on links"

  tlinks.classList.toggle("open")

}

//click any where outside and toggle button
document.addEventListener("click",(e) =>{
  if(e.target !== togglebtn && e.target !== tlinks) {
//Cheac if Menu is open 
if (tlinks.classList.contains("open")) {

    // Toggle class "menu active on button"
    togglebtn.classList.toggle("menu-active")
    // Toggle class "menu open on links"
  
    tlinks.classList.toggle("open")
}
  }
})

//Stop prpagation on menu
tlinks.onclick = function (e) {
  e.stopPropagation();
}




