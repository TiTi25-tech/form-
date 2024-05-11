function validation(){
    if(document.Formfill.Username.value=""){
        document.getElementById("result").innerHTML = "Enter Username"
        return false;
    }
    else if(document.FormfillormFill.Username.value.length<6){
        document.getElementById("result").innerHTML = "AtLeast Six Letter"
        return false;
    }
    else if(document.FormfillormFill.Username.Email.Value=""){
        document.getElementById("result").innerHTML = "Enter your Email"
        return false;
    }
    else if(document.FormfillormFill.Password.value=""){
        document.getElementById("result").innerHTML = "Enter your Password"
        return false;
    }
    else if(document.FormfillormFill.Password.value.length<6){
        document.getElementById("result").innerHTML = "Password must be greater than 6-digits"
        return false;
    }
    else if(document.formFill.cPassword.value=""){
        document.getElementById("result").innerHTML = "Enter Confirm Password"
        return false;
    }
    else if(document.formFill.cPassword.value !==document.Formfill.Password.value){
        document.getElementById("result").innerHTML = "Password doesn't match"
        return false;
    }
    else if(document.formFill.Password.value ==document.Formfill.cPassword.value){
       popup.classList.add("open-slide")
        return false;
    }
}
var popup = document.getElementById('popup');
function ClosesSlide(){
    popup.classList.remove("open-slide")
}