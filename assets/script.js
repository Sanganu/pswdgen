var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","]","[",";",":","<",">",",",".","?"]

var userdataarray = [];
var validSpecials = false;
var validNumber = false;
var validLength = false;
var validLower = false;
var validUpper = false;

function checkForPassword(){
    console.log("Check pass");
    var userdata = document.getElementById("userentry").value;
    for(let i=0;i<userdata.length;i++){
        userdataarray.push(userdata[i])
    }
    if (userdata.length > 8 && userdata.length < 255){
        validLength = true;
        console.log("Valid Length")
    }
    for(let i =0;i < specialCharacters.length;i++){
        if(userdataarray.indexOf(specialCharacters[i]) > -1){
            validSpecials = true;
            console.log("Valid Special Characters");
        }
    }
    for(let i=0;i<userdata.length;i++){
        switch(true){
            case userdata.charCodeAt(i) >= 65 && userdata.charCodeAt(i) <=90:
                 validUpper = true;
                 break;
            case userdata.charCodeAt(i) >= 97 && userdata.charCodeAt(i) <= 122:
                  validLower = true;
                  break;
            case  userdata.charCodeAt(i) >= 48 && userdata.charCodeAt(i) <= 57:
                 validNumber = true;   
        }
    }

    console.log(validLower,validUpper,validNumber);
}
