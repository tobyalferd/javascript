document.getElementById("need").addEventListener("click", bola);

let user = [];
function bola(e) {


    let answer = document.getElementById("messi").value;
    let show = document.getElementById("screen");
    show.innerHTML = "";

    if (answer === "") {
        alert("input cannot be empty");

    } else {
        user.push(answer);
        console.log(user);

        for (let index = 0; index < user.length; index++) {
            const element = user[index];

            show.innerHTML += `
     <div class="name">
    <span>${element}</span>
    <button>${index}</button>
    </div>
     
     `;
        };


        e.preventDefault();
    };


};