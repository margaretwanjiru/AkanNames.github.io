var string = function akanname() {
    var date=document.getElementByid("date").value;
    var month =document.getElementByid("month").value;
    var year =document.getElementByid("year").value;
    var dob =new Date ("date" + "/" +"month" + "/" +"year");
    var birthday =dob.getDay();
    var genderM =document.getElementByid("male");
    var genderF =document.getElementByid("female");
    var returns=document.getElementByid("return-value");
    var weekdays=("Monday", "Tuesday" ,"Wednesday", "Thursday" ,"Friday", "Saturday", "Sunday");
    var maleNames =("Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi");
    var femaleNames=("Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" , "Akosua")
    
    if (date < 1 || date > 31) {
        alert("invalid date");
        return false;
    }
    else if (month < 1 || month > 12 || month == 2 && day > 29 ) {
        alert ("invalid month");
        return false;
    }
    else if (year <1930 || year > "" ) {
        alert ("invalid year");
        return false;
    }
    else {
        return true; 
    }
}
