# Proyecto Portafolio Full Stack 🚀

Este proyecto es un portafolio académico desarrollado como parte de un curso universitario. Incluye una aplicación web full-stack que permite a los usuarios registrarse, iniciar sesión y explorar portafolios individuales de los integrantes del equipo.

## Tecnologías Utilizadas 🛠️

### Frontend
- **⚛️ React**: Biblioteca para construir interfaces de usuario.
- **⚡ Vite**: Herramienta de construcción rápida para proyectos frontend.
- **🎨 Tailwind CSS**: Framework de CSS para estilos rápidos y personalizados.
- **📦 Zustand**: Librería para el manejo del estado global.
- **🧭 React Router**: Navegación entre páginas.

### Backend
- **🟢 Node.js**: Entorno de ejecución para JavaScript.
- **🚀 Express**: Framework para construir APIs REST.
- **🗄️ Sequelize**: ORM para manejar la base de datos.
- **🐬 MySQL**: Base de datos relacional.
- **🔐 JWT**: Autenticación basada en tokens.
- **🧪 Jest**: Framework de pruebas para JavaScript.

### Infraestructura
- **⚙️ GitHub Actions**: CI/CD para pruebas y despliegue.
- **🌐 Render**: Hosting para el backend.
- **📄 GitHub Pages**: Hosting para el frontend.

## Cómo Clonar el Repositorio 🖥️

1. Abre tu terminal.
2. Ejecuta el siguiente comando para clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/proyecto-portafolio-full-stack.git
   ```
3. Navega al directorio del proyecto:
   ```bash
   cd proyecto-portafolio-full-stack
   ```

## Despliegue Local 🏠

### Requisitos Previos
- **Node.js** (v18 o superior)
- **MySQL**
- **Git**

### Configuración del Backend
1. Crear un archivo `.env` en la carpeta `backend` con el siguiente contenido:
   ```properties
   DATABASE_URL=mysql://usuario:contraseña@host:puerto/nombre_base_datos
   JWT_SECRET=tu_secreto
   NODE_ENV=development
   ```
2. Instalar dependencias:
   ```bash
   cd backend
   npm install
   ```
3. Ejecutar el servidor:
   ```bash
   npm run dev
   ```

### Configuración del Frontend
1. Crear un archivo `.env` en la carpeta `frontend` con el siguiente contenido:
   ```properties
   VITE_API_URL=http://localhost:5000
   ```
2. Instalar dependencias:
   ```bash
   cd frontend
   npm install
   ```
3. Ejecutar el servidor:
   ```bash
   npm run dev
   ```

### Acceso a la Aplicación
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend**: [http://localhost:5000](http://localhost:5000)

## Despliegue en Producción 🌍

### Backend
El backend está configurado para ser desplegado en **Render**. Asegúrate de configurar las variables de entorno en el panel de Render.

### Frontend
El frontend se despliega automáticamente en **GitHub Pages** mediante un workflow de GitHub Actions. Para activar el despliegue:
1. Asegúrate de que la rama `main` esté actualizada.
2. Realiza un push a `main` y el workflow se encargará del resto.

## Workflows de GitHub Actions ⚙️

### Despliegue del Frontend
```yaml
name: Deploy React/Vite to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
        working-directory: ./frontend
      - run: npm run build
        working-directory: ./frontend
      - run: cp dist/index.html dist/404.html
        working-directory: ./frontend
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend/dist
```

### CI para el Backend
```yaml
name: Backend CI
on:
  push:
    branches: [ main ]
    paths:
      - 'backend/**'
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
        working-directory: ./backend
      - run: npm test
        working-directory: ./backend
```
