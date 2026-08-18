
import express from "express";
import path from "path";
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

//TSP2
// const MongoDBStore = ConnectMongoDB(session);
// const store = new MongoDBStore({
//     uri: String(process.env.MONGO_URL),
//     collection: "session"
// })


//Expressni 4ta bo'lomi mavjud
/**  1-ENTRANCE **/ 
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/** 2-SESSIONS */




/** 3- VIEVS */
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");


/** 4- ROUTERS */


export default app;