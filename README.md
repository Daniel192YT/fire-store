# FIRE STORE — prototipo inicial

## Incluye
- Diseño responsive rojo/negro con animaciones CSS.
- Catálogo de paquetes de ejemplo (precios sin publicar).
- Formulario de solicitud manual que valida UID numérico.
- Botones de Discord y correo como puntos de integración visual.

## Importante
Esta versión es un prototipo frontend. No contiene autenticación real, pagos ni panel administrativo.
Los botones de inicio de sesión muestran avisos porque Discord OAuth2 y el acceso por correo requieren backend/proveedor de autenticación, configuración de OAuth y secretos guardados en servidor.
No solicites contraseñas de Free Fire ni códigos de verificación.
Confirma precios, paquetes y disponibilidad antes de publicar.

## Publicar gratis
1. Crea un repositorio GitHub y sube `index.html`, `styles.css`, `app.js`.
2. En Cloudflare Pages, conecta el repositorio.
3. Framework preset: None. Build command: vacío. Output directory: `/`.
4. Publica y usa el subdominio gratuito `*.pages.dev`.

Para habilitar Discord OAuth2, registra una aplicación en Discord Developer Portal y configura un endpoint backend (por ejemplo Cloudflare Worker) con `DISCORD_CLIENT_ID`, `DISCORD_CLIENT_SECRET` y una URL de callback. Nunca pongas el Client Secret en JavaScript del navegador.
