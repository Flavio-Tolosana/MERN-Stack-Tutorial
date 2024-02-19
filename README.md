# MERN Stack example

1. Descargar el repositorio localmente. Bien descargando el zip o clonando con git.
2. Descargar las dependencias node. Para ello hay que tener instalado node.

``` shell
    node --version
    npm --version
```

Las dependencias que hay que descargar son:

- Dentro de la carpeta `backend`:

``` shell
    npm install express
    npm install dotenv
    npm install mongoose
    npm install cors
```
- Dentro de la carpeta `frontend`:

``` shell
    npm create vite@latest
    npm install
    npm install react-router-dom
    npm install date-fns
```
Después de ejecutar los comandos anteriores se habrá creado dos carpeta `node_modules` (una en frontend y otra en backend) con dichas dependencias.

3. Crear dentro de la carpeta `backend` un archivo `.env` el cual debe tener el sigiuente contenido:

``` txt
    PORT=4000
    MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.i2odrsz.mongodb.net/
```
`MONGO_URI` es la uri de vuestra base de datos MongoDB. Debéis poner dicha uri.

4. Para poner en funcionamiento la página:

- Dentro de la carpeta `backend`:

``` shell
    npm run dev
```

- Dentro de la carpeta `frontend`:

``` shell
    npm run dev
```

---

> Para ver el curso completo donde se explica  este proyecto y cómo funciona, puedes acceder a [Mern Stack Tutorial - Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE)
