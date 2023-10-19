# BurgerQueenApiClient

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Historias de Usuario](#2-historias-de-usuario)
* [3. Prototipos de alta fidelidad](#3-prototipo-de-alta-fidelidad)
* [4. Guía para el Usuario](#4-guía-para-el-usuario)
* [5. Historias de Usuario](#5-historias-de-usuario)
* [6. Prototipos de alta fidelidad](#6-prototipo-de-alta-fidelidad)
* [7. Planificación del Proyecto](#8-planificación-del-proyecto)


<div align="center">
  <img src="./src/assets/bqaclogo.png" alt="BQAC Logo">
</div>

---

## 1. Definición del producto

Burger Queen API Client es una solución desarrollada con Angular y Typescript, diseñada para controlar la gestión de pedidos en el entorno de un restaurante de hamburguesas. Esta aplicación, adaptable a diferentes roles de usuario (mesero, jefe de cocina, administrador), ofrece un conjunto completo de funcionalidades específicas para optimizar cada etapa del ciclo de pedidos.

La aplicación resuelve de manera efectiva desafíos comunes en la operación de restaurantes al proporcionar una herramienta ágil y precisa para la toma de pedidos desde una tablet, garantizando una atención veloz y sin errores. Además, Burger Queen API Client establece una comunicación efectiva con la cocina, garantizando la transmisión eficiente de pedidos en tiempo real y conforme a las especificaciones de los clientes.

Adicionalmente centraliza la gestión de productos y usuarios, otorgando a los administradores y gerentes un control completo sobre la oferta del restaurante y el acceso de los empleados.Burger Queen API Client no solo optimiza la operación del restaurante, sino que también mejora la experiencia del cliente y proporciona herramientas valiosas para la administración y la toma de decisiones del negocio.

## 2. Historias de Usuario

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como mesero quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

## 3. Prototipos de alta fidelidad

## 4. Guía para el Usuario

(AGREGAR LINK DEL DEPLOY)

### Credenciales para acceder

|Waiter (Mesero)             |Chef (Jefe de Cocina)                  |Admin (Administrador)                            |
|----------------------|-----------------------|----------------------------------|
|email: waiter@systers.xyz |email: chef@systers.xyz |email: admin@systers.xyz |
|contraseña: 123456    |contraseña: 123456     |contraseña: 123456                |

### 1. Ingresar como Mesero (Waiter)

<img align="center" width="700" src="./src/assets/waiterview.gif">

### 2. Ingresar como Jefe de Cocina (Chef)
### 3. Ingresar como Administrador (Admin)