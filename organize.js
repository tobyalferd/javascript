audio = new Audio("audio.mp3.mp3");
function odewole(){
   let imp = document.getElementById("government").value; 
   const numeric = parseInt(government.value); 
   let grade;
if (imp < 30){
grade = "F";
audio.play()
} else if (imp >= 30 ){
grade = "E";
} else if (imp >= 40){
grade = "D";
} else if (imp >= 50 ){
  grade = "C";
} else if (imp >= 60){
  grade = "B";
} else {
grade = "A";      }

    document.getElementById("ese").innerHTML = ` your grade is ${grade}`;

}