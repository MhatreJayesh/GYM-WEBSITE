
//----------------  Responsive Website code  -----------------------

// Navbar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



// Joining Form Validatioin

// Name and Phone Validation

var Firstname = document.forms['Normal_Form']['Fname'];
var Lastname = document.forms['Normal_Form']['Lname'];
var Phoneno = document.forms['Normal_Form']['phone'];


var Letters = /^[a-zA-Z]*$/;
var phone = /^\d{10}$/;


function Validation() {
    if (!Firstname.value.match(Letters)) {
        alert("Username Must Contain only alphabets")
        return false;
    }
    else if (!Lastname.value.match(Letters)) {
        alert("Username Must Contain only alphabets")
        return false;
    }
    else if (!Phoneno.value.match(phone)) {
        alert("Not a Valid Phone Number");
        return false;
    }
    else {
        alert("🏋️‍♂️ WELCOME TO THE JAYESH FITNESS ! 🏋️‍♂️")
        return true;
    }
}
