
let productos = [     
    {id: 1,nombre:'Botella de acero inoxidable',precio: 100,stock:10},
    {id: 2,nombre:'Cepillo de bambu',precio:200,stock:5},
    {id: 3,nombre:'Macetas compostables',precio:300,stock:8},
    {id: 4,nombre:'Vajilla de madera',precio:400,stock:4},
];

let carrito = [];

var boton = document.getElementById("1");
boton.addEventListener("click", function() {

    //let productoSeleccionado = productos.find(producto => producto.id === 1);     podria funcionar

    for(let producto in productos) {

        if(productos[producto].id == 1){
        console.log('Producto: ' + productos[producto].nombre + ', agregado al carrito');
        
        }

        //carrito.push(productoSeleccionado);

        //console.log(carrito[producto].nombre + carrito[producto].precio)
    }

    
});


for(let productocarrito in carrito) {
    console.log(carrito[productocarrito].nombre + carrito[productocarrito].precio)
}

// Desafio 8

const botonAgregar = document.querySelectorAll('.btn btn-primary');

botonAgregar.forEach(function(button){
    button.addEventListener('click',function(){
        alert('Agregado al carrito')
    })
})



