// function akanName() {
//     var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//     var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//     var century = parseInt(document.getElementByid("CC").value);
//     var date = parseInt(document.getElementByid("DD").value);
//     var month = parseInt(document.getElementByid("MM").value);
//     var year = parseInt(document.getElementByid("YY").value);

//     function invalid(day, month, year) {
//         if (date < 1 || date > 31) {

//             alert("Day entered is Invalid");
//             // return false;
//         } else if (month < 1 || month > 12 || month == 2 && day > 29) {
//             alert("Month entered is invalid");
//             // return false;
//         } else {
//             return true;
//         }
//     }

//     var day = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;


//     var gender = document.inputSelector('input[name="gender"]:checked').value;

//     function akanName() {
//         if (gender == 0) {
//             if (day === 0) {
//                 alert("Hey" + maleNames + " you were born on a Sunday");
//             } else if (day === 1) {
//                 alert("Hey" + maleNames + "you were born on a Monday");
//             } else if (day === 2) {
//                 alert("Hey" + maleNames + "you were born on a Tuesday");
//             } else if (day === 3) {
//                 alert("Hey" + maleNames + "you were born on a Wednesday");
//             } else if (day === 4) {
//                 alert("Hey" + maleNames + "you were born on a Thursday");
//             } else if (day === 5) {
//                 alert("Hey" + maleNames + "you were born on a Friday");
//             } else if (day === 6) {
//                 alert("Hey" + maleNames + "you were born on a Saturday");
//             }
//         } else {
//             if (day === 0) {
//                 alert("Hey" + femaleNames + "you were born on a Sunday");
//             } else if (day === 1) {
//                 alert("Hey" + femaleNames + "you were born on a Monday");
//             } else if (day === 2) {
//                 alert("Hey" + femaleNames + "you were born on a Tuesday");
//             } else if (day === 3) {
//                 alert("Hey" + femaleNames + "you were born on a Wednesday");
//             } else if (day === 4) {
//                 alert("Hey" + femaleNames + "you were born on a Thursday");
//             } else if (day === 5) {
//                 alert("Hey" + femaleNames + "you were born on a Friday");
//             } else if (day === 6) {
//                 alert("Hey" + femaleNames + "you were born on a Sartuday");
//             }
//         }
//     }
// }



function getName() {

    var year = document.getElementById("YY").value;
    var month = document.getElementById("MM").value;
    var day = document.getElementById("DD").Value;
    var date = new Date(`${year}-${month}-${day}`);
    var dob = date.getDay();
    var male = document.getElementById("male");
    var female = document.getElementById("female");

    var Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    if (male.checked == false && female.checked == false) {
        alert("kanugu");
    } else if (male.checked == true) {
        alert("Hey " + maleNames[dob] + " is your Akan name");
    } else {
        alert("Hey " + femaleNames[dob] + "is your Akan name");
    }
}