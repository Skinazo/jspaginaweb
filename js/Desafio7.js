const productos = [
    {id:1,nombre:'jean',precio:8000},
    {id:2,nombre:'buzo',precio:12000},
    {id:3,nombre:'remera',precio:1500},
    {id:4,nombre:'macetas compostables',precio:2700},]

for(let producto in productos){
    console.log(`Los productos son:\nProducto N°${productos[producto].id}: ${productos[producto].nombre}\nPrecio: $${productos[producto].precio}`)
}