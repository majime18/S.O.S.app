import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setupStaticServing(app: express.Express) {
  const staticPath = path.join(__dirname, '../public');
  console.log('Serving static files from:', staticPath);

  // Servir archivos estáticos
  app.use(express.static(staticPath));

  // Redirigir cualquier otra ruta al index.html
  app.use((_req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
}

