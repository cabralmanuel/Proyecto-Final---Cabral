// Array de productos //

const productos = [
    { id : 1, nombre: "D.V. Catena", origen: "Mendoza", bodega: "Catena Zapata", cepa: "Pinot Noir", precio: 16.949, stock: 20 },
    { id : 2, nombre: "Thibaut Delmotte", origen: "Salta", bodega: "Familia Delmotte", cepa: "Malbec", precio: 14.285, stock: 25 },
    { id : 3, nombre: "Casa Boher", origen: "Mendoza", bodega: "Rosell Boher", cepa: "Blend", precio: 21.486, stock: 15 },
    { id : 4, nombre: "Alta Vista Serenade", origen: "Mendoza", bodega: "Alta Vista", cepa: "Malbec", precio: 55.421, stock: 7 },
    { id : 5, nombre: "Luca", origen: "San Juan", bodega: "Luca Wines", cepa: "Pinot Noir", precio: 30.557, stock: 30}
]

/* =================================  
=   Funciones de Orden Superior    =
==================================== */

// Función forEach mostrarProductos //

productos.forEach((producto)=> {
    console.log(`📢 Nombre: ${producto.nombre}, Origen: ${producto.origen}, Bodega: ${producto.bodega}, Cepa: ${producto.cepa}, $${producto.precio}, Stock: ${producto.stock}`);
});

// Función Filter //

const productosMendocinos = productos.filter((producto)=> producto.origen === "Mendoza")
console.log(`🌐 Productos de Mendoza:`);
productosMendocinos.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Origen: ${producto.origen}`);
});

const productosDelInterior = productos.filter((producto)=> producto.origen !== "Mendoza")
console.log(`🌐 Productos del interior:`);
productosDelInterior.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Origen: ${producto.origen}`);
});

const productosPinotNoir = productos.filter((producto)=> producto.cepa === "Pinot Noir");
console.log(`🍷 Productos de Cepa Pinot Noir:`);
productosPinotNoir.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Cepa: ${producto.cepa}`);
});

const productosMalbec = productos.filter((producto)=> producto.cepa === "Malbec");
console.log(`🍷 Productos de Cepa Malbec:`);
productosMalbec.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Cepa: ${producto.cepa}`);
});

const productosCaros = productos.filter((producto)=> producto.precio >= 30.000);
console.log(`🍷 Vinos Premium:`);
productosCaros.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});

const productosBaratos = productos.filter((producto)=> producto.precio <= 30.000);
console.log(`🍷 Vinos de Buen Valor:`);
productosBaratos.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});

// Funcion Find //

const resultado = productos.find(producto => producto.bodega === "Familia Delmotte");
console.log(resultado);

const resultado1 = productos.find(producto => producto.precio < 20.000);
console.log(resultado1);

const resultado2 = productos.find(producto => producto.nombre === "Rutini");
console.log(resultado2); // No existe

const resultado3 = productos.find(producto => producto.stock > 25);
console.log(resultado3);

// Función Map //

const productosNombres = productos.map(producto => producto.nombre);
console.log(productosNombres);

const vinosConDescuentos = productos.map(producto => {
    return{
        ...producto,
        price: producto.precio * 0.9
    }
})
console.log(vinosConDescuentos);

// Eliminar Producto por Id //

function eliminarProducto(productos, idProducto){
    return productos.filter((producto) => producto.id !== idProducto);
}
const productosActualizados = eliminarProducto(productos, 2);
console.log(`📄Listado de Productos Nuevos:`);
productosActualizados.forEach((producto) => {
    console.log(`🍷Nombre: ${producto.nombre} - Origen: ${producto.origen} - Bodega: ${producto.bodega} - Cepa: ${producto.cepa} - Precio: ${producto.precio} - Stock: ${producto.stock}`);
})

const productosActualizados1 = eliminarProducto(productos, 4);
console.log(`📄Listado de Productos Nuevos:`);
productosActualizados1.forEach((producto) => {
    console.log(`🍷Nombre: ${producto.nombre} - Origen: ${producto.origen} - Bodega: ${producto.bodega} - Cepa: ${producto.cepa} - Precio: ${producto.precio} - Stock: ${producto.stock}`);
})

const productosActualizados2 = eliminarProducto(productos, 3);
console.log(`📄Listado de Productos Nuevos:`);
productosActualizados2.forEach((producto) => {
    console.log(`🍷Nombre: ${producto.nombre} - Origen: ${producto.origen} - Bodega: ${producto.bodega} - Cepa: ${producto.cepa} - Precio: ${producto.precio} - Stock: ${producto.stock}`);
})

const productosActualizados3 = eliminarProducto(productos, 1);
console.log(`📄Listado de Productos Nuevos:`);
productosActualizados3.forEach((producto) => {
    console.log(`🍷Nombre: ${producto.nombre} - Origen: ${producto.origen} - Bodega: ${producto.bodega} - Cepa: ${producto.cepa} - Precio: ${producto.precio} - Stock: ${producto.stock}`);
})

const productosActualizados4 = eliminarProducto(productos, 5);
console.log(`📄Listado de Productos Nuevos:`);
productosActualizados4.forEach((producto) => {
    console.log(`🍷Nombre: ${producto.nombre} - Origen: ${producto.origen} - Bodega: ${producto.bodega} - Cepa: ${producto.cepa} - Precio: ${producto.precio} - Stock: ${producto.stock}`);
})

/* =================================  
=               DOM                =
==================================== */

// Botones del Vino D.V. Catena //

const verDetalle = document.getElementById("detalleBtn");

detalleBtn.addEventListener("click", ()=>{
    alert("Origen: Mendoza, Bodega: Catena Zapata, Cepa: Pinot Noir, Precio: $16.949, Stock: 20");
})

const favorito = document.getElementById("favoritoBtn");

document.getElementById("favoritoBtn").addEventListener("click", () => {
    const nuevoFavorito = document.createElement("p");
    nuevoFavorito.textContent = "Nuevo Producto Favorito";
    nuevoFavorito.style.color = "white";

    favorito.appendChild(nuevoFavorito);
},{
    once: true,
});

const comprarProducto = document.getElementById("comprarBtn");

comprarBtn.addEventListener("click", ()=>{
    alert("Compraste D.V. Catena");
});

const contenedor = document.getElementById("carritoBtn");

document.getElementById("carritoBtn").addEventListener("click", () => {
    const nuevoCarrito = document.createElement("p");
    nuevoCarrito.textContent = "Nuevo Producto " + contenedor.children.length;
    nuevoCarrito.style.color = "black";

    contenedor.appendChild(nuevoCarrito);
});

document.getElementById("eliminarBtn").addEventListener("click", ()=>{
    if(contenedor.children.length > 1){
        contenedor.removeChild(contenedor.lastChild)
    }else{
        alert("No hay Productos para eliminar");
    }
});

// Botones del Vino Thibaut Delmotte //

const verDetalle1 = document.getElementById("detalleBtn1");

detalleBtn1.addEventListener("click", ()=>{
    alert("Origen: Salta, Bodega: Familia Delmotte, Cepa: Malbec, Precio: $14.285, Stock: 25");
})

const favorito1 = document.getElementById("favoritoBtn1");

document.getElementById("favoritoBtn1").addEventListener("click", () => {
    const nuevoFavorito1 = document.createElement("p");
    nuevoFavorito1.textContent = "Nuevo Producto Favorito";
    nuevoFavorito1.style.color = "white";

    favorito1.appendChild(nuevoFavorito1);
},{
    once: true,
});

const comprarProducto1 = document.getElementById("comprarBtn1");

comprarBtn1.addEventListener("click", ()=>{
    alert("Compraste Thibaut Delmotte");
});

const contenedor1 = document.getElementById("carritoBtn1");

document.getElementById("carritoBtn1").addEventListener("click", () => {
    const nuevoCarrito1 = document.createElement("p");
    nuevoCarrito1.textContent = "Nuevo Producto " + contenedor1.children.length;
    nuevoCarrito1.style.color = "black";

    contenedor1.appendChild(nuevoCarrito1);
});

document.getElementById("eliminarBtn1").addEventListener("click", ()=>{
    if(contenedor1.children.length > 1){
        contenedor1.removeChild(contenedor1.lastChild)
    }else{
        alert("No hay Productos para eliminar");
    }
});

// Botones del Vino Casa Boher //

const verDetalle2 = document.getElementById("detalleBtn2");

detalleBtn2.addEventListener("click", ()=>{
    alert("Origen: Mendoza, Bodega: Rosell Boher, Cepa: Blend, Precio: $21.486, Stock: 15");
})

const favorito2 = document.getElementById("favoritoBtn2");

document.getElementById("favoritoBtn2").addEventListener("click", () => {
    const nuevoFavorito2 = document.createElement("p");
    nuevoFavorito2.textContent = "Nuevo Producto Favorito";
    nuevoFavorito2.style.color = "white";

    favorito2.appendChild(nuevoFavorito2);
},{
    once: true,
});

const comprarProducto2 = document.getElementById("comprarBtn2");

comprarBtn2.addEventListener("click", ()=>{
    alert("Compraste Casa Boher");
});

const contenedor2 = document.getElementById("carritoBtn2");

document.getElementById("carritoBtn2").addEventListener("click", () => {
    const nuevoCarrito2 = document.createElement("p");
    nuevoCarrito2.textContent = "Nuevo Producto " + contenedor2.children.length;
    nuevoCarrito2.style.color = "black";

    contenedor2.appendChild(nuevoCarrito2);
});

document.getElementById("eliminarBtn2").addEventListener("click", ()=>{
    if(contenedor2.children.length > 1){
        contenedor2.removeChild(contenedor2.lastChild)
    }else{
        alert("No hay Productos para eliminar");
    }
});

// Botones del Vino Alta Vista Serenade //

const verDetalle3 = document.getElementById("detalleBtn3");

detalleBtn3.addEventListener("click", ()=>{
    alert("Origen: Mendoza, Bodega: Alta Vista, Cepa: Malbec, Precio: $55.421, Stock: 7");
})

const favorito3 = document.getElementById("favoritoBtn3");

document.getElementById("favoritoBtn3").addEventListener("click", () => {
    const nuevoFavorito3 = document.createElement("p");
    nuevoFavorito3.textContent = "Nuevo Producto Favorito";
    nuevoFavorito3.style.color = "white";

    favorito3.appendChild(nuevoFavorito3);
},{
    once: true,
});

const comprarProducto3 = document.getElementById("comprarBtn3");

comprarBtn3.addEventListener("click", ()=>{
    alert("Compraste Alta Vista Serenade");
});

const contenedor3 = document.getElementById("carritoBtn3");

document.getElementById("carritoBtn3").addEventListener("click", () => {
    const nuevoCarrito3 = document.createElement("p");
    nuevoCarrito3.textContent = "Nuevo Producto " + contenedor3.children.length;
    nuevoCarrito3.style.color = "black";

    contenedor3.appendChild(nuevoCarrito3);
});

document.getElementById("eliminarBtn3").addEventListener("click", ()=>{
    if(contenedor3.children.length > 1){
        contenedor3.removeChild(contenedor3.lastChild)
    }else{
        alert("No hay Productos para eliminar");
    }
});

// Botones del Vino Luca //

const verDetalle4 = document.getElementById("detalleBtn4");

detalleBtn4.addEventListener("click", ()=>{
    alert("Origen: San Juan, Bodega: Luca Wines, Cepa: Pinot Noir, Precio: $30.557, Stock: 30");
})

const favorito4 = document.getElementById("favoritoBtn4");

document.getElementById("favoritoBtn4").addEventListener("click", () => {
    const nuevoFavorito4 = document.createElement("p");
    nuevoFavorito4.textContent = "Nuevo Producto Favorito";
    nuevoFavorito4.style.color = "white";

    favorito4.appendChild(nuevoFavorito4);
},{
    once: true,
});

const comprarProducto4 = document.getElementById("comprarBtn4");

comprarBtn4.addEventListener("click", ()=>{
    alert("Compraste Luca");
});

const contenedor4 = document.getElementById("carritoBtn4");

document.getElementById("carritoBtn4").addEventListener("click", () => {
    const nuevoCarrito4 = document.createElement("p");
    nuevoCarrito4.textContent = "Nuevo Producto " + contenedor4.children.length;
    nuevoCarrito4.style.color = "black";

    contenedor4.appendChild(nuevoCarrito4);
});

document.getElementById("eliminarBtn4").addEventListener("click", ()=>{
    if(contenedor4.children.length > 1){
        contenedor4.removeChild(contenedor4.lastChild)
    }else{
        alert("No hay Productos para eliminar");
    }
});

// Boton Modo Oscuro //

const dark = document.querySelector(".oscuro:nth-child(1), h3");

document.getElementById("modOscuro").addEventListener("click", function (){
    dark.classList.toggle("highlight");
})

const body = document.getElementById("body");

document.getElementById("modOscuro").addEventListener("click", function (){
    body.classList.toggle("highlight");

// Array de productos //

const productos = [
    { id : 1, nombre: "D.V. Catena", origen: "Mendoza", bodega: "Catena Zapata", cepa: "Pinot Noir", precio: 16.949, stock: 20 },
    { id : 2, nombre: "Thibaut Delmotte", origen: "Salta", bodega: "Familia Delmotte", cepa: "Malbec", precio: 14.285, stock: 25 },
    { id : 3, nombre: "Casa Boher", origen: "Mendoza", bodega: "Rosell Boher", cepa: "Blend", precio: 21.486, stock: 15 },
    { id : 4, nombre: "Alta Vista Serenade", origen: "Mendoza", bodega: "Alta Vista", cepa: "Malbec", precio: 55.421, stock: 7 },
    { id : 5, nombre: "Luca", origen: "San Juan", bodega: "Luca Wines", cepa: "Pinot Noir", precio: 30.557, stock: 30}
]

/* =================================  
=   Funciones de Orden Superior    =
==================================== */

// Función forEach mostrarProductos //

productos.forEach((producto)=> {
    console.log(`📢 Nombre: ${producto.nombre}, Origen: ${producto.origen}, Bodega: ${producto.bodega}, Cepa: ${producto.cepa}, $${producto.precio}, Stock: ${producto.stock}`);
});

// Función Filter //

const productosMendocinos = productos.filter((producto)=> producto.origen === "Mendoza")
console.log(`🌐 Productos de Mendoza:`);
productosMendocinos.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Origen: ${producto.origen}`);
});

const productosDelInterior = productos.filter((producto)=> producto.origen !== "Mendoza")
console.log(`🌐 Productos del interior:`);
productosDelInterior.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Origen: ${producto.origen}`);
});

const productosPinotNoir = productos.filter((producto)=> producto.cepa === "Pinot Noir");
console.log(`🍷 Productos de Cepa Pinot Noir:`);
productosPinotNoir.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Cepa: ${producto.cepa}`);
});

const productosMalbec = productos.filter((producto)=> producto.cepa === "Malbec");
console.log(`🍷 Productos de Cepa Malbec:`);
productosMalbec.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Cepa: ${producto.cepa}`);
});

const productosCaros = productos.filter((producto)=> producto.precio >= 30.000);
console.log(`🍷 Vinos Premium:`);
productosCaros.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});

const productosBaratos = productos.filter((producto)=> producto.precio <= 30.000);
console.log(`🍷 Vinos de Buen Valor:`);
productosBaratos.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});

// Funcion Find //

const resultado = productos.find(producto => producto.bodega === "Familia Delmotte");
console.log(resultado);

const resultado1 = productos.find(producto => producto.precio < 20.000);
console.log(resultado1);

const resultado2 = productos.find(producto => producto.nombre === "Rutini");
console.log(resultado2); // No existe

const resultado3 = productos.find(producto => producto.stock > 25);
console.log(resultado3);

// Función Map //

const productosNombres = productos.map(producto => producto.nombre);
console.log(productosNombres);

const vinosConDescuentos = productos.map(producto => {
    return{
        ...producto,
        price: producto.precio * 0.9
    }
})
console.log(vinosConDescuentos);

// Eliminar Producto por Id //

function eliminarProducto(productos, idProducto){
    return productos.filter((producto) => producto.id !== idProducto);
}
const productosActualizados = eliminarProducto(productos, 2);
console.log(`📄Listado de Productos Nuevos:`);
productosActualizados.forEach((producto) => {
    console.log(`🍷Nombre: ${producto.nombre} - Origen: ${producto.origen} - Bodega: ${producto.bodega} - Cepa: ${producto.cepa} - Precio: ${producto.precio} - Stock: ${producto.stock}`);
})

const productosActualizados1 = eliminarProducto(productos, 4);
console.log(`📄Listado de Productos Nuevos:`);
productosActualizados1.forEach((producto) => {
    console.log(`🍷Nombre: ${producto.nombre} - Origen: ${producto.origen} - Bodega: ${producto.bodega} - Cepa: ${producto.cepa} - Precio: ${producto.precio} - Stock: ${producto.stock}`);
})

const productosActualizados2 = eliminarProducto(productos, 3);
console.log(`📄Listado de Productos Nuevos:`);
productosActualizados2.forEach((producto) => {
    console.log(`🍷Nombre: ${producto.nombre} - Origen: ${producto.origen} - Bodega: ${producto.bodega} - Cepa: ${producto.cepa} - Precio: ${producto.precio} - Stock: ${producto.stock}`);
})

const productosActualizados3 = eliminarProducto(productos, 1);
console.log(`📄Listado de Productos Nuevos:`);
productosActualizados3.forEach((producto) => {
    console.log(`🍷Nombre: ${producto.nombre} - Origen: ${producto.origen} - Bodega: ${producto.bodega} - Cepa: ${producto.cepa} - Precio: ${producto.precio} - Stock: ${producto.stock}`);
})

const productosActualizados4 = eliminarProducto(productos, 5);
console.log(`📄Listado de Productos Nuevos:`);
productosActualizados4.forEach((producto) => {
    console.log(`🍷Nombre: ${producto.nombre} - Origen: ${producto.origen} - Bodega: ${producto.bodega} - Cepa: ${producto.cepa} - Precio: ${producto.precio} - Stock: ${producto.stock}`);
})

/* =================================  
=               DOM                =
==================================== */

// Botones del Vino D.V. Catena //

const verDetalle = document.getElementById("detalleBtn");

detalleBtn.addEventListener("click", ()=>{
    alert("Origen: Mendoza, Bodega: Catena Zapata, Cepa: Pinot Noir, Precio: $16.949, Stock: 20");
})

const favorito = document.getElementById("favoritoBtn");

document.getElementById("favoritoBtn").addEventListener("click", () => {
    const nuevoFavorito = document.createElement("p");
    nuevoFavorito.textContent = "Nuevo Producto Favorito";
    nuevoFavorito.style.color = "white";

    favorito.appendChild(nuevoFavorito);
},{
    once: true,
});

const comprarProducto = document.getElementById("comprarBtn");

comprarBtn.addEventListener("click", ()=>{
    alert("Compraste D.V. Catena");
});

const contenedor = document.getElementById("carritoBtn");

document.getElementById("carritoBtn").addEventListener("click", () => {
    const nuevoCarrito = document.createElement("p");
    nuevoCarrito.textContent = "Nuevo Producto " + contenedor.children.length;
    nuevoCarrito.style.color = "black";

    contenedor.appendChild(nuevoCarrito);
});

document.getElementById("eliminarBtn").addEventListener("click", ()=>{
    if(contenedor.children.length > 1){
        contenedor.removeChild(contenedor.lastChild)
    }else{
        alert("No hay Productos para eliminar");
    }
});

// Botones del Vino Thibaut Delmotte //

const verDetalle1 = document.getElementById("detalleBtn1");

detalleBtn1.addEventListener("click", ()=>{
    alert("Origen: Salta, Bodega: Familia Delmotte, Cepa: Malbec, Precio: $14.285, Stock: 25");
})

const favorito1 = document.getElementById("favoritoBtn1");

document.getElementById("favoritoBtn1").addEventListener("click", () => {
    const nuevoFavorito1 = document.createElement("p");
    nuevoFavorito1.textContent = "Nuevo Producto Favorito";
    nuevoFavorito1.style.color = "white";

    favorito1.appendChild(nuevoFavorito1);
},{
    once: true,
});

const comprarProducto1 = document.getElementById("comprarBtn1");

comprarBtn1.addEventListener("click", ()=>{
    alert("Compraste Thibaut Delmotte");
});

const contenedor1 = document.getElementById("carritoBtn1");

document.getElementById("carritoBtn1").addEventListener("click", () => {
    const nuevoCarrito1 = document.createElement("p");
    nuevoCarrito1.textContent = "Nuevo Producto " + contenedor1.children.length;
    nuevoCarrito1.style.color = "black";

    contenedor1.appendChild(nuevoCarrito1);
});

document.getElementById("eliminarBtn1").addEventListener("click", ()=>{
    if(contenedor1.children.length > 1){
        contenedor1.removeChild(contenedor1.lastChild)
    }else{
        alert("No hay Productos para eliminar");
    }
});

// Botones del Vino Casa Boher //

const verDetalle2 = document.getElementById("detalleBtn2");

detalleBtn2.addEventListener("click", ()=>{
    alert("Origen: Mendoza, Bodega: Rosell Boher, Cepa: Blend, Precio: $21.486, Stock: 15");
})

const favorito2 = document.getElementById("favoritoBtn2");

document.getElementById("favoritoBtn2").addEventListener("click", () => {
    const nuevoFavorito2 = document.createElement("p");
    nuevoFavorito2.textContent = "Nuevo Producto Favorito";
    nuevoFavorito2.style.color = "white";

    favorito2.appendChild(nuevoFavorito2);
},{
    once: true,
});

const comprarProducto2 = document.getElementById("comprarBtn2");

comprarBtn2.addEventListener("click", ()=>{
    alert("Compraste Casa Boher");
});

const contenedor2 = document.getElementById("carritoBtn2");

document.getElementById("carritoBtn2").addEventListener("click", () => {
    const nuevoCarrito2 = document.createElement("p");
    nuevoCarrito2.textContent = "Nuevo Producto " + contenedor2.children.length;
    nuevoCarrito2.style.color = "black";

    contenedor2.appendChild(nuevoCarrito2);
});

document.getElementById("eliminarBtn2").addEventListener("click", ()=>{
    if(contenedor2.children.length > 1){
        contenedor2.removeChild(contenedor2.lastChild)
    }else{
        alert("No hay Productos para eliminar");
    }
});

// Botones del Vino Alta Vista Serenade //

const verDetalle3 = document.getElementById("detalleBtn3");

detalleBtn3.addEventListener("click", ()=>{
    alert("Origen: Mendoza, Bodega: Alta Vista, Cepa: Malbec, Precio: $55.421, Stock: 7");
})

const favorito3 = document.getElementById("favoritoBtn3");

document.getElementById("favoritoBtn3").addEventListener("click", () => {
    const nuevoFavorito3 = document.createElement("p");
    nuevoFavorito3.textContent = "Nuevo Producto Favorito";
    nuevoFavorito3.style.color = "white";

    favorito3.appendChild(nuevoFavorito3);
},{
    once: true,
});

const comprarProducto3 = document.getElementById("comprarBtn3");

comprarBtn3.addEventListener("click", ()=>{
    alert("Compraste Alta Vista Serenade");
});

const contenedor3 = document.getElementById("carritoBtn3");

document.getElementById("carritoBtn3").addEventListener("click", () => {
    const nuevoCarrito3 = document.createElement("p");
    nuevoCarrito3.textContent = "Nuevo Producto " + contenedor3.children.length;
    nuevoCarrito3.style.color = "black";

    contenedor3.appendChild(nuevoCarrito3);
});

document.getElementById("eliminarBtn3").addEventListener("click", ()=>{
    if(contenedor3.children.length > 1){
        contenedor3.removeChild(contenedor3.lastChild)
    }else{
        alert("No hay Productos para eliminar");
    }
});

// Botones del Vino Luca //

const verDetalle4 = document.getElementById("detalleBtn4");

detalleBtn4.addEventListener("click", ()=>{
    alert("Origen: San Juan, Bodega: Luca Wines, Cepa: Pinot Noir, Precio: $30.557, Stock: 30");
})

const favorito4 = document.getElementById("favoritoBtn4");

document.getElementById("favoritoBtn4").addEventListener("click", () => {
    const nuevoFavorito4 = document.createElement("p");
    nuevoFavorito4.textContent = "Nuevo Producto Favorito";
    nuevoFavorito4.style.color = "white";

    favorito4.appendChild(nuevoFavorito4);
},{
    once: true,
});

const comprarProducto4 = document.getElementById("comprarBtn4");

comprarBtn4.addEventListener("click", ()=>{
    alert("Compraste Luca");
});

const contenedor4 = document.getElementById("carritoBtn4");

document.getElementById("carritoBtn4").addEventListener("click", () => {
    const nuevoCarrito4 = document.createElement("p");
    nuevoCarrito4.textContent = "Nuevo Producto " + contenedor4.children.length;
    nuevoCarrito4.style.color = "black";

    contenedor4.appendChild(nuevoCarrito4);
});

document.getElementById("eliminarBtn4").addEventListener("click", ()=>{
    if(contenedor4.children.length > 1){
        contenedor4.removeChild(contenedor4.lastChild)
    }else{
        alert("No hay Productos para eliminar");
    }
});

// Boton Modo Oscuro //

const dark = document.querySelector(".oscuro:nth-child(1), h3");

document.getElementById("modOscuro").addEventListener("click", function (){
    dark.classList.toggle("highlight");
})

const body = document.getElementById("body");

document.getElementById("modOscuro").addEventListener("click", function (){
    body.classList.toggle("highlight");
})})