const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var dateOfBirth = document.getElementById('date').value;
var monthOfBirth = document.getElementById('month').value;
var yearOfBirth = document.getElementById('year').value
var maleGender = document.getElementById('mgender').value;
var femaleGender = document.getElementById('fgender').value;

function validate(){
    var dateOfBirth = document.getElementById('date').value;
    var monthOfBirth = document.getElementById('month').value;
    var yearOfBirth = document.getElementById('year').value
    function akanNames(){
        var add = parselnt(document.getElementBy Id('day').value);
        var mm = parseInt(document.getElementById('month').value);
        var year = ducument.getElementById('year').value;
        var yy = parseInt(year.substr(2,4));
        var cc = parseInt(year.substr(0,2));
        var maleGender = document.getElementById('year').value;
        var femaleGender = document.getElementById('mgender').vaue;
        var d=parseInt(((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
        
        if(add<=0||dd>31||dd==""){
            alert("Enter a valid date!")
        }
        else if (mm<=o||mm > 12|| mm == 2 && dd > 29 ||mm ==""){
            alert("Enter a valid month")
        }
        else if(year <=0 || year ==""){
            alert("Enter a valid year")
        }


        






    // var femaleGender = document.getElementById('fgender').value;
    if(dateOfBirth ===""|| dateOfBirth <=0 || dateOfBirth > 31){
    alert("Invalid! Please Enter date of birth between the range of 1 - 31");
   
    return false;
    }

    else if(monthOfBirth ===""|| monthOfBirth <=0 || monthOfBirth > 12){
    alert("Invalid! Please Enter month of birth between the range of 1 - 12");
    return false;
    }
    else if(yearOfBirth ===""){
        alert("Invalid! Please Enter year of birth.");
        return false;
    }
    else if(gender == null){
        alert("Please select gender");
        return false;
    }
    else{ return true;}
}

function dataInput(){
    var birthDate = dateOfBirth;
    var birthMonth = monthOfBirth;
    var birthYear = yearOfBirth;
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
    
    console.log(days);
}

    // d= (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;
    

var fullDate = [];
fullDate.push(dateOfBirth, monthOfBirth, yearOfBirth);
// console.log(fullDate);
// function finder(){
//     // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
//     // var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  
// }
    // var d = new Date("(((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7");
    // var day = days[d.getDay()];
    // console.log(day);
