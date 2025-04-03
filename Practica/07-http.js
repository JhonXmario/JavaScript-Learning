// Creando un servidor basico HTTP con Node.js
// El servidor HTTP es una aplicación que escucha las peticiones de los clientes y responde a ellas. En Node.js, podemos crear un servidor HTTP utilizando el módulo http.

// res.write es para escribir en la respuesta que se va a enviar al cliente. Este método se puede usar varias veces para escribir diferentes partes de la respuesta. Por ejemplo, puedes escribir un encabezado y luego el cuerpo del mensaje.
// El método res.end() se utiliza para finalizar la respuesta y enviar los datos al cliente. Si no se llama a este método, la respuesta no se enviará y el cliente quedará esperando indefinidamente.

const http = require("http");
//! Recuerda que cuando quieres hacer una respuesta al cliente, debes usar el objeto response (res) y cuando ya hayas escrito lo que quieras mostrarle al cliente, finalizas la respuesta con el método end().
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.write("Bienvenido a la pagina principal");
    return res.end(); //retorna para que no siga ejecutando el resto del código, por que si no lo pones, se ejecuta el resto del código y se muestra el mensaje de la siguiente línea
  }

  if (req.url === "/about") {
    res.write("Bienvenido a Acerca de");
    return res.end();
  }
  // Esto es un ejemplo de como se puede hacer una respuesta a una peticion que no existe, pero no es necesario hacerlo, ya que si no existe la ruta, el servidor lo maneja automaticamente y devuelve un error 404
  res.write(` 
        <h1>Not found</h1>
        <p>La pagina que buscas no existe</p>
        <a href="/about">Ir a Acerca de</a>
        <a href="/">Ir a Principal</a>
        `); // esta es la forma de escribir en la respuesta y mostrarla al cliente
  res.end(); // esto es necesario para acabar la respuesta
});

server.listen(3000, () => {
  console.log(`El servidor esta corriendo en el puerto ${3000}`);
});


//! Esta forma de programar acutalmente no se usa, pues hay muchas herramientas para hacer el codigo mas legile y escalable, un ejemplo es el Framework Express 7w7