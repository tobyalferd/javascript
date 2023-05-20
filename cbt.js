let arry = [
    {
        Question: "when did albert einstein die",
        a: "1956",
        b: "1946",
        c: "1958",
        d: "1954",
        correct_answer: "b"
    },
    {
        Question: "2x + 5 = 15, find x",
        a: "3",
        b: "7",
        c: "5",
        d: "4",
        correct_answer: "c"
    },
    {
        Question: "what theory was albert einstein popularly known for",
        a: "theory of relativity",
        b: "yang and mills experiment",
        c: "laws of motion",
        d: "law of gravity",
        correct_answer: "a"
    },
    {
        Question: "who will win the upcoming presidential election",
        a: "bola ahmed tinubu",
        b: "Atiku Abubakar",
        c: "Peter Obi",
        d: "Adesanya boluwatife",
        correct_answer: "b"
    },
    {
        Question: "I have a beginning but i have no end, what am i",
        a: "rain",
        b: "circle",
        c: "time",
        d: "law",
        correct_answer: "b"
    },
    {
        Question: "i am something every law has me. what am i",
        a: "theory",
        b: "principle",
        c: "expection",
        d: "equation",
        correct_answer: "c"
    },
    {
        Question: "who is the smartest",
        a: "bola",
        b: "ewa",
        c: "tinu",
        d: "sodiq",
        correct_answer: "d"
    },
    {
        Question: "who is the father of relativity",
        a: "albert einstein",
        b: "issac newton",
        c: "niel bhor",
        d: "nikola tesla",
        correct_answer: "a"
    },
    {
        Question: "laws of motion were propanded by who?",
        a: "thomas ederson",
        b: "niel bhor",
        c: "issac newton",
        d: "albert einstein",
        correct_answer: "c"
    },
    {
        Question: "when did nigeria become a republic",
        a: "1956",
        b: "1963",
        c: "1960",
        d: "1954",
        norrect_answer: "b"
    },
    {
        Question: "when did nigeria gain independence",
        a: "1956",
        b: "1963",
        c: "1960",
        d: "1954",
        norrect_answer: "c"
    },
    {
        Question: "who scored 91 goals in a calender year",
        a: "cristiano ronaldo",
        b: "lionel messi",
        c: "thomas muller",
        d: "harry kane",
        norrect_answer: "c"
    }

]
let show = document.getElementById("screen")
  let score = 0;
arry.forEach((block) => {
    console.log(block.Question)
    show.innerHTML += `
    <div class = "owuro">
       <div class="ijo">Q.  ${block.Question} </div>
      <div class= "all">A.  <input id="new" class="asan" name="clean" type ="radio">   ${block.a}</div>
      <div class= "all">B.  <input id="new" class="asan" name="clean" type ="radio">   ${block.b}</div>
      <div class= "all">C.  <input id="new" class="asan" name="clean" type ="radio">   ${block.c}</div>
      <div class= "all">D.  <input id="new" class="asan" name="clean" type ="radio">   ${block.d}</div>
      <div id="correctAnswer">${block.correct_answer}</div>
       <div class="shoulder">
        <button onclick="precious()">prev</button>
        <button>next</button>
           
        </div>
    </div>
    `
})
let milo = document.getElementById("new").value

let correctAnswer = document.getElementById("correctAnswer").value
function precious(){
   
    if (correctAnswer == milo  ) {
        score++
        console
        show.innerHTML= score;
    }
}
    // console.log(arry);
// for (let index = 0; index < arry.length; index++) {
//     const element = arry.Question;
//     console.log(element);
//     //    show.innerHTML += arry[index] + "<br>";
    
// }