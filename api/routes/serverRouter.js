const serverRouter = require('express').Router()
const { exec } = require('child_process');

// llamamos a los diferentes Routers
serverRouter.get('/call', (req,res) => {
    res.status(200).send("Hello")
})


serverRouter.post('/call/:int', (req, res) => {
    console.log(req.params)
    const { int } = req.params
    const command = `C:\\Users\\broscheitcb\\Desktop\\sipcli\\sipcli ${int} -t "prueba"`
    
  // Ejecutar el comando en la línea de comandos
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el comando: ${error.message}`);
      return res.status(500).send(`Error al ejecutar el comando: ${error.message}`);
    }
    if (stderr) {
      console.error(`Error en el comando: ${stderr}`);
      return res.status(500).send(`Error en el comando: ${stderr}`);
    }

    // Enviar el resultado del comando como respuesta
    console.log(`Resultado del comando: ${stdout}`);
    res.send(`Resultado del comando: ${stdout}`);
  });
});


module.exports = serverRouter;
