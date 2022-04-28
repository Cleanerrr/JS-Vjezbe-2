let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');

const animateCrashRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}

const animateHiHatTopClosed = () => {
    hiHatTop.style.top = '171px';
}

window.addEventListener('keydown', (event) => {
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`);
    let audio = document.querySelector(`audio[data-key="${code}"]`);
    if (!keyElement) return;
    audio.currentTime = 0;
    audio.play();

    switch (code) {
        case 69:
        case 82:
            animateCrashRide();
            break;
        case 73:
        case 75:
            animateHiHatTopClosed();
            break;
    }
    keyElement.classList.add('playing');
});
const removeCrashRideTransition = e => {
    if (e.propertyName !== 'transform') return;
    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
}

const removeHiHatTopTransition = e => {
    if (e.propertyName !== 'top') return;
    e.target.style.top = '166px';
}

const removeKeyTransition = e => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

let drumKeys = document.querySelectorAll('.key');

drumKeys.forEach(key => {
    key.addEventListener("transitionend", removeKeyTransition);

});

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);