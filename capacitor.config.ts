import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.majime.sosglobal',   // Identificador único del paquete Android
  appName: 'S.O.S. GLOBAL',        // Nombre real que verá el usuario
  webDir: 'dist/public',           // Carpeta donde Vite deja el build
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
