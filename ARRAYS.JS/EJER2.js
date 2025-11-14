/*Ejercicio 2
En base a la siguiente información
const producto = {
id: 123,
nombre: "Auriculares inalámbricos",
precio: 120000,
stock: 25,
categoria: "Electrónica"
};
a) Usando la desestructuración de objetos, crea una variable para cada una de las
siguientes propiedades: nombre, precio y stock.

b) Muestra en la consola el nombre del producto, su precio y la cantidad de stock
disponible, utilizando las variables que acabas de crear.*/
const producto2 = {
id:456,
nombre: "Celular",
precio: 150000,
stock: 10,
categoria: "Electrónica"
};
const { nombre, precio, stock } = producto2;
console.log (`El producto es: ${nombre}, su precio es: ${precio} y el stock disponible es: ${stock}`);