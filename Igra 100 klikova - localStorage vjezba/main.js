var btn1 = document.getElementById('btn1');

var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');

var reset = document.getElementById('reset');

var i = 0;
var d = 0;

var player1 = Number(localStorage.getItem("Player1"));
var player2 = Number(localStorage.getItem("Player2"));

if (localStorage.getItem('pobjednik') == '1') {
    setTimeout(function() {
        localStorage.setItem('Player1', ++player1);
    }, 500)
} else if (localStorage.getItem('pobjednik') == '2') {
    localStorage.setItem('Player2', ++player2);
}

btn1.addEventListener('click', () => {
    i++;
    score1.innerHTML = i;
    if (i == 20) {
        localStorage.setItem('pobjednik', '1');
        if (localStorage.getItem('pobjednik') == '1') {
            alert('Ovu igru je pobijedio Player 1');
            window.location.reload();
        }
    }
}, true);

addEventListener('keyup', () => {
    d++;
    score2.innerHTML = d;
    if (d == 20) {
        localStorage.setItem('pobjednik', '2');
        if (localStorage.getItem('pobjednik') == '2') {
            alert('Ovu igru je pobijedio Player 2');
            window.location.reload();
        }

    }
}, true);

// alert('Player 1 ima ' + player1 + ' pobjeda do sad!');
// alert('Player 2 ima ' + player2 + ' pobjeda do sad!');

var winsp1 = document.getElementById('winsp1');
var winsp2 = document.getElementById('winsp2');
// wins.innerHTML = 'Player 1 ima ' + player1 + ' pobjeda do sad!' < br > 'Player 2 ima ' + player2 + ' pobjeda do sad!'
winsp1.innerHTML = 'Player 1 ima ' + player1 + ' pobjeda do sad!';
winsp2.innerHTML = 'Player 2 ima ' + player2 + ' pobjeda do sad!';

reset.addEventListener('click', function() {
    i = 0;
    d = 0;
    score1.innerHTML = "";
    score2.innerHTML = "";
});