//process proporciona informacion y control del proceso actual como argumentos

//argumentos de entrada
//console.log(process.argv)

// controlar el proceso y su salida
// 0 todo salio bien
// 1 salio con problema
//process.exit(0)

//Podemos controlar eventos del proceso
process.on('exit', () => {
    //limpiar recursos
})

//Current working directory
console.log(process.cwd())

//platform
console.log(process.env.NODE_ENV)