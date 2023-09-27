## 1.2.0 - 2023-09-27

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
