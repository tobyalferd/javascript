function num(figure){
    document.getElementById("shownow").value+= figure 
  }   
  function sum(figure){
    document.getElementById("shownow2").value += figure
  }
  function plus(){
    let imp1 = document.getElementById("shownow");
    let imp2 = document.getElementById("shownow2");
    let imp3 = document.getElementById("shownow3");
    imp3.value = Number(imp1.value) + Number(imp2.value)
    }
    function minus(){
    let imp1 = document.getElementById("shownow");
    let imp2 = document.getElementById("shownow2");
    let imp3 = document.getElementById("shownow3");
    imp3.value = Number(imp1.value) - Number(imp2.value)
    }
    function multiply(){
    let imp1 = document.getElementById("shownow");
    let imp2 = document.getElementById("shownow2");
    let imp3 = document.getElementById("shownow3");
    imp3.value = Number(imp1.value) * Number(imp2.value)
    }
    function divide(){
    let imp1 = document.getElementById("shownow");
    let imp2 = document.getElementById("shownow2");
    let imp3 = document.getElementById("shownow3");
    imp3.value = Number(imp1.value) / Number(imp2.value)
    }