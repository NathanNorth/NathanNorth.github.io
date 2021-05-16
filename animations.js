function loadingAnims() {
    items = document.getElementsByClassName("aProject");
    console.log(items.length);
    for(let i = 0; i < items.length; i++) {
        setTimeout(() => {animateIn(items.item(i));}, i * 250)
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