var string = function name() {
    var date=document.getElementByid("date").value;
    var year =document.getElementByid("year").value;
    var month =document.getElementByid("month").value;
    var days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dob =date.getDay();
    var male=document.getElementByid("male");
    var female=document.getElementbyid("female");
    var maleNames = ["Kwasi", "Kwadwo", "Kwaku", "Kwabena", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "AKua", "Yaa", "Afua", "Ama"];
    var result=document.getElementbyid(alert);
    var maleNames = ["Kwasi", "Kwadwo", "Kwaku", "Kwabena", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "AKua", "Yaa", "Afua", "Ama"];
    if (year == "" || year.length < 4 || year.length > 4){
        alert("Hey you need to enter a valid year!");
    }
    else if (month < 0 || month > 12 ){
        alert("Hey you need to enter a valid month!");
    }
    else if( dayOfMonth < 0 || dayOfMonth >31) {
        alert("Hey you need to re-enter a valid day!");
    }
    else if (male.checked == false && female.checked == false){
        alert("You need to specify your gender!");
    }
    else if (male.checked == true){
        result.innerHTML = "Hey " + maleNames[birthDay] +  ",this is your Ghanaian name.";
    } 
    else if (female.checked == true){
        result.innerHTML = "Hey " + femaleNames[birthDay] +  ",this is your Ghananian name.";
    }
}

}