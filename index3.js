const div = document.querySelector('div');
div.addEventListener('click', (e) => {
    if (e.target) {
        let divNode = div.nodeName;
        alert(divNode);
    }
}, { capture: false });

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    if (e.target) {
        e.stopPropagation();
        let btnNode = btn.nodeName;
        alert(btnNode);
    }
});