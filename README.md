# BurgerQueenApiClient - (Angular)

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Historias de Usuario](#2-historias-de-usuario)
* [3. Prototipos de alta fidelidad](#3-prototipo-de-alta-fidelidad)
* [4. Guía para el Usuario](#4-guía-para-el-usuario)


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

Siguiendo las historias de usuario previamente detalladas y los roles específicos a los que se dirigen, se han desarrollado prototipos de alta fidelidad utilizando la herramienta Figma. Estos prototipos ofrecen una representación visual de cómo se espera que se presenten las interfaces para cada uno de los roles cuando estén completamente implementadas.

Estos prototipos brindan una vista anticipada y sobre la apariencia y funcionalidad de las interfaces. A través de estos diseños, se busca proporcionar a los usuarios y a los equipos de desarrollo una idea más sólida de la experiencia final que se obtendrá con la aplicación, lo que facilita la validación temprana de conceptos y la optimización de las interacciones.

Además, estos prototipos desempeñan un papel fundamental en la fase de diseño y desarrollo al servir como punto de referencia y guía visual, lo que contribuye a garantizar que la aplicación final cumpla con los estándares de usabilidad y experiencia del usuario deseados.

### Vista Mesero

Accede al [Prototipo Vista Mesero](https://www.figma.com/proto/bTEEuwWfQG8SvhyJXDaXlK/Burger-Queen-Api-Client-Lo-fi?type=design&node-id=8-6&t=14QX2lO83liu5jIN-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A6){:target="_blank"}

### Vista Chef

Accede al [Prototipo Vista Jefe de Cocina](https://www.figma.com/proto/bTEEuwWfQG8SvhyJXDaXlK/Burger-Queen-Api-Client-Lo-fi?type=design&node-id=40-227&t=AHoVaynaMoFxvFci-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=40%3A227&show-proto-sidebar=1){:target="_blank"}

### Vista Administrador

Accede al [Prototipo Vista Administrador](https://www.figma.com/proto/bTEEuwWfQG8SvhyJXDaXlK/Burger-Queen-Api-Client-Lo-fi?type=design&node-id=48-526&t=AHoVaynaMoFxvFci-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=48%3A526&show-proto-sidebar=1){:target="_blank"}

## 4. Guía para el Usuario

Dado que la aplicación se ha diseñado considerando el uso en las **tablets** del personal de servicio en el restaurante, para lograr una experiencia óptima, se recomienda acceder directamente desde un dispositivo de este tipo o ajustar la pantalla a una resolución de 1024px x 768px.

Acceder a <a href ="https://burger-queen-api-client-theta.vercel.app/userLogin" target="_blank">Burger-Queen-Api-Client</a>
Acceder a [Burger-Queen-Api-Client](https://burger-queen-api-client-theta.vercel.app/userLogin){:target="_blank"}. 

### Credenciales para acceder

|Waiter (Mesero)             |Chef (Jefe de Cocina)                  |Admin (Administrador)                            |
|----------------------|-----------------------|----------------------------------|
|email: waiter@systers.xyz |email: chef@systers.xyz |email: admin@systers.xyz |
|contraseña: 123456    |contraseña: 123456     |contraseña: 123456                |

### 1. Ingresar como Mesero (Waiter)

<div align="center">
<img width="500" src="./src/assets/waiterdemo.gif">
</div>

***Crear una nueva orden:***

Al iniciar sesión el mesero se encontrará con la vista para crear una nueva orden, la cual es muy intuitiva.

**Nota:** Por defecto el botón para crear una nueva orden estará deshabilitado, hasta que cse cumplan las condiciones necesarias para crear una orden:

- El nombre del cliente y el número de la mesa son campos obligatorios.
- Debe agregarse al menos un producto para poder crear la orden.

El mesero verá las 2 opciones de menú disponibles:
- Breakfast (Desayuno)
- Lunch and Dinner (Almuerzo y cena)

Al seleccionar una de las 2 opciones, se desplegarán los productos correspondientes a cada menú. El mesero podrá entonces manipular la cantidad deseada por cada producto (agregar o quitar).

Al instante, esta información se irá actualizando en el resumen de la orden (Order summary), donde también se calcula el total a pagar por la orden. Si se quiere eliminar un producto de la orden, simplemente se debe hacer click en el ícono de eliminar. Una vez que el mesero confirme con el cliente que la orden es correcta, puede crear la orden haciendo click en el botón "Create Order". Un mensaje de confirmación aparecerá indicando que la roden se creó con éxito.

***Órdenes listas para entregar:***

Al hacer click en el botón "Ready Orders", el mesero será redirigido a otra vista donde podrá ver las órdenes que ya están listas para ser entregadas a los clientes, estas irán apareciendo en la medida en que el jefe de cocina marque la orden como "lista". 

Una vez el mesero entregue la orden al cliente, deberá marcar la orden como "entregada" haciendo click en el botón "Mark delivered", para que el estado de la orden se actualice correctamente el sistema.


### 2. Ingresar como Jefe de Cocina (Chef)

<div align="center">
<img width="500" src="./src/assets/chefdemo.gif">
</div>

Al iniciar sesión, el chef visualizará un listado de las órdenes creadas hasta el momento, ordenadas de la más reciente a la más antigua. Esta lista proporciona la siguiente información:

- Nombre del Cliente
- Estatus Actual de la Orden: Se muestra si la orden está pendiente (Pending), lista para ser entregada (Ready to Deliver) o ya entregada (Delivered).
- Productos de la Orden y Cantidad Correspondiente
- Timer: Muestra el tiempo transcurrido en minutos desde el momento en que se creó la orden en el sistema.
- Acciones: Aquí, el jefe de cocina puede indicar cuándo la orden está lista para ser entregada.

Por defecto, el botón en la columna de acciones aparece como "Mark as Ready". Una vez que la orden esté lista, el jefe de cocina puede hacer clic en este botón, que se cambiará a "Order Ready". Esto enviará la orden al listado de órdenes listas del mesero, notificándole que puede recoger la orden en cocina. Cuando el mesero marque la orden como "Entregada", el jefe de cocina lo sabrá debido a que en acciones aparecerá el ícono de un check verde.

### 3. Ingresar como Administrador (Admin)

<div align="center">
<img width="500" src="./src/assets/admindemo.gif">
</div>

Al iniciar sesión, el administrador se encontrará con dos opciones a seleccionar:

- Administrar Usuarios (Manage Users)
- Administrar Productos (Manage Products)

Dependiendo de la opción seleccionada, el administrador visualizará el listado de usuarios o productos existentes en ese momento.

***Administrar usuarios (Manage Users):***

En este listado se mostrarán los siguientes campos:

- Email del usuario
- Contraseña encriptada
- Rol del usuario
- Id del usuario
- Acciones (Editar/Elimina)

***Crear un nuevo usuario:***

Para crear un nuevo usuario, el administrador debe hacer clic en el botón que se encuentra en la parte superior izquierda "+ New User". A continuación, se mostrará un formulario en el que deben completarse todos los campos para poder crear el usuario. Una vez que se confirme que la información es correcta, el administrador debe hacer clic en el botón "Create User". El nuevo usuario creado aparecerá en el listado.

***Editar/Eliminar usuario:***

Para editar o eliminar un usuario, el administrador debe hacer clic en el ícono de los tres puntos en la columna de acciones. Aquí se desplegarán dos opciones: editar y eliminar. Si selecciona la opción de editar, se abrirá un formulario con la información actual del usuario. Modifique los datos necesarios y luego haga clic en el botón "Update User" para guardar los cambios. Estos cambios se reflejarán inmediatamente en el listado.

Si selecciona la opción de eliminar, aparecerá un mensaje de alerta para confirmar que se desea eliminar el usuario en cuestión.