

const gomb1 = document.getElementById('aktiv');


// ide még egy vérakozást be kell rakni
gomb1.addEventListener('mouseenter', () => {
    gomb1.style.backgroundImage = `url('source/icon.png')`;
});

gomb1.addEventListener('mouseleave', () => {
    gomb1.style.backgroundImage = ``;
});


// Remove the background on mouse leave
//   button.addEventListener('mouseleave', () => {
//     button.style.backgroundImage = '';
//   });