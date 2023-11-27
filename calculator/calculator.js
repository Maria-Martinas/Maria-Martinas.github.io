let nr = document.querySelectorAll('[class|="number"]');
let inp = document.getElementsByTagName("input")[0];

for(let a=0;a<nr.length;a++){
    nr[a].addEventListener('click', function() {
    inp.value +=  nr[a].innerHTML;
    })
}

//evaluates the input
function sum() {
    inp.value = math.evaluate(inp.value);
}

//clears the entire input
function clrAll() {
    inp.value = "";
}

//clears the last input
function clrLast() {
    let b = inp.value;
    inp.value =  b.slice(0,b.length-1);
}