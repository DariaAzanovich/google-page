"use strict"

function showAppsPopup(event) {
  const popup = document.getElementById("popup");
  popup.className = popup.className.includes("closed-popup") ? "popup opened-popup" : "popup closed-popup";
  event.stopPropagation();
}

document.onclick = function(event) {
  const popup = document.getElementById("popup");
  if (!popup.contains(event.target)) {
    popup.className = "popup closed-popup";
  }
}
