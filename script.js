function changeColors() {
    var colors = ["is-primary", "is-link", "is-info", "is-danger"];
    var randColor = colors[Math.floor(Math.random() * colors.length)];

    console.log(randColor);

    const elem = document.getElementById("chris");
    if (elem.className == "hero is-danger is-fullheight-with-navbar"){
        elem.className = "hero "+ randColor +" is-fullheight-with-navbar";
    } else {
        elem.className = "hero "+ randColor +" is-fullheight-with-navbar";
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });