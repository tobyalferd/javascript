var p = new Date();
var month;
switch (p.getMonth()) {
    case 0:
        month = "jan";
        break;
    case 1:
        month = "Feb";
        break;
    case 2:
        month = "Mar";
        break;
    case 3:
        month = "Apr";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "jun";
        break;
    case 6:
        month = "jul";
        break;
    case 7:
        month = "Aug";
        break;
    case 8:
        month = "Sep";
        break;
    case 9:
        month = "Oct";
        break;
    case 10:
        month = "Nov";
        break;
    case 11:
        month = "Dec";
        break;
}

function time() {
    var d = new Date();
    if (d.getHours() < 10) {
        document.getElementById("hr").innerHTML = '0' + d.getHours();
    }
    else {
        document.getElementById("hr").innerHTML = d.getHours();
    }
    if (d.getMinutes() < 10) {
        document.getElementById("min").innerHTML = '0' + d.getMinutes();
    }
    else {
        document.getElementById("min").innerHTML = d.getMinutes();
    }
    if (d.getSeconds() < 10) {
        document.getElementById("sec").innerHTML = '0' + d.getSeconds();
    }
    else {
        document.getElementById("sec").innerHTML = d.getSeconds();
    }

    document.getElementById("date"), innerHTML = d.getDate() + " " + month + " " + d.getFullYear();
    setTimeout(time, 1000);


}

time();

function settime() {
    document.getElementById("settime").style.visibility = "visible";
}

function saveAlarm() {
    let hour = document.getElementById("setHr").Value;
    let minute = document.getElementById("setMin").Value;
    let second = document.getElementById("setSec").Value;
    document.getElementById("setBtn").setAttribute("onclick", "cancelBtn()");

    function x() {
        let hour = document.getElementById("setHr").Value;
        let minute = document.getElementById("setMin").Value;
        let second = document.getElementById("setSec").Value;
        document.getElementById("settime").innerHTML = "Your Alarm is set for" + hour + ":" + minute + ":" + second;
        document.getElementById("settime").style.fontsize = "xxx-large";
        document.getElementById("settime").style.fontWeight = "bold";
        document.getElementById("settime").style.paddingLeft = "99px";
        document.getElementById("settime").style.paddingTop = "45px";
        document.getElementById("settime").style.color = "deeppink";
        document.getElementById("setBtn").innerHTML = "cancel Alarm";

        if (document.getElementById("hr").innerHTML == hour && document.getElementById("min").innerHTML == minute &&
            document.getElementById("sec").innerHTML == second) {
            var audio = new Audio("Asake - Organise (Official Visualizer)_Trim.mp3");
            setInterval(() => {
                audio.play()
            }, 1000);
        }
        else {
            setTimeout(x, 1000);
        }

    }

    x();


}


function cancelBtn() {
    window.location.reload();
}