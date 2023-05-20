let user = [];
function life() {
    let act = document.getElementById("level1")
    let act2 = document.getElementById("level2")
    let act3 = document.getElementById("level3")
    let all = {
        email: act.value,
        password: act2.value,
        username: act3.value,
    }
    user.push(all);
    console.log(user)
   
}
function live(){
    // user.filter()
}

function flow() {
    document.getElementById('sop').classList.toggle('go')
}