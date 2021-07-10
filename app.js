let myKeys = document.querySelectorAll(".key");

for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function () {
        playSound(myKeys[x].innerHTML.toLowerCase());

    });
}
function playSound (key) {
    switch (key) {
        case 'c':
            var snd = new Audio('sound/do.mp3');
            snd.play();
            break;
        case 'd':
            var snd = new Audio('sound/re.mp3');
            snd.play();
            break;
        case 'e':
            var snd = new Audio('sound/mi.mp3');
            snd.play();
            break;
        case 'f':
            var snd = new Audio('sound/fa.mp3');
            snd.play();
            break;
        case 'g':
            var snd = new Audio('sound/sol.mp3');
            snd.play();
            break;
        case 'a':
            var snd = new Audio('sound/la.mp3');
            snd.play();
            break;
        case 'b':
            var snd = new Audio('sound/ti.mp3');
            snd.play();
            break;
        case 'k':
            var snd = new Audio('sound/doh.mp3');
            snd.play();
            break;
        default:
            console.log(key);
        
    }
}
document.addEventListener('keydown', function (btn) {
    playSound(btn.key.toLowerCase());

    let pressedKey = btn.key.toLowerCase();

    for (let x = 0; x < myKeys.length; x++) {
        myKeys[x].classList.remove('activated');
    }
    for (let x = 0; x < myKeys.length; x++) {
        if (pressedKey == myKeys[x].innerHTML.toLowerCase()) {
            myKeys[x].classList.add('activated');
        }
    }

})