var tubelight = function () {
  let btext = document.getElementById("bulddata");
  for (x = 1; x < 6; x++) {
    let bid = document.getElementById("lightid".concat(x));
    if (bid.src.match("lighton")) {
      bid.src = "images/lightoff.png";
      btext.innerHTML = "Light OFF";
    } else {
      bid.src = "images/lighton.png";
      btext.innerHTML = "Light ON";
    }
  }
};



