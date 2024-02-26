const pushProductosLS=(peces)=>{
  localStorage.setItem("peces",JSON.stringify(peces));
}

const obtenerProductosLS=()=>{
  return JSON.parse(localStorage.getItem("peces")) || []
}

const pushCarritoLS=(carrito)=>{
  localStorage.setItem("carrito",JSON.stringify(carrito))
}

const obtenerCarritoLS=()=>{
  return JSON.parse(localStorage.getItem("carrito")) || []
}

const obtenerIdProductoLS=()=>{ 
  return JSON.parse(localStorage.getItem("pez")) || 0;
}

const guardarProducto = (id) => {
  localStorage.setItem("pez", JSON.stringify(id))
  if (id) {
    let carrito = []
    carrito = obtenerCarritoLS()
    console.log(carrito);
    let id = obtenerIdProductoLS()
    console.log(id);
    const peces = obtenerProductosLS()
    console.log(peces);
    let producto = peces.find(item => item.id === id)
    console.log(producto)
    carrito.push(producto)
    pushCarritoLS(carrito)
    renderNumCarrito()
  }
}

const totalProductos=()=>{
  let carrito=obtenerCarritoLS()
  carrito=carrito.length
  return carrito;
}

const renderNumCarrito=()=>{
  document.getElementById("carritoImg").innerHTML=totalProductos()
}

const montoPagar=()=>{
  let suma=obtenerCarritoLS()
  return suma.reduce((iterador,item)=>iterador+=item.precio,0)
}

const eliminarProductoCarrito=(id)=>{
  const carrito=obtenerCarritoLS()
  const nuevoCarrito=carrito.filter(item => item.id != id)
  pushCarritoLS(nuevoCarrito)
  renderCarrito()
}