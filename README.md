# 📰 Tabby App

A modern, performant, and modular Vue 3 + Nuxt 3 application for displaying curated news stories in a dynamic, visually appealing format.

---

## 🚀 Purpose & Overview

**Tabby** is a responsive web application that showcases a categorized news feed UI, optimized for mobile and desktop. It simulates a personalized news aggregation experience for users, offering quick access to trending headlines across various topics like Tech, Health, Sports, Politics, and Food.

This project is structured as a front-end-only mock application meant to demonstrate:

- Modular component architecture
- Efficient data fetching via composables
- Dynamic tracking and logging
- Accessibility and responsiveness
- Design consistency from mock/specs to implementation

---

## ✨ Features & Behaviors

### Core Features

- **Tab Navigation** with active and hover state styles
- **Grid-Based Layout** adapting to screen sizes
- **Featured Tile Layout** (prominent story spanning multiple columns)
- **News Tiles** with source, timestamp, and tag
- **Compact Related Stories** panel with sticky heading
- **Auto-Hiding Scrollbars** for better UX
- **Responsive Icon Bar** that adapts on mobile
- **IntersectionObserver Tracking**
  - Logs `tile_shown` and `tile_clicked` events
- **Error Logging**
  - Captures runtime issues and persists logs to localStorage
- **Mock API Integration**
  - News stories are loaded from `mock` JSON files

### Behaviors

- Dynamically renders grid layout using `v-for` on mock stories
- Conditionally shows/hides components based on props
- Visually distinguishes featured content
- Handles scroll logic without affecting layout shift
- Auto-persisted error boundary logs with a composable

---

## 🧪 Tech Stack

- **Vue 3** Composition API
- **Nuxt 3** with Server API endpoints
- **Tailwind CSS** utility-first styling
- **LocalStorage** for persistent state
- **Mock API** (using `/server/api` handlers)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dotGrimmz/tabby-app.git
cd tabby-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run in Development Mode

```bash
npm run dev
```

The app will be available at http://localhost:3000

### 4. Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Project STructure Highlights

components/
├── FeaturedNewsTile.vue
├── NewsTile.vue
├── RelatedStories.vue
├── CompactRelatedStory.vue
├── AppIcon.vue
├── TabNav.vue

composables/
├── useTracking.ts // Logs user interactions
├── useErrorLogger.ts // Persists runtime errors

mock/
├── icons.json
├── stories.json // Mock news data per tab

pages/
├── index.vue // Main layout and logic

public/
├── images/ // All tile images

## 📋 Project Structure Highlights

- All logs captured by useTracking are stored via useErrorLogger in the browser's localStorage

- No real API calls—data is mocked to simulate external integration

- Fully type-safe using TypeScript across composables and props

- Future enhancements could include SSR rendering, GraphQL integration, or CMS connectivity

## 👤 Author

Made by @dotGrimmz
