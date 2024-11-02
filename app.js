const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para procesar datos JSON
app.use(express.json());

// Servicio de autenticación
app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;

    // Simulación de autenticación simple
    if (username === 'usuarioEjemplo' && password === 'contraseñaEjemplo') {
        res.status(200).json({ message: "Autenticación satisfactoria" });
    } else {
        res.status(401).json({ error: "Error en la autenticación" });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
