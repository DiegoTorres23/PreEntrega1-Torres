let cantidadCuota
let montoLeuco= 50000
let montoPayaso= 35000
let montoXanthurum= 60000
let montoBallesta= 45000
let a=3
let b=6
let c=12
let nombre= prompt("Bienvenido al Simulador de Cuotas de Paradise Reef, por favor Ingrese su Nombre")
let opcion= prompt(`Muchas Gracias ${nombre}, ahora por favor elige alguno de nuestros peces en Stock y de ese modo calcularemos el monto y numero de cuotas: \n\n1- Cirujano Leuco $${montoLeuco} \n2- Pez Payaso $${montoPayaso} \n3- Cirujano Xanthurum $${montoXanthurum} \n4- Pez Ballesta Payaso $${montoBallesta}`)

const formaPago = ()=>{
    while(opcion==1 || opcion==2 || opcion==3 || opcion==4) {
        let tipoTarjeta = prompt("Por favor seleccione el tipo de Tarjeta de Credito con la que desea abonar: \n\n1- American Express \n2- Visa Credito \n3- MasterCard")
        if(tipoTarjeta==1){
            cantidadCuota = prompt(`Muy Bien, Usted selecciono la opcion ${tipoTarjeta}, por ultimo indiquenos la cantidad de cuotas con las que desea abonar: \n\n1- ${a} Cuotas sin Interes\n2- ${b} Cuotas sin Interes \n3- ${c} cuotas sin Interes`)
            return cantidadCuota
         }else if (tipoTarjeta==2){
             cantidadCuota = prompt(`Muy Bien, Usted selecciono la opcion ${tipoTarjeta}, por ultimo indiquenos la cantidad de cuotas con las que desea abonar: \n\n1- ${a} Cuotas sin Interes\n2- ${b} Cuotas sin Interes \n3- ${c} cuotas sin Interes`)
            return cantidadCuota
         }else if(tipoTarjeta==3){
             cantidadCuota = prompt(`Muy Bien, Usted selecciono la opcion ${tipoTarjeta}, por ultimo indiquenos la cantidad de cuotas con las que desea abonar: \n\n1- ${a} Cuotas sin Interes\n2- ${b} Cuotas sin Interes \n3- ${c} cuotas sin Interes`)
            return cantidadCuota
         }else alert("Por Favor seleccione una Opcion correcta");
    } 
}
const calcularCuotaOpcion1 = ()=>{
    if(opcion==1 && cantidadCuota == 1){
        let resultado1= (montoLeuco/a);
        alert(`Tendras que abonar ${a} Cuotas de $${Math.round(resultado1)}`)
    }else if (opcion==1 && cantidadCuota==2) {
        let resultado2= (montoLeuco/b);
        alert(`Tendras que abonar ${b} Cuotas de $${Math.round(resultado2)}`)
    }else if (opcion==1 && cantidadCuota==3){
        let resultado3= (montoLeuco/c);
        alert(`Tendras que abonar ${c} Cuotas de $${Math.round(resultado3)}`)
    }else alert("Por favor ingrese una opcion Correcta");
}
const calcularCuotaOpcion2 = () =>{
    if(opcion==2 && cantidadCuota == 1){
        let resultado1= montoPayaso/a;
        alert(`Tendras que abonar ${a} Cuotas de $${Math.round(resultado1)}`)
    }else if (opcion==2 && cantidadCuota == 2) {
        let resultado2= montoPayaso/b;
        alert(`Tendras que abonar ${b} Cuotas de $${Math.round(resultado2)}`)
    }else if (opcion==2 && cantidadCuota == 3){
        let resultado3= montoPayaso/c
        alert(`Tendras que abonar ${c} Cuotas de $${Math.round(resultado3)}`)
    }else alert("Por favor ingrese una opcion Correcta");
}
const calcularCuotaOpcion3 = () =>{
    if(opcion==3 && cantidadCuota == 1){
        let resultado1= montoXanthurum/a;
        alert(`Tendras que abonar ${a} Cuotas de $${Math.round(resultado1)}`)
    }else if (opcion==3 && cantidadCuota == 2) {
        let resultado2= montoXanthurum/b;
        alert(`Tendras que abonar ${b} Cuotas de $${Math.round(resultado2)}`)
    }else if (opcion==3 && cantidadCuota == 3){
        let resultado3= montoXanthurum/c
        alert(`Tendras que abonar ${c} Cuotas de $${Math.round(resultado3)}`)
    }else alert("Por favor ingrese una opcion Correcta");
}
const calcularCuotaOpcion4 = () =>{
    if(opcion==4 && cantidadCuota == 1){
        let resultado1= montoBallesta/a;
        alert(`Tendras que abonar ${a} Cuotas de $${Math.round(resultado1)}`)
    }else if (opcion==4 && cantidadCuota == 2) {
        let resultado2= montoBallesta/b;
        alert(`Tendras que abonar ${b} Cuotas de $${Math.round(resultado2)}`)
    }else if (opcion==4 && cantidadCuota == 3){
        let resultado3= montoBallesta/c
        alert(`Tendras que abonar ${c} Cuotas de $${Math.round(resultado3)}`)
    }else alert("Por favor ingrese una opcion Correcta");
}

switch(opcion){
    case "1":
        alert(`Usted Eligio la opcion ${opcion}.`)
        formaPago()
        calcularCuotaOpcion1()
        break;
    case "2":
        alert(`Usted Eligio la opcion ${opcion}.`)
        formaPago()
        calcularCuotaOpcion2()
        break;
    case "3":
        alert(`Usted Eligio la opcion ${opcion}.`)
        formaPago()
        calcularCuotaOpcion3()
        break; 
    case "4":
        alert(`Usted Eligio la opcion ${opcion}.`)
        formaPago()
        calcularCuotaOpcion4()
        break;
}