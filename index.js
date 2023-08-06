let jsonServer=require("json-server")
let server=jsonServer.create()
const router=jsonServer.router("db.json");

const port=process.env.port||8080
let cors=require("cors")
server.use(cors())
server.use(router)
server.listen(port,()=>{
    console.log("Server running on"+port)
})