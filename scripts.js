class Producto {
    constructor(nombre, descripcion, precio){
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
    }
}

const producto1 = new Producto("Branding", "Diseño de la imágen coorporativa de tu producto o servicio, y multiples aplicaciones determinadas en un manual de usuario, donde vamos a pautar los alineamientos visuales de tu proyecto, para que el enfoque al cliente sea optimizado", 150)
const producto2 = new Producto("Estrategia digital social-media", "Para lograr un mayor alcance de popularidad, y destacar de la competencia, gestionamos todas tus comunicaciones visuales en Instagram, Facebook, google ads", 60)
const producto3 = new Producto("Diseño web classic (Maximo 5 secciones)", "Vamos a subir tus productos o servicios a la web, para lograr mayor alcance de clientes, utilizando tecnologías actuales, y un enfoque dinámico", 120)
const producto4 = new Producto("E-commerce (classic)", "Vas a poder tener tu tienda online, y ofrecer no solo los servicios sino tambien gestionar el cobro de los mismos utilizando pago electrónico tambien", 200)
const producto5 = new Producto("E-commerce (premium)", "Preparado para los más exigentes, un servicio premium para aquellos servicios que en sus catálogos podemos encontrar mas de 100 productos, ordenados en secciones", 200)


const productos = [producto1, producto2, producto3, producto4, producto5]
const divProductos = document.getElementById("divProductos")
const botonCarrito = document.getElementById("carrito")

productos.forEach((producto, indice) =>{
    divProductos.innerHTML += `
    <div class="card text-white bg-dark mb-3" id= "producto${indice}" style="max-width: 20rem;">
        <div class="card-header">${producto.nombre}</div>
        <div class="card-body">
            <h4 class="card-title">${producto.precio}</h4>
            <p class="card-text">${producto.descripcion}</p>
            <button class ="btn btn-light"><i class="fas fa-cart-plus"></i></button>
        </div>
    </div>
    `
})

productos.forEach((producto, indice)=>{
    document.getElementById("producto, ${indice}").lastElementChild.lastElementChild.addEventListener('click', () =>{
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            //destination: "https://github.com/apvarun/toastify-js",
            //newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to bottom left, #30655A, #0229BA)",
            },
            onClick: function(){
                console.log("Diste click")
            } // Callback after click
          }).showToast();
    })

    })



botonCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Carrito',
        showCancelButton: true,
        cancelButtonText: 'Seguir comprando',
        confirmButtonText: 'Finalizar compra',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Compra finalizada', '', 'success')
        } 
      })
})