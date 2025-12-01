# Atenea - Plataforma para Aprender a Programar

Atenea es una plataforma educativa moderna construida con React y componentes de shadcn/ui para enseñar programación de manera interactiva y efectiva.

## 🚀 Características

- **Dashboard Interactivo**: Visualiza tu progreso y estadísticas de aprendizaje
- **Catálogo de Cursos**: Explora cursos organizados por nivel (Principiante, Intermedio, Avanzado)
- **Sistema de Lecciones**: Gestiona y completa lecciones paso a paso
- **Proyectos**: Crea y gestiona tus proyectos de programación
- **Sistema de Logros**: Desbloquea logros mientras aprendes
- **Perfil de Usuario**: Gestiona tu información y revisa tu progreso

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Estilos
- **shadcn/ui** - Componentes UI
- **React Router** - Navegación
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Iconos

## 📦 Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
atenea/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── avatar.tsx
│   │       └── ...
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Cursos.tsx
│   │   ├── Lecciones.tsx
│   │   ├── Proyectos.tsx
│   │   ├── Logros.tsx
│   │   └── Perfil.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Componentes shadcn/ui Utilizados

- Button
- Card
- Avatar
- Progress
- Tabs
- Badge
- Separator
- Dropdown Menu

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🌙 Modo Oscuro

La aplicación incluye soporte para modo oscuro. Puedes alternar entre temas desde el menú del header.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

