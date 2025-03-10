# Landing Page - Curso de Cursor

Landing page para el curso de Cursor de Trinchera WP, optimizada con Tailwind CSS.

## Configuración del proyecto

Este proyecto utiliza Tailwind CSS optimizado para producción, lo que significa que solo se incluyen las clases CSS que realmente se utilizan en el proyecto, reduciendo significativamente el tamaño del archivo CSS final.

### Requisitos previos

- Node.js (versión 14 o superior)
- npm (viene con Node.js)

### Instalación

1. Clona este repositorio o descárgalo
2. Abre una terminal en la carpeta del proyecto
3. Instala las dependencias:

```bash
npm install
```

### Desarrollo

Para trabajar en modo desarrollo con recarga automática:

```bash
npm run watch
```

Esto iniciará Tailwind CSS en modo watch, que reconstruirá el archivo CSS cada vez que hagas cambios en los archivos HTML.

### Construcción para producción

Para generar el CSS optimizado para producción:

```bash
npm run build
```

Este comando generará un archivo CSS minificado en la carpeta `dist/` que solo incluirá las clases de Tailwind que realmente se utilizan en tu proyecto.

## Estructura del proyecto

- `index.html` - La landing page principal
- `src/input.css` - Archivo de entrada CSS con las directivas de Tailwind
- `dist/output.css` - Archivo CSS generado y optimizado (no editar manualmente)
- `tailwind.config.js` - Configuración de Tailwind CSS
- `package.json` - Configuración de npm y scripts

## Personalización

### Colores

Puedes personalizar los colores y otras opciones en el archivo `tailwind.config.js`.

### Fuentes

El proyecto utiliza la fuente Poppins de Google Fonts. Puedes cambiarla en el archivo `index.html` y actualizar la configuración en `tailwind.config.js`.

## Despliegue

Para desplegar en producción, sube los siguientes archivos a tu servidor:

- `index.html`
- `dist/output.css`
- Cualquier imagen o recurso adicional

## Licencia

MIT 