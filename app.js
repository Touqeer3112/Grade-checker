var english = +prompt("Enter your English marks");
var math = +prompt("Enter your Math marks");
var science = +prompt("Enter your Science marks");
var urdu = +prompt("Enter your Urdu marks");
var pakStudies = +prompt("Enter your PakStudies marks");


var totalMarks = english + math + science + urdu + pakStudies;

var percentage = totalMarks / 500 * 100;

if (english <= 100 && math <= 100 && science <= 100 && pakStudies <= 100 && urdu <= 100) {
  if (percentage <= 49 || english <= 49 || urdu <= 49 || pakStudies <= 49 || science <= 49 || math <= 49) {
    var Grade = ("Fail");
    alert(Grade);
  }
  else if (percentage <= 100 && percentage >= 90) {
    Grade = ("A+");
    alert(Grade + "Percentage: " + percentage);
  }
  else if (percentage < 90 && percentage >= 80) {
    Grade = ('A');
    alert(Grade + "Percentage: " + percentage);
  }
  else if (percentage < 80 && percentage >= 70) {
    Grade = ('B');
    alert(Grade + "Percentage: " + percentage);

  } else if (percentage < 70 && percentage >= 60) {
    Grade = ('C');
    alert(Grade + "Percentage: " + percentage);
  }
  else if (percentage < 60 && percentage >= 50) {
    Grade = ('D');
    alert(Grade + "Percentage: " + percentage);
  }

} else {
  Grade = ('yourr Grade is Not Found ,Write Correct Number');
  alert(Grade + "Percentage: " + percentage);
};











// if (percentage <= 49 || English <= 49 || Math <= 49 || Science <= 49 || Urdu <= 49 || PakStudies <= 49){
// alert("you are falied batter luck next time" + "percentage" + percentage);
// }
// else if (percentage >= 90) {
//   alert("you have a got an A grade" + "percentage" + percentage);
// }
// else if (percentage < 89 && percentage >= 70 ) {
//     alert("you have a got an B grade" + "percentage" + percentage);
// }
// else if (percentage < 69 && percentage >= 60 ) {
//     alert("you have a got an C grade" + "percentage" + percentage);
// }
// else if (percentage < 59 && percentage >= 50 ) {
//     alert("you have a got an D grade" + "percentage" + percentage);
// }
// else{
//     alert("error!")
// }

// var totalNumbers = 500;
// var obtainedNumbers = English + Maths + Science + Urdu + PakStudies;
// var percentage = (obtainedNumbers*100)/totalMarks;
//  var Grade;