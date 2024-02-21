// Comienzo con la construccion de la Pre-Entrega2
/*let seleccionCliente;
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

alert(`${productosCarrito}\n\n ${montoFinal}\n ${productosDescuento}`);*/