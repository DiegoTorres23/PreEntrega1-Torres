const renderCarrito=()=>{
    const peces= obtenerCarritoLS()
    let contenido="";
    for (const produ of peces) { obe
      contenido+=
      `<div class="card" style="width: 18rem;">
      <img src="${produ.imagen} " class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${produ.Nombre} </p>
      </div>
    </div>`
    }
    document.getElementById("productosCarrito").innerHTML=contenido;
  }
  pushCarritoLS(guardarProducto())
  renderCarrito()
  