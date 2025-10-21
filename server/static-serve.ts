import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname porque estamos usando módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setupStaticServing(app: express.Express) {
  // En producción, el HTML y assets quedan en dist/public
  const staticPath = path.join(__dirname, '../public');
  console.log('Serving static files from:', staticPath);

  app.use(express.static(staticPath));

  // Redirige todas las rutas al index.html (para apps React/Vite)
  app.get('*', (_req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
}

