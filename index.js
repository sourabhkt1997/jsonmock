let jsonServer=require("json-server")
let server=jsonServer.create()
const router=jsonServer.router("db.json");

const port=process.env.port||8080
server.use(router)
let cors=require("cors")
server.use(cors())
server.listen(port)