
let prevScrollpos = window.pageYOffset; //Default Y position
  // window.pageYOffset returns the number of pixels the document is currently scrolled along the vertical axis (Y).
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset; // Udated position (whe the user scrolls)
    if (prevScrollpos > currentScrollPos) { 
      document.getElementById("D").style.top = "0"; // if the previous position is greater than the current, "show" the navbar
    } else {
      document.getElementById("D").style.top = "-4rem"; // if the previous position is less than the current, "hide" the navbar
    }
    prevScrollpos = currentScrollPos; // to swap or update positions
}

