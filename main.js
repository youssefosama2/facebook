function formValidatelog(){
    const youremail = document.getElementById("youremail").value;
    const yourPassword = document.getElementById("yourpass").value;
    const erorr = document.getElementById("erorr");
    var text ='';
   if(youremail.indexOf("@") == -1 || youremail.length < 10){
        text ="please Enter valid email";
        erorr.innerHTML= text;
        return false;
    }else if(yourPassword.length < 6){
        text ="please Enter valid password";
        erorr.innerHTML= text;
        return false
    }
    else{
        return true;
    }
}
function formValidate(){
    const yourName = document.getElementById("name").value;
    const youremail = document.getElementById("email").value;
    const yourPassword = document.getElementById("password").value;
    const erorr = document.getElementById("erorr2");
    const select = document.getElementById("sel").style;
    var text ='';
    if(yourName.length < 5){
        text ="please Enter valid name";
        erorr.innerHTML= text;
        return false;
    }else if(youremail.indexOf("@") == -1 || youremail.length < 10){
        text ="please Enter valid email";
        erorr.innerHTML= text;
        return false;
    }else if(yourPassword.length < 6){
        text ="please Enter valid password";
        erorr.innerHTML= text;
        return false
    }
    else{
        return true;
    }
}
function openSec(){
    document.getElementById("mysidSec").style.display ="block";
}
function closeSec(){
    document.getElementById("mysidSec").style.display ="none";
}
