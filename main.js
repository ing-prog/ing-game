"use strict";

window.onload = function() {
  let playBtn = document.getElementById("playBtn");
  let resultsBtn = document.getElementById("resultsBtn");
  let aboutBtn = document.getElementById("aboutBtn");

  playBtn.onclick = function () {
      window.location = "play.html";
  };

  resultsBtn.onclick = function () {
      window.location = "results.html";
  };

  aboutBtn.onclick = function () {
      window.location = "about.html";
  };
};