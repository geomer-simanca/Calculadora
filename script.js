
let informacionPantalla = document.getElementById("infor");

let informacionAlmacenada = "";



const eliminarTodo = () => {
    
    informacionAlmacenada = "";
    informacionPantalla.textContent = informacionAlmacenada;
    console.log(informacionAlmacenada);
    
}

const eliminarone = () => {
    
    if (informacionAlmacenada.length > 0) {
        informacionAlmacenada = informacionAlmacenada.slice(0, -1);
        if (informacionAlmacenada.length < 11) {
            informacionPantalla.textContent = informacionAlmacenada;
        } else{
            informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
        }
    }
    console.log(informacionAlmacenada);
}

const add1= () => {
    
    informacionAlmacenada += "1";

    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }

    console.log(informacionAlmacenada);
}

const add2= () => {
    informacionAlmacenada += "2";

    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}

const add3= () => {
    
    informacionAlmacenada += "3";
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}

const add4= () => {
    
    informacionAlmacenada += "4";
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}

const add5= () => {
    
    informacionAlmacenada += "5";
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}

const add6= () => {
    
    informacionAlmacenada += "6";
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}

const add7= () => {
    
    informacionAlmacenada += "7";
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}

const add8= () => {
    
    informacionAlmacenada += "8";
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}
const add9= () => {
    
    informacionAlmacenada += "9";
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);

}

const add0= () => {
    
    informacionAlmacenada += "0";
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}

const addplus= () => {
    
    if (informacionAlmacenada == "" || informacionAlmacenada[informacionAlmacenada.length-1] == "." || informacionAlmacenada[informacionAlmacenada.length-1] == "+" || informacionAlmacenada[informacionAlmacenada.length-1] == "-" || informacionAlmacenada[informacionAlmacenada.length-1] == "*" || informacionAlmacenada[informacionAlmacenada.length-1] == "/") {
        alert("Opcion Invalida");
    } else{
        informacionAlmacenada += "+"
    }
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);

}




const addresta= () => {
    
    if (informacionAlmacenada[informacionAlmacenada.length-1] == "."  || (informacionAlmacenada.endsWith("-") && informacionAlmacenada[informacionAlmacenada.length - 2] === "-") || informacionAlmacenada === "-") {
        alert("Opcion Invalida");
    } else{
        informacionAlmacenada += "-"
    }
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}

const addmulti= () => {
    
    if (informacionAlmacenada == "" || informacionAlmacenada[informacionAlmacenada.length-1] == "." || informacionAlmacenada[informacionAlmacenada.length-1] == "+" || informacionAlmacenada[informacionAlmacenada.length-1] == "-" || informacionAlmacenada[informacionAlmacenada.length-1] == "*" || informacionAlmacenada[informacionAlmacenada.length-1] == "/") {
        alert("Opcion Invalida");
    } else{
        informacionAlmacenada += "*"
    }
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}

const adddiv = () => {
    
    if (informacionAlmacenada == "" || informacionAlmacenada[informacionAlmacenada.length-1] == "." || informacionAlmacenada[informacionAlmacenada.length-1] == "+" || informacionAlmacenada[informacionAlmacenada.length-1] == "-" || informacionAlmacenada[informacionAlmacenada.length-1] == "*" || informacionAlmacenada[informacionAlmacenada.length-1] == "/") {
        alert("Opcion Invalida");
    } else{
        informacionAlmacenada += "/"
    }
    if (informacionAlmacenada.length < 11) {
        informacionPantalla.textContent = informacionAlmacenada;
    } else{
        informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
    }
    console.log(informacionAlmacenada);
}

const addpunto = () => {

    if (informacionAlmacenada.includes(".")) {
        return;
    } else{
        if (informacionAlmacenada == "" || informacionAlmacenada[informacionAlmacenada.length-1] == "." || informacionAlmacenada[informacionAlmacenada.length-1] == "+" || informacionAlmacenada[informacionAlmacenada.length-1] == "-" || informacionAlmacenada[informacionAlmacenada.length-1] == "*" || informacionAlmacenada[informacionAlmacenada.length-1] == "/") {
            alert("Opcion Invalida");
        } else{
            informacionAlmacenada += "."
        }
    
        if (informacionAlmacenada.length < 11) {
            informacionPantalla.textContent = informacionAlmacenada;
        } else{
            informacionPantalla.textContent = informacionAlmacenada.slice(informacionAlmacenada.length-10);
        }
        console.log(informacionAlmacenada);

    }


}

const igual = () => {
    let expresion = [];
    let valtemp = "";

    for (let i = 0; i <= informacionAlmacenada.length-1; i++) {
        
        

        if (informacionAlmacenada[i] == "+" || informacionAlmacenada[i] == "-" || informacionAlmacenada[i] == "*" || informacionAlmacenada[i] == "/") {
            
            if (informacionAlmacenada[i] == "-"){
                if(informacionAlmacenada[i+1] == "-"){

                    expresion.push(valtemp);
                    valtemp = "";
                    expresion.push(informacionAlmacenada[i]);

                }else if (informacionAlmacenada[i+1] != "+" || informacionAlmacenada[i+1] != "-" || informacionAlmacenada[i+1] != "*" || informacionAlmacenada[i+1] != "/"){
                    valtemp += informacionAlmacenada[i];
                }
            }else{
                expresion.push(valtemp);
            
                valtemp = "";
                
                expresion.push(informacionAlmacenada[i]);

            }


        } else {
            
            valtemp += informacionAlmacenada[i];
        }
        
    }
    expresion.push(valtemp);
    
    console.log(expresion)
    // Paso 1: Resolver multiplicación y división
    for (let i = 0; i < expresion.length; i++) {
        if (expresion[i] === "*" || expresion[i] === "/") {
        let operador = expresion[i];
        let anterior = parseFloat(expresion[i - 1]);
        let siguiente = parseFloat(expresion[i + 1]);
    
        let resultado = operador === "*" ? anterior * siguiente : anterior / siguiente;
    
        expresion.splice(i - 1, 3, resultado.toString());
        i -= 1;
        }
    }
    
    // Paso 2: Resolver suma y resta
    let resultadoFinal = parseFloat(expresion[0]);
    
    for (let i = 1; i < expresion.length; i += 2) {
        let operador = expresion[i];
        let numero = parseFloat(expresion[i + 1]);
    
        if (operador === "+") {
        resultadoFinal += numero;
        } else if (operador === "-") {
        resultadoFinal -= numero;
        }
    }
    
    console.log("Resultado final:", resultadoFinal);

    informacionAlmacenada = resultadoFinal;
    informacionPantalla.textContent = resultadoFinal;

        
}

