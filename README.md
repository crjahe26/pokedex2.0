# pokedex2.0

## Descripción del Proyecto
Este repositorio contiene una interfaz web simple de una Pokédex, implementada en HTML, CSS y JavaScript.
La interfaz permite al usuario ver la información de los Pokémon en dos vistas: vista de cajas y vista de Pokédex original.

## Equipo #4

1. [Javier Dario Echavarria Cano](https://github.com/BlackPixl)
2. [Cristian Jaramillo Herrera](https://github.com/crjahe26)

## Instrucciones de Ejecución
Para ejecutar la Pokédex en tu navegador, sigue estos pasos:

1. Clona este repositorio en tu máquina local o descárgalo como un archivo ZIP.
   
   ```bash
   git clone https://github.com/crjahe26/pokedex2.0.git
   ```

2. Abre el archivo html con tu navegador web preferido. También puedes abrir VSCode y activar LiveServer para visualizar el proyecto.

## Para la parte de la base de datos

1. Validar que la carpeta postgres_data y pgadmin_data esten creadas.
2. Validar que la carpeta pgadmin_data tenga dentro la carpeta sessions.
3. Instalar node
4. Instalar docker
5. Datos para ingresar a la base de datos:
PORT =  3000
DB_USER = 'student'
DB_PASSWORD = 'adminStudent'
DB_HOST = 'localhost'
DB_NAME = 'the_pokedex'
DB_PORT = '5432'
6. Correr desde la terminal en la carpeta "Pokedex2.0" el comando npm i o npm install, con esto se van a instalar todas las dependencias del proyecto.
7. Estando en la terminal en la carpeta del proyecto y teniendo Docker activo, correr el comando docker-compose up -d , este comando lo que va a hacer es descargar y levantar las imágenes de Docker, en este caso levantaría pgadmin4 y postgres, el cual puede tardar un poco en instalar todo.
8. Una vez los pasos anteriores este completados, correr en la carpeta del proyecto el comando npm run dev para ejecutar el api que corre en http://localhost:3001/
9. Para visualizar la base de datos, ir a http://localhost:5050/ las credenciales de acceso son: 
admin@mail.com
root
Si por algún motivo se queda cargando hay que darle varios minutos a que termine de cargar completamente.
