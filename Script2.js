

var Name = document.forms['Contact_Form']['Fname'];
var Phoneno = document.forms['Contact_Form']['phone'];


var words = /^[a-zA-Z ]*$/;
var phone = /^\d{10}$/;


function ContactVal(){
    if(!Name.value.match(words))
    {
        alert("Username Must Contain only alphabets")
        return false;
    }
    else if(!Phoneno.value.match(phone))
    {
        alert("Not a Valid Phone Number");
        return false;
    }
    else{
        alert("🏋️‍♂️ WELCOME TO THE JAYESH FITNESS ! 🏋️‍♂️")
        return true;
    }
}