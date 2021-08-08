var tubelight = function () {
  let bteit = document.getElementById("bulddata");
  for (let i = 1; i < 6; i++) {
    let bid = document.getElementById("lightid".concat(i));
    if (bid.src.match("lighton")) {
      bid.src = "images/lightoff.png";
      bteit.innerHTML = "Light OFF";
    } else {
      bid.src = "images/lighton.png";
      bteit.innerHTML = "Light ON";
    }
  }
};



