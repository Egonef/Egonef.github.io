const cuadrados = document.querySelectorAll(".cuadrado");
const siguiente = document.getElementById('siguiente');
const title = document.getElementById('title');


let num = 0;
let sem = 0;

function color(indice){
    cuadrados.forEach((cuadrado, index) => {
        if (index == indice) {
            cuadrado.classList.add("mostrando1");
        } else{
            cuadrado.classList.add("escondiendose1");
            cuadrado.classList.remove("mostrando1");
        }
    });
}

siguiente.addEventListener('click',function(){
    num--;
    if (num < 0) {
        num = cuadrados.length -1;
    }

    color(num);
});


color(num);