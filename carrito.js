const productos = [
  {
    id: 1,
    nombre: "Polera Faith No More",
    precio: 10000,
    cantidad: 1,
    img: "./Img/p-fnm.jpg",
  },
  {
    id: 2,
    nombre: "Polera AC/DC",
    precio: 10000,
    cantidad: 1,
    img: "./Img/AC-DC-MC-hombre-negro.jpg",
  },
  {
    id: 3,
    nombre: "Polera Metallica",
    precio: 10000,
    cantidad: 1,
    img: "./Img/p-metallica.jpg",
  },
  {
    id: 4,
    nombre: "Poleron AC/DC",
    precio: 20000,
    cantidad: 1,
    img: "./Img/Ac-dc-Clasico-Poleron-gris-600x375.jpg",
  },
  {
    id: 5,
    nombre: "Poleron G & R",
    precio: 20000,
    cantidad: 1,
    img: "./Img/Guns-N-Roses-Poleron-rosa-600x375.jpg",
  },
  {
    id: 6,
    nombre: "Poleron Nirvana",
    precio: 20000,
    cantidad: 1,
    img: "./Img/Nirvana-Poleron-hombre-Rojo-600x375.jpg",
  },
  {
    id: 7,
    nombre: "A KIND OF MAGIC",
    precio: 30000,
    cantidad: 1,
    img: "./Img/queen1.jpg",
  },
  {
    id: 8,
    nombre: "A NIGHT AT THE OPERA",
    precio: 30000,
    cantidad: 1,
    img: ".Img/queen2.jpg",
  },
  {
    id: 9,
    nombre: "SHEER HEART ATTACK",
    precio: 30000,
    cantidad: 1,
    img: "./Img/queen3.jpg",
  },
  {
    id: 10,
    nombre: "Anillo Acero Madera",
    precio: 8000,
    cantidad: 1,
    img: "./Img/anillo.jpg",
  },
  {
    id: 11,
    nombre: "Brazalete Calavera",
    precio: 10000,
    cantidad: 1,
    img: "./Img/brazalete.jpg",
  },
  {
    id: 12,
    nombre: "Brazalete Balas",
    precio: 10000,
    cantidad: 1,
    img: "./Img/Brazalete Cuero Negro Balas.jpg",
  },
];

let carrito = []; 

const contenedor = document.querySelector('#contenedor');
const carritoContenedor = document.querySelector('#carritoContenedor');
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const precioTotal = document.querySelector('#precioTotal');
const procesarCompra = document.querySelector('#procesarCompra');

productos.forEach((product) => {
const { id, nombre, precio, cantidad, img } = product;
contenedor.innerHTML += `
    <div class="card text-center m-5 " style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>        
        <button onclick = "agregarProducto(${id})" class="btn btn-warning ml-2">Agregar al carrito</button>
    </div>
</div>
    `;
});

vaciarCarrito.addEventListener('click', () => {
    carrito.length = [];
    mostrarCarrito();
});
procesarCompra.addEventListener('click', () =>{
    if(carrito.length === 0){
        Swal.fire({
            title: "El carrito está vacío",
            icon: "error",
            confirmButtonText: "Aceptar",
        })
    }else{
        Swal.fire({
            title: "Compra Finalizada",
            icon: "success",
            confirmButtonText: "Aceptar",
        })
        carrito.length =[];
        mostrarCarrito();
    }
})

function agregarProducto(id){


    const item = carrito.some((product) => product.id === id);

    if(item){
        const product = carrito.map(product => {
            if(product.id=== id){
                product.cantidad++;
            }
        })
    }
    else{
        const item = productos.find((product) => product.id === id);
        carrito.push(item);    
    }
    mostrarCarrito();
}

const mostrarCarrito =() =>{
    const carroCompras = document.querySelector('.modal .modal-body')

    carroCompras.innerHTML ='';

    carrito.forEach((product) => {
        const {id, nombre, precio, img} = product;
        carroCompras.innerHTML += `
            <div class = "contenedor-carrito">
            <div>
                <img class="img-fluid img-carrito" src="${img}"/>
            </div>
            <div>
                <p>${nombre}</p>
                <p>precio: ${precio}</p>
                <button onclick = "eliminarProducto(${id})"class="btn btn-danger">Eliminar Producto</button>
            </div>
            </div>
        `
    })

    if(carrito.length === 0){
        carroCompras.innerHTML = `
        <p class="text-center text-primary">Carrito Vacío</p>`
    }
    else{

    }
    carritoContenedor.textContent = carrito.length;

    precioTotal.textContent = carrito.reduce((acc, product) => acc+product.cantidad*product.precio, 0);
    
    
}
function eliminarProducto(id){
    const productoId = id;
    carrito = carrito.filter((prod) => prod.id !== productoId);
    mostrarCarrito()
}

