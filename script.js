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