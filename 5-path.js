const path = require('node:path')

// barra separadora de rutas segun el SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//nombre del fichero
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

//nombre del fichero quitandole datos en este caso el txt
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

//aca saca la extension del archivo que uno indique, en este caso jpg
const extension = path.extname('image.jpg')
console.log(extension)