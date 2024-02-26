const renderCardsProductos=()=>{
    const peces= obtenerProductosLS()
    let cards="";
    for (const producto of peces) {
      cards+=
      `<div class= "pCard card m-4" style="width: 22rem; height: auto;">
      <img src="${producto.imagen}" class="img-fluid" alt="img-pez-xanthurum">
      <div class="card-body">
        <h5 class="pCardTitle card-title">${producto.Nombre}</h5>
        <hr>
        <p class="card-text">Habitat: ${producto.Habitat}</p>
        <p class="card-text">Tamaño: ${producto.Tamaño}</p>
        <p class="card-text">Acuarios: ${producto.Acuarios}</p>
        <p class="card-text">Precio: <b>$${producto.precio}</b></p>
        <button onclick="guardarProducto(${producto.id})" class="pBtn btn btn-info">Agregar al Carrito<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-2 bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg></button>
      </div>
    </div>`
    }
    document.getElementById("containerProductos").innerHTML=cards
}
  pushProductosLS(peces)
  renderCardsProductos()