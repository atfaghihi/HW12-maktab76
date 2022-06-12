// let welcome = document.querySelector('html');
let welcome = document.getElementById('elemId');
// console.log(welcome);
welcome.addEventListener('click', (e) => {
    if (e.target) {
        alert('goodby');
        // console.log('mouse is in:', e.clientX , e.clientY , 'on this page.');
    }
});

document.addEventListener("mousemove", (e) => {
    let mousex = e.clientX;
    let mousey = e.clientY;
    console.log([mousex, mousey]);
});