
const targetDiv = document.getElementById("more-brand");
const btn = document.getElementById("more-btn");
btn.onclick = function () {
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "flex";
  } else {
    targetDiv.style.display = "none";
  }
};
