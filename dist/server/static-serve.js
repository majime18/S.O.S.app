import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export function setupStaticServing(app) {
    // Ruta correcta del build de Vite
    const staticPath = path.join(__dirname, '../dist/public');
    console.log('✅ Serving static files from:', staticPath);
    // Servir todos los archivos estáticos del frontend
    app.use(express.static(staticPath));
    // Redirigir cualquier otra ruta al index.html (para SPA)
    app.get('/*', (_req, res) => {
        res.sendFile(path.join(staticPath, 'index.html'));
    });
}
