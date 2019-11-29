function akanname() 
{
    var maleNames =["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames =["Akosua", "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var century =parseInt(document.getElementByid("CC").value);
    var date=parseInt(document.getElementByid("DD").value);
    var month =parseInt(document.getElementByid("MM").value);
    var year =parseInt(document.getElementByid("YY").value);

    var gender=document.genderSelector('input[name="gender"]:checked').value;
   
   var day = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
   
   
   if (gender ==1) {
       if (day ===0){
           alert("Hey + 'maleName + you were born on a Sunday");
       }
       else if (day ===1) {
        alert("Hey + 'maleName + you were born on a Monday");
       }
       else if (day ===2) {
        alert("Hey + 'maleName + you were born on a Tuesday");
       } 
       else if (day ===3) {
        alert("Hey + 'maleName + you were born on a Wednesday");
       }
       else if (day ===4) {
        alert("Hey + 'maleName + you were born on a Thursday");
       }
       else if (day ===5) {
        alert("Hey + 'maleName + you were born on a Friday");
       }
       else if (day ===6) { 
        alert("Hey + 'maleName + you were born on a Saturday");
       }
    }
    else {
        if (day ===0) {
            alert("Hey + 'femaleName + you were born on a Sunday");
        }
        else if (day===1) {
            alert("Hey + 'femaleName + you were born on a Monday");
        }
        else if (day ===2) {
            alert("Hey + 'femaleName + you were born on a Tuesday");
        }
        else if (day ===3) {
            alert("Hey + 'femaleName + you were born on a Wednesday");
        }
        else if (day===4) {
            alert("Hey + 'femaleName + you were born on a Thursday");
        }
        else if (day===5) {
            alert("Hey + 'femaleName + you were born on a Friday");
        }
        else if (day===6) {
            alert("Hey + 'femaleName + you were born on a Sartuday");
        }
    }
   }
