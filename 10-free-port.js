const net = require('node:net')

function findAvailablePort (desirePort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(desirePort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
  })
}

module.exports = { findAvailablePort }
