/*let cantidadCuota
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
}*/

// Comienzo con la construccion de la Pre-Entrega2
let seleccionCliente;
let descuento=20;             //Manejamos el Descuento desde un Scope global
let minproductosDescuento=2; //Manejamos la Cantidad de Productos para un Descuento desde un Scope global
const peces= [
  {id:1, nombre:"Acanthurus Leucosternon", tamaño:"10 cm", precio:100000},
  {id:2, nombre:"Amphiprion Ocellaris", tamaño:"5 cm", precio:35000},
  {id:3, nombre:"Balistoides Conspicillum", tamaño:"15 cm", precio:75000},
  {id:4, nombre:"Paracanthurus Hepatus", tamaño:"10 cm", precio:85000},
  {id:5, nombre:"Ostracion Cubicus", tamaño:"7 cm", precio:62000},
  {id:6, nombre:"Zebrasoma Xanthurum", tamaño:"12 cm", precio:140000},
  {id:7, nombre:"Zebrasoma Flavescens", tamaño:"8 cm", precio:160000}
]

const productosComprar=()=>{  //Mostramos los productos y guardamos la opcion del cliente dentro de la variable
  let eleccion= "";
  peces.forEach(item=>{
    eleccion+= `${item.id}- Especie:  ${item.nombre}      Precio: $${item.precio}\n`
  })
  return eleccion;
}

class Carrito{
  constructor(){
    this.productos=[];
    this.totalPagar=0;
    this.descuento=descuento;
    this.totalProductosDescuento=minproductosDescuento;
  }
  agregarPeces(id){  //Buscaremos un producto del Array peces y lo agregamos en el array productos de la class Carrito
    let producto= peces.find(prod=>prod.id===id); 

    if(producto){
      this.productos.push(producto);
      console.log(`Agregaste el Pez ${producto.nombre} al carrito Correctamente!`);
    } else{ 
      console.log(`No se encontro el Producto Solicitado!`);
    }
  }
  listarCarrito(){   //Metodo para mostrar al cliente el total de productos seleccionado en el carrito.
    let seleccionado="";
    this.productos.forEach(item=>{
      seleccionado +=`Especie: ${item.nombre} - Precio: $${item.precio}\n`
    })
    return seleccionado;
  }
  totalProductos(){         //Recorremos el total de productos dentro del Array Carrito.
    return this.productos.length;
  }
  sumarProductos(){         //Sumamos el precio del total de Productos dentro de mi array carrito.
    return this.productos.reduce((sumatoria,item)=>sumatoria+=item.precio,0)
  }
  calcularDescuento(){     //Calculamos el Descuento en caso de cumplir con las condiciones establecidas.
    if(this.totalProductos()>=this.totalProductosDescuento){
      return Math.round(this.sumarProductos()-(this.sumarProductos()*this.descuento)/100)
    }else{
      return 0;
    }
  }
}

const carrito = new Carrito();   //Instanciamos el carrito.
while(seleccionCliente!=0){
  seleccionCliente=parseInt(prompt(`Bienvenidos a Paradise Reef, por favor elija el Pez que desea Comprar\n\n Si Desea Confirmar el carrito o Finalizar la compra presione 0\n\n ${productosComprar()}`))
  if(seleccionCliente==0){
    break;
  }
  carrito.agregarPeces(seleccionCliente);
};

let productosCarrito= `Usted Selecciono:\n ${carrito.listarCarrito()}`;
let montoFinal= `Usted debera Abonar: $${carrito.sumarProductos()}`;
let productosDescuento= `Al Comprar ${minproductosDescuento} Productos o mas se le aplico un ${descuento}% de Descuento: $${carrito.calcularDescuento()}`;

alert(`${productosCarrito}\n\n ${montoFinal}\n ${productosDescuento}`);