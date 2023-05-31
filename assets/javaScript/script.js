



document.addEventListener("DOMContentLoaded", function() {
    var loginLink = document.querySelector('.login__profile');
    const loginEmail = localStorage.getItem("login_email");

    if (loginEmail !== null) {
        loginLink.innerText = "Logout";
    }

    loginLink.addEventListener("click", function() {
        if (loginEmail !== null) {
            // Perform logout actions here (e.g., clear localStorage)
            localStorage.removeItem("login_email");
            loginLink.innerText = "Login";
        } else {
            // Redirect to login.html
            window.location.href = "/login.html";
        }
    });
});
if (window.location.pathname === "/" && !localStorage.getItem("login_email")) {
  window.location.href = "/login.html";
} else if (window.location.pathname === "/login.html" && localStorage.getItem("login_email")) {
  window.location.href = "/";
}



// Hämta elementet från HTML-dokumentet
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

//Lägg till en händelsehanterare till ikonen
icon.onclick = function() {
  if (mySong.paused) {
    //Starta musiken och ändra ikonen till pausknappen
    mySong.play();
    icon.src = "assets/img/pause.png.png";
  } else {
    //Pausa musiken och ändra ikonen till play-knappen
    mySong.pause();
    icon.src = "assets/img/play.png.png";
  }
}

function changeImage() {
  var icon = document.getElementById("icon");
  icon.src = "assets/img/pause.png.png";
}

// Hämta elementet från HTML-dokumentet
var mySong1 = document.getElementById("mySong1");
var icon1 = document.getElementById("icon1");

//Lägg till en händelsehanterare till ikonen
icon1.onclick = function() {
  if (mySong1.paused) {
    //Starta musiken och ändra ikonen till pausknappen
    mySong1.play();
    icon1.src = "assets/img/pause1.png.png";
  } else {
    //Pausa musiken och ändra ikonen till play-knappen
    mySong1.pause();
    icon1.src = "assets/img/play1.png.png";
  }
}

function changeImage1() {
  icon1.src = "assets/img/pause1.png.png";
}
// Hämta elementet från HTML-dokumentet
var mySong2 = document.getElementById("mySong2");
var icon2 = document.getElementById("icon2");

//Lägg till en händelsehanterare till ikonen
icon2.onclick = function() {
  if (mySong2.paused) {
    //Starta musiken och ändra ikonen till pausknappen
    mySong2.play();
    icon2.src = "assets/img/pause2.png.png";
  } else {
    //Pausa musiken och ändra ikonen till play-knappen
    mySong2.pause();
    icon2.src = "assets/img/play2.png.png";
  }
}

function changeImage2() {
  icon2.src = "assets/img/pause2.png.png";
}
// Hämta elementet från HTML-dokumentet
var mySong3 = document.getElementById("mySong3");
var icon3 = document.getElementById("icon3");

//Lägg till en händelsehanterare till ikonen
icon3.onclick = function() {
  if (mySong3.paused) {
    //Starta musiken och ändra ikonen till pausknappen
    mySong3.play();
    icon3.src = "assets/img/pause3.png.png";
  } else {
    //Pausa musiken och ändra ikonen till play-knappen
    mySong3.pause();
    icon3.src = "assets/img/play3.png.png";
  }
}

function changeImage2() {
  icon3.src = "assets/img/pause3.png.png";
}


// Hämta elementet från HTML-dokumentet
var mySong4 = document.getElementById("mySong4");
var icon4 = document.getElementById("icon4");

//Lägg till en händelsehanterare till ikonen
icon4.onclick = function() {
  if (mySong4.paused) {
    //Starta musiken och ändra ikonen till pausknappen
    mySong4.play();
    icon4.src = "assets/img/pause4.png.png";
  } else {
    //Pausa musiken och ändra ikonen till play-knappen
    mySong4.pause();
    icon4.src = "assets/img/play4.png.png";
  }
}

function changeImage3() {
  icon4.src = "assets/img/pause4.png.png";
}

// Hämta elementet från HTML-dokumentet
var mySong5 = document.getElementById("mySong5");
var icon5 = document.getElementById("icon5");

//Lägg till en händelsehanterare till ikonen
icon5.onclick = function() {
  if (mySong5.paused) {
    //Starta musiken och ändra ikonen till pausknappen
    mySong5.play();
    icon5.src = "assets/img/pause5.png.png";
  } else {
    //Pausa musiken och ändra ikonen till play-knappen
    mySong5.pause();
    icon5.src = "assets/img/play5.png.png";
  }
}

function changeImage3() {
  icon5.src = "assets/img/pause5.png.png";
}

// Hämta elementet från HTML-dokumentet
var mySong6 = document.getElementById("mySong6");
var icon6 = document.getElementById("icon6");

//Lägg till en händelsehanterare till ikonen
icon6.onclick = function() {
  if (mySong6.paused) {
    //Starta musiken och ändra ikonen till pausknappen
    mySong6.play();
    icon6.src = "assets/img/pause6.png.png";
  } else {
    //Pausa musiken och ändra ikonen till play-knappen
    mySong6.pause();
    icon6.src = "assets/img/play6.png.png";
  }
}

function changeImage3() {
  icon6.src = "assets/img/pause6.png.png";
}

// Hämta elementet från HTML-dokumentet
var mySong7 = document.getElementById("mySong7");
var icon7 = document.getElementById("icon7");

//Lägg till en händelsehanterare till ikonen
icon7.onclick = function() {
  if (mySong7.paused) {
    //Starta musiken och ändra ikonen till pausknappen
    mySong7.play();
    icon7.src = "assets/img/pause7.png.png";
  } else {
    //Pausa musiken och ändra ikonen till play-knappen
    mySong7.pause();
    icon7.src = "assets/img/play7.png.png";
  }
}

function changeImage3() {
  icon7.src = "assets/img/pause7.png.png";
}