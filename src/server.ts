import "dotenv/config";
import app from "./index.js";

const PORT = process.env.PORT!;

app.listen(PORT,()=>{
    console.log(`Escuchando desde el servidor: http://localhost:${PORT}/`);
});



