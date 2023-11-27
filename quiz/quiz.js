
let nr = document.getElementById('add_nr').innerHTML = Math.floor((Math.random() * 21) + 1)*2  + ".";
let result = document.getElementById('result_nr').innerHTML = nr/2;

//shows the next requirement/section
function tasks(id_1,id_2) {
    document.getElementById(id_1).style.display = "block";
    document.getElementById(id_2).style.display = "none";
}
  
document.getElementById('wrong').innerHTML = result + " ?";