var counter = 0;
var numBoxes = 3;


function toggle(showHideDiv) {
 var ele = document.getElementById(showHideDiv + counter);
 if(ele.style.display == "block") {
  ele.style.display = "none";
  }
  else {
    ele.style.display = "block";
  }
  if(counter == numBoxes) {
    //no more hints to display; disable button
    document.getElementById("hint").disabled = true;
  }
}

