function validate() {
    let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let name = document.getElementById('name').value;
    if (!regName.test(name)) {
        alert('Please enter your correct full name!');
        document.getElementById('name').focus();
        return false;
    } else {
        alert('Your name is correct.');
        return true;
    }
}


function ShowAlert() {
    let email = document.getElementById('txtEmailId');
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
    else {
        alert("Thanks.");
        document.getElementById('txtEmailId').value = "";
    }
}

function submitButtonClick(event) {
    event.preventDefault();
}