var pintu = document.getElementById("gambar")

pintu.onclick = function(){
    // Takdir()
    var random = Math.floor(Math.random() * 3 + 1)

    if(random == 1){
        location.href= "gambar/kocheng.jpg"
    }
    else if(random == 2){
        location.href ="./index.html"
    }
    else if(random == 3){
        location.href ="gambar/3.jpg"
    }
}
