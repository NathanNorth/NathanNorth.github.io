function loadingAnims() {
    let fades = document.getElementsByClassName("fadeable");
    for(let i = 0; i < fades.length; i++) {
        fadeIn(fades.item(i));
    }

    let cards = document.getElementsByClassName("aSlide");
    for(let i = 0; i < cards.length; i++) {
        animateIn(cards.item(i), i);
    }

    let texts = document.getElementsByClassName("writable");
    for(let i = 0; i < texts.length; i++) {
        setTimeout(() => {writeIn(texts.item(i));}, i * 250)
    }

    let lameTexts = document.getElementsByClassName("writableNR");
    for(let i = 0; i < lameTexts.length; i++) {
        writeInNoRando(lameTexts.item(i), i);
    }
}
function writeIn(x) {
    let element = x;
    let original = x.innerHTML;
    let pos = 0;
    let id = setInterval(async () => {
        pos++;
        if (pos === 21) {
            clearInterval(id);
        }
        else {
            let chars = Math.round((original.length * pos) / 20);
            let arr = original.split(" "); //remove spaces
            arr = arr.reduce((a, b) => a + b, "").split(""); //reduce to string then re-split
            //random int -1 or 1
            function randomSort() {
                return Math.round(Math.random()) - 0.5;
            }

            let shuffled = arr.sort(randomSort).reduce((a, b) => a + b, "");
            if (chars === 1) shuffled += shuffled;
            //console.log(chars + " - " + (original.length - chars))
            //console.log(original.slice(0, chars) + shuffled.slice(0, original.length - chars));

            element.innerHTML = "&nbsp" + original.slice(0, chars) + shuffled.slice(0, original.length - chars) + "&nbsp";
        }
    }, 60);
}
function writeInNoRando(x, y) {
    let element = x;
    let original = x.innerHTML;
    element.innerHTML = "&nbsp";
    setTimeout(() => {doTheThing();}, y * 250);
    function doTheThing() {
        let pos = 0;
        let id = setInterval(async () => {
            pos++;
            if (pos === 21) {
                clearInterval(id);
            }
            else {
                let chars = Math.round((original.length * pos) / 20);
                let arr = original.split(" "); //remove spaces
                arr = arr.reduce((a, b) => a + b, "").split(""); //reduce to string then re-split
                //random int -1 or 1
                function randomSort() {
                    return Math.round(Math.random()) - 0.5;
                }

                let shuffled = "".split("");
                if (chars === 1) shuffled += shuffled;
                //console.log(chars + " - " + (original.length - chars))
                //console.log(original.slice(0, chars) + shuffled.slice(0, original.length - chars));

                element.innerHTML = "&nbsp" + original.slice(0, chars) + shuffled.slice(0, original.length - chars) + "&nbsp";
            }
        }, 30);
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
function animateIn(x, y) {
    x.style.visibility = 'hidden';
    setTimeout(() => {doTheThing(x);}, y * 250);
    function doTheThing(x) {
        fadeIn(x);
        let id = setInterval(frame, 10);
        let pos = 1000;
        function frame() {
            if(Math.abs(pos) < 1) {
                x.style.left = '0px';
                clearInterval(id);
            }
            else {
                pos -= (pos / 15);
                x.style.left = pos +'px';
                x.style.visibility = 'visible';
            }
        }
    }

}