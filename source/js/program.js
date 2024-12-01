function kepSlide() {
    let kepElem = document.getElementById('slidekep');
    setTimeout(function () {
        kepElem.src = "source/kilatas3.jpg";
    }, 750)
    setTimeout(function () {
        kepElem.src = "source/kilatas2.jpg";
    }, 2250)
    setTimeout(function () {
        kepElem.src = "source/kilatas1.jpg";
    }, 3000)
    setTimeout(function () {
        kepElem.src = "source/kilatas2.jpg";
    }, 4500)
    setTimeout(kepSlide, 4500)
}

if (document.location.pathname.includes("index.html")) {
    kepSlide()
}

if (document.location.pathname.includes("jelszo.html")) {
    document.getElementById(`ellenorzes`).addEventListener(`click`, jelszoEll)
}

function jelszoEll() {
    const jelszo = document.getElementById("jelszobox").value;
    let ujjelszo = jelszo

    const kis = `abcdefghijklmnopqrstuvwxyz`;
    const nagy = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const szam = `0123456789`;
    const spec = `.,!?:@#$%*-_`;
    let vankis = false;
    let vannagy = false;
    let vanszam = false;
    let vanspec = false;
    let baj = false;

    for (let i = 0; i < jelszo.length; i++) {
        const betu = jelszo[i];


        if (kis.indexOf(betu) !== -1) {
            vankis = true;
        }
        if (nagy.indexOf(betu) !== -1) {
            vannagy = true;
        }
        if (szam.indexOf(betu) !== -1) {
            vanszam = true;
        }
        if (spec.indexOf(betu) !== -1) {
            vanspec = true;
        }
    }

    let kiiras = "A jelszónak tartalmaznia kell:<br>"
    if (vankis == false) {
        kiiras = kiiras + " kisbetűt,";
        baj = true;
        ujjelszo = ujjelszo + "a"
    }
    if (vannagy == false) {
        kiiras = kiiras + " Nagybetűt,";
        baj = true;
        ujjelszo = ujjelszo + "A"
    }
    if (vanszam == false) {
        kiiras = kiiras + " Szám0t,";
        baj = true;
        ujjelszo = ujjelszo + "1";
    }
    if (vanspec == false) {
        kiiras = kiiras + " $peciáli$ karaktert (pl: .,!?),";
        baj = true;
        ujjelszo = "!" + ujjelszo;
    }
    kiiras = kiiras.substring(0, (kiiras.length) - 1)

    kiiras = kiiras + ` is <br> Mit szólnál ehhez a jelszóhoz: ${ujjelszo}`

    document.getElementById("valasz").style.display = "inherit"

    if (baj == true) {
        document.getElementById("valasz").innerHTML = `${kiiras}`
    }

    else {
        
        document.getElementById("valasz").innerHTML = `Ez egy szuper ötlet! Be is kerültél a sorsolásunkba!`
    }

}