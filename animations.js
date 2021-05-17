function loadingAnims() {
    fades = document.getElementsByClassName("fadeable");
    for(let i = 0; i < fades.length; i++) {
        fadeIn(fades.item(i));
    }

    cards = document.getElementsByClassName("aProject");
    for(let i = 0; i < cards.length; i++) {
        setTimeout(() => {animateIn(cards.item(i));}, i * 250)
    }
}
function fadeIn(x) {
    let id = setInterval(frame, 10);
    let pos = 0;
    function frame() {
        pos += 1.5;
        x.style.opacity = pos + '%';
        if(pos > 100) {
            clearInterval(id);
        }
    }

}
function animateIn(x) {
    let id = setInterval(frame, 10);
    let pos = -1000;
    function frame() {
        if(Math.abs(pos) < 1) {
            x.style.left = '0px';
            clearInterval(id);
        }
        else {
            pos += -(pos / 15);
            x.style.left = pos +'px';
        }
    }
}