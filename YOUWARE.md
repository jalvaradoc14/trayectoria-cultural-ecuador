# YOUWARE Project Guide

This project is a React + TypeScript Single Page Application (SPA) built with Vite and Tailwind CSS, dedicated to "Trayectoria Cultural del Ecuador".

## Project Overview

- **Purpose**: Educational website about Ecuadorian culture (dances, gastronomy, music, legends, festivities).
- **Architecture**: Modular component-based structure. All content sections are loaded in `App.tsx` to function as a single-page scrolling site.
- **Styling**: Tailwind CSS with custom colors matching the Ecuadorian flag (#FFD700, #0052A5, #E8112D).

## Development Commands

- **Install Dependencies**: `npm install`
- **Start Dev Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Build**: `npm run preview`
- **Lint Code**: `npm run lint`

## Code Architecture

### Directory Structure
- `src/components/`: Contains individual section components (e.g., `Hero.tsx`, `Dances.tsx`, `Gastronomy.tsx`).
- `src/App.tsx`: Main entry point that assembles all components.
- `src/index.css`: Global styles and Tailwind directives.
- `src/assets/`: Contains local images (e.g., `fiestas_de_ecuador.png`).

### Key Components
- **Navbar**: Sticky navigation with smooth scroll functionality.
- **Hero**: Landing section with gradient overlay and animations.
- **Sections**: Each cultural topic (Dances, Music, etc.) is a separate component for maintainability.
- **DigitalProposal**: Contains the "Ecua-Evento Cultural" section with:
    - **Mapa de Festividades**: Displays a local static map image (`fiestas_de_ecuador.png`) and includes a modal for full-screen viewing.
    - **Gamificación**: Displays a representative image and links to an external Genially presentation.
    - **Comunidad Social**: Displays an article summary about cultural identity and links to an external resource.
    - **UI Consistency**: All action buttons in this section follow a consistent filled-button style matching their card's theme color.

### Libraries Used
- **React**: UI Framework.
- **Tailwind CSS**: Styling.
- **Lucide React**: Icons.
- **Framer Motion**: Simple animations (Hero section).

## Future Development

- **Content Updates**: To update text or images, modify the specific component file in `src/components/`.
- **Navigation**: If adding new sections, update the `navLinks` array in `src/components/Navbar.tsx` and ensure the new section has the corresponding `id`.
- **Images**: Currently using a mix of local assets and Pixabay placeholders.
- **External Links**: 
    - "Gamification" links to a specific Genially presentation.
    - Content buttons (Dances, Music, etc.) link to specific, relevant YouTube videos.
    - "Guías Didácticas" (in Music section) links to a Spanish Rondador tutorial.
    - "Comunidad Social" links to an article about cultural identity.

## Database
*No database integration currently enabled.*
