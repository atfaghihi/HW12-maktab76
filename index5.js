const div = document.getElementById('Buttons');

div.addEventListener('click', function handleClick(event) {
  console.log(event.target.parentElement);
});

const btn = document.querySelectorAll('button');
for (let i = 0; i < 2; i++) {
  btn[i].addEventListener('click', function handleClick(event) {
    if (btn[i].className === "buttonClass") {
      alert("buttonClass");
    } else {
      alert(event.target.parentElement);
    }
  });
}