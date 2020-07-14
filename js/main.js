// PUNTO 2
var registro = [];
var historico = document.getElementById("historico")


document.getElementById("acciones").children[0].addEventListener("click", registrar)


function registrar(){
    var abonos = parseInt(document.getElementById("abonos").value)
    var prestamos = parseInt(document.getElementById("prestamos").value)*-1
    if(!isNaN(abonos)){
        registro.push(abonos)
        document.getElementById("abonos").value=""
        let newReg = document.createElement("span")
        newReg.innerText =  ` ${abonos} | `  
        historico.appendChild(newReg)
    }
    if(!isNaN(prestamos)){
        registro.push(prestamos)
        document.getElementById("prestamos").value=""
        let newReg = document.createElement("span")
        newReg.innerText =  ` ${prestamos} | `  
        historico.appendChild(newReg)
    }
    calculate();
    /*
    historico.innerHTML=""
    registro.forEach((e)=>{
        let newReg = document.createElement("span")
        newReg.innerText =  ` ${e} | `  
        //newReg.innerText =  e + " - "  
        historico.appendChild(newReg)
    })
    */

}
calculate = () => {
    //registro.forEach((e)=>tmp+=e)
    document.getElementById("results").children[0].children[0].innerText = registro.reduce((accumulator, currentValue) => accumulator + currentValue);
}
