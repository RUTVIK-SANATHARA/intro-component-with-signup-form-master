let first = document.getElementById('first');
let last = document.getElementById('last');
let email = document.getElementById('email');
let pw = document.getElementById('Password');
let submit = document.getElementById('submit');

let validname = false;
let validlast = false;
let validemail = false;
let validpw = false;

first.addEventListener('blur', () => {
    console.log("first");
    if (first.value == '') {
        document.getElementById('p1').textContent = 'First name cannot be empty';
        document.querySelector('.field-1').classList.add('invalid');
        validname = false;
        first.style.borderColor = "hsl(0, 100%, 74%) ";
    } else {
        document.getElementById('p1').textContent = ' ';
        document.querySelector('.field-1').classList.remove('invalid');
        validname = true;
        first.style.borderColor = "black";
    }
})

last.addEventListener('blur', () => {
    console.log("last");
    if (last.value == '') {
        document.getElementById('p2').textContent = 'Last name cannot be empty';
        document.querySelector('.field-2').classList.add('invalid');
        validlast = false;
        last.style.borderColor = "hsl(0, 100%, 74%) ";
    } else {
        document.getElementById('p2').textContent = ' ';
        document.querySelector('.field-2').classList.remove('invalid');
        validlast = true;
        last.style.borderColor = "black";
    }
})
email.addEventListener('blur', () => {
    console.log("email");
    email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    str = email.value
    if (str.match(email_pattern)) {
        document.getElementById('p3').textContent = '';
        document.querySelector('.field-3').classList.remove('invalid');
        validemail = true;
        email.style.borderColor = "black";
    } else {
        document.getElementById('p3').textContent = 'Looks like this is not an email ';
        document.querySelector('.field-3').classList.add('invalid');
        validemail = false;
        email.style.borderColor = "red";

    }
})
pw.addEventListener('blur', () => {
    console.log("pw");
    if (pw.value == '') {
        document.getElementById('p4').textContent = 'Password cannot be empty';
        document.querySelector('.field-4').classList.add('invalid');
        validpw = false;
    } else {
        document.getElementById('p4').textContent = ' ';
        document.querySelector('.field-4').classList.remove('invalid');
        validpw = true;
        pw.style.borderColor = "black";
    }
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validname && validlast && validpw && validemail) {
        //first
        document.getElementById('p1').textContent = ' ';
        document.querySelector('.field-1').classList.remove('invalid');
        //last
        document.getElementById('p2').textContent = ' ';
        document.querySelector('.field-2').classList.remove('invalid');
        //email
        document.getElementById('p3').textContent = ' ';
        document.querySelector('.field-3').classList.remove('invalid');
        //pw
        document.getElementById('p4').textContent = ' ';
        document.querySelector('.field-4').classList.remove('invalid');
        pw.style.borderColor = "black";
        last.style.borderColor = "black";
        first.style.borderColor = "black";
        email.style.borderColor = "black";
    } else {
        //first
        document.getElementById('p1').textContent = 'First name cannot be empty';
        document.querySelector('.field-1').classList.add('invalid');
        //last
        document.getElementById('p2').textContent = 'Last name cannot be empty';
        document.querySelector('.field-2').classList.add('invalid');
        //email
        document.getElementById('p3').textContent = 'Looks like this is not an email ';
        document.querySelector('.field-3').classList.add('invalid');
        //pw
        document.getElementById('p4').textContent = 'Password cannot be empty';
        document.querySelector('.field-4').classList.add('invalid');

        pw.style.borderColor = "red";
        last.style.borderColor = "red";
        first.style.borderColor = "red";
        email.style.borderColor = "red";
    }
})