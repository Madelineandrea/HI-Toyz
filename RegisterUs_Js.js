
function checkValidPassword(password){
    var alphabet = false;
    var number = false;

    for(let i = 0; i < password.length; i++){
        if(isNaN(password[i])){ 
            alphabet = true;
        }
        else{
            number = true;
        }

        if(alphabet && number){
            return true;
        }
    }
    return false;
}

function registerValidation(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;
    var agreement = document.getElementById("agreement");

    if(name.length < 3){
        alert("Invalid name. Name must be at least 3 characters");
        return false;
    }

    else if (phone.length < 10 || phone.length > 15){
        alert("Invalid phone number! Phone number must be between 10 to 15 digits");
        return false;
    }

    else if (email.indexOf("@") === -1 || !email.endsWith(".com")) {
        alert("Invalid email addres! Email must contain at least one '@' and ends with '.com'");
        return false;
    }

    else if(password.length < 8 || !checkValidPassword(password)){
        alert("Invalid password! Password must be at least 8 characters and contains alphanumeric (a-z)(0-9)");
        return false;
    }

    else if(rePassword != password){
        alert("Re-enter password must be the same as initial password");
        return false;
    }

    else if(!agreement.checked){
        alert("Please tick the agreement box");
        return false;
    }

    alert("Member registered successfully!");
    return true;
}