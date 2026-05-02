 import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

 const app = express();

 app.use(cors({
    origin : process.env.CORS_ORIGIN,//from where its coming smthg like that ig(or search it up)
    credentials: true
}))

//now we'll see how to limit json here, so that we dont take unlimited of those files 

app.use(express.json({limit : "16kb"}))
// urlencoded -> taking data from url and express should be able to understand it, so

app.use(express.urlencoded({extended: true, limit: "16kb"}))  
//extended -> nested objs can be given


app.use(express.static("public"))
// static is basically used as middle ware to let the browser use the public folder and access anything if needed, reduces latency(rather going all the way, it just goes to middleware)

app.use(cookieParser())
//CRUD Operation in cookies, like the server can only access and set the cookies in there,



 export{ app }