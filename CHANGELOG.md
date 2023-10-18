## 1.0.4 2023-10-18

## Sprint Learnings
• Testeo con Jest en Angular

### Added

• Me dediqué al testeo de todos los componentes, servicios y vistas, logrando cubrir el 94% de las líneas de código en todo el proyecto.

### Changed

• Hice un ajuste al mensaje de confirmación al momento de crear una nueva orden.

## 1.0.3 2023-10-11

## Sprint Learnings
• Comencé a revisar material sobre testeo en Angular

### Added

• Terminé las funcionalidades del admin para editar, agregar y eliminar tanto productos como usuarios

### Changed

• Estilos del CSS de la vista del admin.

## 1.0.2 2023-10-04

## Sprint Learnings
• El uso de tablas en Angular usando Angular-material.

### Added

• Terminé la vista del chef (ve las órdenes que se van creando, el temporizador desde que se crearon y al marcar la orden como lista se detiene el temporizador).
• El mesero puede ver las órdenes que ya están listas para entregar y las marca como 'delivered' una vez que son entregadas.
• Agregué la vista del admin, puede ver los productos y los usuarios.
• El admin puede agregar un nuevo usuario.

### Changed

• Estilos del CSS de las vistas del chef y el admin.


## 1.0.1 - 2023-09-27

## Sprint Learnings
• El uso de la directiva *[(ngModel)]*  para sincronizar datos de entrada de un formulario junto con una propiedad del formulario.

### Added

• Ya se pueden crear nuvas órdenes y se almacenan en la API
• Agregué la vista del chef y se pueden ver las órdenes existentes en el momento (De la más reciente a la más antigua)

### Changed

• Cambié los botones para agregar el producto a la órden, y puse un botón "Add" por cada producto.
• También modifiqué aspectos del CSS de la vista del chef.


## 1.0.0 - 2023-09-20

### Sprint learnings

• Uso de las directivas estructurales (ngIf / ngFor) en Angular.
• Uso de los servicios (@Injectable) en Angular.

### Added

• Agregué la vista de Mesero donde se crearán las nuevas órdenes.
• Habilité los botones de menu (Breakfast / Lunch & Dinner) para mostrar solo los productos correspondientes.
• Agregué los botones para manipular las cantidades de producto a ser añadido.

### Changed

• Modifiqué la estructuración del proyecto, separando las Interfaces y los Servicios de cada tipo de petición en carpetas separadas para mayor organización.
• Modificaciones al estilo CSS de la vista de mesero.


### Fixed

• Los botones para manipular las cantidades de producto (vista mesero), estaban alterando las cantidades de todos los productos a la vez. Lo arreglé para qe solo modificara el producto correspondiente. 
