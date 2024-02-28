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
    if (totalProductos()>0) {
      renderPopUp()
      renderNumPopUp()
    }
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

const renderNumPopUp=()=>{
  document.getElementById("pop1").innerHTML=totalProductos()
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

const renderPopUp=()=>{
    let contenido=`<a href="./carrito.html" class="text-decoration-none aLink">
    <span id="pop1" class="popText position-start top-0 start-100 translate-middle rounded-pill">
    0
    <span class="visually-hidden"></span>
    </span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentcolor" class="me-4 bi bi-cart3" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>`
    document.getElementById("popup").innerHTML=contenido
}