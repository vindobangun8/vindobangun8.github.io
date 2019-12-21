
var modal = document.getElementById("myModal");
var choice = document.getElementById("pilihanc");
var span = document.getElementsByClassName("close")[0];

choice.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

function fungsi2(){
  location.href = "gambar/sad1.png"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}