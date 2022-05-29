# Bot de recolección de recursos Grepolis

Es necesario tener node y npm instalados

## Instalar dependencias

### `npm install`

## Configurar bot

Cambiar los siguientes parametros en 'cypress/fixture/datos.json'

- usuario: Nombre usuario o correo electronico.
- contrasena: Contraseña del usuario;
- mundo: Nombre en mayusculas del mundo.
- numeroAldeas: Numero aldeas activas en la isla. (Se toma para todas las ciudades, el cero cuenta)
- tiempoRecoleccion: Tiempo de recoleccion en milisegundos. (Se toma para todas las ciudades)
- ciudadesConAldeas: Es una lista de las ciudades con aldeas
    -  nombreCiudad: Es opcional, para entendimiento propio
    - aldeaInicial: codigo de cualquier aldea (Inspeccionar elementos).
    - codigoCiudad:  codigo de la ciudad (Inspeccionar elementos).

## Iniciar bot

### `npm run start:cypress`

**Note: Es posible jugar en la pantalla de chrome corriendo cypress**
