let jsonServer=require("json-server")
let server=jsonServer.create()
const router=jsonServer.router("db.json");

const port=process.env.port||8080
server.use(router)

server.listen(port)