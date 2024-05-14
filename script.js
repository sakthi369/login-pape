function vfun(){5
var uname=document.forms["myform"]["uname"].value;
var upswd=document.forms["myform"]["upswd"].value;

if(uname==null || uname==""){
    document.getElementById("errorBox").innerHTML="Enter the user name";
    return false;
}

if(upswd==null || upswd==""){
    document.getElementById("errorBox").innerHTML="Enter a password";
    return false;
}

if(uname !='' && upswd !=''){
    alert("Login Successfully")
}
}


//from 2

function vfun1(){5
    var uname1=document.forms["myform2"]["uname1"].value;
    var email1=document.forms["myform2"]["emial1"].value;
    var upswd1=document.forms["myform2"]["upswd1"].value;
    var upswd2=document.forms["myform2"]["upswd2"].value;

    if(uname1==null || uname1==""){
        document.getElementById("errorBox").innerHTML="Enter the user name";
        return false;
    }
    if(email1==null || email1==""){
        document.getElementById("errorBox").innerHTML="Enter the email id";
        return false;
    }
    if(upswd1==null || upswd1==""){
        document.getElementById("errorBox").innerHTML="Enter the  password";
        return false;
    }
    if(upswd2==null || upswd2==""){
        document.getElementById("errorBox").innerHTML="Enter the  confirm password";
        return false;
    }

    if(upswd1 != upswd2){
        document.getElementById("errorBox").innerHTML="Password dont match";
        return false;
    }

    if(uname1 !='' && upswd1 !='' && upswd2 !='' && email1 !=''){
        alert("Register successfull");
    }
     
}