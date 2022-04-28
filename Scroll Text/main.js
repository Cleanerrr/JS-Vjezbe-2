function makeText() {
    var ime = "Elvir";
    var prezime = "Huseinspahic";

    var imeSlova = ime.split('');
    var prezimeSlova = prezime.split('');

    var imeIPrezime = [imeSlova, prezimeSlova];
    return imeIPrezime;
}

function sleep() {
    i++;
    if (i > 1) {
        i = 0;
        ar = makeText();
    }
    scroll.innerHTML = "";
    run();
}

var ar = makeText();

var scroll = document.getElementById('scroll');
var loop;

var i = 0;

function run() {
    if (ar[i].length > 0) {
        scroll.innerHTML += ar[i].shift();
        loop = setTimeout(run, 200);
    } else {
        var sl = setTimeout(sleep, 2000);
    }
}
run();