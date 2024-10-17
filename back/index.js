import app from "./app.js";
import { PORT } from "./config.js";

// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`server UP running in http://localhost:${PORT}/`) 
})