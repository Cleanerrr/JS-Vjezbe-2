function semafor() {
    var boje = document.getElementsByClassName('boje');
    boje[0].style.backgroundColor = "red";
    boje[1].style.backgroundColor = "grey";
    boje[2].style.backgroundColor = "grey";

    function changeToYellow() {
        boje[1].style.backgroundColor = "yellow";
    }

    function changeToGreen() {
        boje[0].style.backgroundColor = "grey";
        boje[1].style.backgroundColor = "grey";
        boje[2].style.backgroundColor = "green";
    }
    var zuto = setTimeout(changeToYellow, 3000);
    var zeleno = setTimeout(changeToGreen, 5000);
    var naPocetak = setInterval(semafor, 8000);

}
semafor();