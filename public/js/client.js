window.onscroll = function() {stickyNavBar()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add("sticky");
  }
}

document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio)+', maximum-scale=1.0, user-scalable=0');

let dropDemo = document.getElementById("dropDemo");

dropDemo.addEventListener("click", function(){
  let dropDemoTab = window.open("https://agile-earth-44618.herokuapp.com/", '_blank');
  dropDemoTab.focus();
})

let dropCode = document.getElementById("dropCode");

dropCode.addEventListener("click", function(){
  let dropCodeTab = window.open("https://github.com/BCITDevonbui/2800-202210-BBY25", '_blank');
  dropCodeTab.focus();
})

let iAssistDemo = document.getElementById("iAssistDemo");

iAssistDemo.addEventListener("click", function(){
  let iAssistDemoTab = window.open("https://comp1800team07-app.web.app/", '_blank');
  iAssistDemoTab.focus();
})

let iAssistCode = document.getElementById("iAssistCode");

iAssistCode.addEventListener("click", function(){
  let iAssistCodeTab = window.open("https://github.com/amedeor/1800_202210_BBY07", '_blank');
  iAssistCodeTab.focus();
})

document.getElementById('hamburgerPic').addEventListener("click", function(){
  document.getElementById("navbar").style.overflow = "visible";
  document.getElementById("myDropdown").classList.toggle("show");
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#hamburgerPic')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// let resumeButton = document.getElementById("resumeButton");
// let resumeLink = document.getElementById("resumeLink");

// resumeButton.addEventListener("click", function(){
//   resumeLink.click();
// })

