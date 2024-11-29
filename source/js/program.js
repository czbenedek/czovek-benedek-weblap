document.getElementById(`ellenorzes`).addEventListener(`click`, jelszoEll)

function jelszoEll() {
    const jelszo = document.getElementById("jelszobox").value;

   
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

    let kiiras = "A jelszónak tartalmaznia kell"
    if (vankis == false) {
        kiiras = kiiras + " kisbetűt,";
        baj=true
    }
    if (vannagy == false) {
        kiiras = kiiras + " Nagybetűt,";
        baj=true
    }
    if (vanszam == false) {
        kiiras = kiiras + " 5z4`m0t,";
        baj=true
    }
    if (vanspec == false) {
        kiiras = kiiras + " $pec|áL|$ karaktert (pl: .,!?),";
        baj=true
    }
    kiiras = kiiras.substring(0,(kiiras.length)-1)
   
    kiiras = kiiras + " is"


        if (baj==true) {


            alert(`${kiiras}`)
        }

        else {
            alert(`Köszönjük a részvételt`)
        }

}