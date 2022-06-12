const lis = document.querySelectorAll('li');

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', (e) => {
        if (e.target) {
            let text = lis[i].innerText;
            let s = document.createElement('s');
            let textNode = document.createTextNode(text);
            s.appendChild(textNode);
            lis[i].appendChild(s);
            s.parentNode.removeChild(s.previousSibling);
        }
    });
}

