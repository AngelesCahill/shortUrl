import mongoose from "mongoose";

mongoose.connect(process.env.URI)
.then(() => {
    console.log("DB connected");
})
.catch (e => console.log("Falló la conexión a la BD" + e));