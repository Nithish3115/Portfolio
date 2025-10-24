# Nithish's Portfolio Website

## Overview

A modern, visually stunning portfolio website for Nithish - Software Engineer & AI Enthusiast. Built as a full-stack application featuring a React frontend with TypeScript, Express backend, and a focus on premium design with smooth animations, glassmorphism effects, and interactive elements. The portfolio showcases professional experience, projects, skills, and provides a contact form for visitors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for client-side routing (lightweight React Router alternative)
- Single-page application (SPA) with component-based architecture

**UI Component System**
- **shadcn/ui** components (New York style) with Radix UI primitives
- Custom component library in `client/src/components/ui/` with consistent styling
- Theme system supporting both dark and light modes via Context API
- Design system follows specifications in `design_guidelines.md`:
  - Typography: Inter (primary), Poppins (accent), JetBrains Mono (code)
  - Glassmorphism and gradient effects for modern aesthetic
  - Tailwind CSS utility-first approach with custom theme configuration

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- React Context for global theme state (ThemeProvider)
- Local component state with React hooks

**Styling Approach**
- **Tailwind CSS** with extensive custom configuration in `tailwind.config.ts`
- CSS custom properties for theming (HSL color system)
- Responsive design with mobile-first approach
- Animation utilities with hover effects (`hover-elevate`, `active-elevate-2`)
- Custom shadow and border systems for card components

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running in ESM mode
- Minimal API surface with a single endpoint (`/api/contact`)
- Request logging middleware for API calls
- Development and production build processes using `tsx` and `esbuild`

**Application Structure**
- Modular route registration via `server/routes.ts`
- Storage abstraction layer (`server/storage.ts`) with interface-based design
- In-memory storage implementation (`MemStorage`) for contact form submissions
- Vite middleware integration for development with SSR-like setup

**Development Features**
- Replit-specific plugins for development (error overlay, cartographer, dev banner)
- Hot module replacement in development mode
- Source map support for debugging

### Data Storage Solutions

**Current Implementation**
- **In-memory storage** (`MemStorage` class) for contact form messages
- No persistent database currently configured, though infrastructure is prepared

**Database Infrastructure (Prepared)**
- **Drizzle ORM** configured with PostgreSQL dialect
- **Neon Database** serverless PostgreSQL driver (`@neondatabase/serverless`)
- Schema definition in `shared/schema.ts` using Zod for validation
- Migration system via `drizzle-kit` with migrations output to `./migrations`
- Session storage ready via `connect-pg-simple` for PostgreSQL-backed sessions

**Validation**
- **Zod** schemas for runtime type validation (contact form)
- **Drizzle-Zod** integration for database schema validation
- Shared validation logic between client and server (`shared/schema.ts`)

### Authentication and Authorization

Currently not implemented. The application is a public portfolio website without user authentication requirements.

### External Dependencies

**Frontend Libraries**
- **React Query** - Server state management and API caching
- **Radix UI** - Accessible component primitives (20+ packages)
- **Lucide React** - Icon system
- **React Icons** - Additional icon sets (Simple Icons for brand logos)
- **Embla Carousel** - Touch-enabled carousel component
- **Class Variance Authority (CVA)** - Type-safe variant styling
- **date-fns** - Date manipulation utilities
- **cmdk** - Command menu component

**Backend Libraries**
- **Express** - Web server framework
- No external API integrations currently implemented
- Ready for PostgreSQL integration via Drizzle and Neon

**Build & Development Tools**
- **TypeScript** - Type safety across entire stack
- **Vite** - Frontend build tool and dev server
- **esbuild** - Backend bundling for production
- **Tailwind CSS** with PostCSS and Autoprefixer
- **tsx** - TypeScript execution for development

**Deployment Configuration**
- Environment variable: `DATABASE_URL` expected but not required (throws error in drizzle.config.ts if missing)
- Build outputs:
  - Frontend: `dist/public` (Vite build)
  - Backend: `dist` (esbuild bundle)
- Production server serves static files and API from single Express instance

**Key Design Patterns**
- Component composition with Radix UI primitives
- Render props and compound components (UI library)
- Provider pattern for theming and query client
- Storage abstraction with interface segregation
- Middleware pipeline for Express routing
- Path aliasing for clean imports (`@/`, `@shared/`, `@assets/`)