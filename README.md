# Introducción

## ¿Qué es la aplicación?

La aplicación **Pet Shop - Antártida** es un sitio web que cumple la función de una tienda online para productos de animales. La aplicación permite a los usuarios comprar una amplia variedad de productos para sus mascotas, incluyendo comida, snack, accesorios, higiene y salud.

La aplicación está diseñada para ser fácil de usar y navegar. Los usuarios pueden encontrar los productos que buscan navegando por las categorías de productos. Una vez que los usuarios encuentran un producto que les interesa, pueden leer una descripción detallada.

## Seleccionar productos deseados

Para agregar productos al carrito de compras, el usuario debe seguir estos pasos:

1. **Encontrar el producto que desea comprar.**
    * El usuario puede encontrar los productos que desea comprar navegando por las categorías de productos.
2. **Hacer clic en el producto para ver su detalle.**
    * Al abrir un producto se mostrará una descripcion detallada de lo que es el producto.
3. **En la sección "Cantidad", seleccionar la cantidad deseada.**
    * La cantidad deseada está limitada por el stock disponible de la tienda.
4. **Hacer clic en el botón "Agregar al carrito".**

**Resultado:**

El producto se agrega al carrito de compras. El usuario puede continuar buscando otros productos para su mascota.

## Finalizar la compra

Para finalizar la compra, el usuario debe seguir estos pasos:

1. **Hacer clic en el botón "Finalizar la compra" dentro del carrito.**
2. **Ingresar su nombre, apellido, dirección de correo electrónico.**
3. **Ingresar la información de su tarjeta de crédito o débito.**
4. **Hacer clic en el botón "Realizar Compra".**

**Resultado:**

Se realiza la compra descontando el stock disponible de la tienda. Y muestra al usuario el codigo de la compra.

# Base de Datos

La base de datos se encuentra dentro de FireBase y cuenta con las siguientes tablas para el correcto funcionamiento del sitio web:

### 1. **Producto**
    categoria: Categoria del producto.
	nombre: Nombre del producto.
	detalle: Descripción detallada del producto.
	imagen: URL de la imagen del producto.
	stock: Cantidad de productos disponibles en stock.
	precio: Precio del producto.

### 2. **Venta**
	nombre: Nombre del cliente.
	apellido: Apellido del cliente.
	email: Correo electrónico del cliente.
	fecha: Fecha de la venta.
	products: Listado de productos que se vendió.
