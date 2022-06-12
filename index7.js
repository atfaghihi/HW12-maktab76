let mouse = document.getElementById('container');

mouse.onmousemove = function event_function(e) {
    if (e.target) {
        let x = e.clientX;
        let y = e.clientY;
        let location = document.querySelector('span');
        location.innerText = [x, y];
    }
}