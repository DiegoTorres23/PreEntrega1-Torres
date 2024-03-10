const favoritosLS=(arrayFavoritos)=>{
    localStorage.setItem("ProductosFavoritos", JSON.stringify(arrayFavoritos))
}

const obtenerfavoritosLS=()=>{
    return JSON.parse(localStorage.getItem("ProductosFavoritos")) || []
}

const totalFavoritos=()=>{
    let carrito=obtenerfavoritosLS()
    carrito=carrito.length
    return carrito;
}

const guardarFav = (id) => {
    localStorage.setItem("OtrosProductos", JSON.stringify(id))
    if (id){
        let id= JSON.parse(localStorage.getItem("OtrosProductos")) || 0;
        console.log(id)
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=> res.json())
        .then(data=> {
            let producto = data.find(item => item.id === id)
            let arrayFavoritos=[]
            arrayFavoritos=obtenerfavoritosLS()
            arrayFavoritos.push(producto)
            console.log(arrayFavoritos)
            favoritosLS(arrayFavoritos)
            renderNumFavorito()
            notificacion()
        })
    }
}

const renderNumFavorito=()=>{
    document.getElementById("favoritoImg").innerHTML=totalFavoritos()
}

const eliminarProductoFavoritos=(id)=>{
    const favorito=obtenerfavoritosLS()
    const nuevoFavorito=favorito.filter(item => item.id != id)
    favoritosLS(nuevoFavorito)
    renderFav()
}

const notificacion=()=>{
    Swal.fire({
        title: "Producto Agregado Correctamente a Favoritos",
        icon: "success"
      });
}


