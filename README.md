# Tailwind Dashboard - Practice Project

A modern dashboard interface built with **Next.js** and **Tailwind CSS**, designed to practice and demonstrate advanced Tailwind CSS fundamentals through real-world dashboard and form components.

## 🎯 Project Overview

This project serves as a practical implementation of Tailwind CSS concepts in building common interface patterns found in modern web applications, specifically dashboards and forms. It showcases the utility-first approach of Tailwind CSS and demonstrates how to create maintainable, scalable UI components.

## 🚀 Key Concepts Practiced

### Tailwind CSS Fundamentals
- **Utility-First Approach**: Declarative styling close to the component structure
- **Composition Pattern**: Reusable component patterns with consistent design
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Component Variants**: Using class-variance-authority for dynamic styling
- **Design System**: Consistent spacing, colors, and typography

### Interface Patterns
- **Dashboard Layouts**: Responsive sidebar navigation with grid systems
- **Form Components**: Input fields, file uploads, selects, and textareas
- **Interactive Elements**: Hover states, focus management, and transitions
- **Accessibility**: Proper ARIA attributes and keyboard navigation

## 🛠 Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components for accessibility
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

## ✨ Features

### 🎨 UI Components
- **Responsive Sidebar**: Collapsible navigation with smooth animations
- **File Upload**: Drag-and-drop interface with image preview
- **Form Controls**: Styled inputs, selects, textareas, and switches
- **Settings Tabs**: Tabbed interface for configuration panels
- **Theme Toggle**: Dark/light mode with system preference detection

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch Friendly**: Proper touch targets and gesture support
- **Adaptive Layout**: Grid system that adapts to screen size

### 🔧 Technical Features
- **Component Composition**: Flexible and reusable component patterns
- **TypeScript Integration**: Full type safety across all components
- **Performance Optimized**: Next.js optimizations with Turbopack
- **Accessibility**: WCAG compliant with screen reader support

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Main dashboard page
├── components/
│   ├── ui/                # Base UI components
│   │   ├── label.tsx      # Form label component
│   │   └── switch.tsx     # Toggle switch component
│   ├── Form/              # Form-related components
│   │   ├── FileInput/     # File upload with drag-and-drop
│   │   ├── Select/        # Custom select component
│   │   └── Textarea.tsx   # Enhanced textarea
│   ├── Sidebar/           # Navigation components
│   │   ├── index.tsx      # Main sidebar container
│   │   ├── NavItem.tsx    # Navigation items
│   │   └── Profile.tsx    # User profile section
│   └── SettingsTabs/      # Settings interface
└── lib/
    └── utils.ts           # Utility functions and cn helper
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/igortuag/tailwind-next.git
cd tailwind-next
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Start development server**
```bash
pnpm dev
# or
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🎨 Design Principles

### Utility-First Philosophy
This project demonstrates how Tailwind's utility-first approach solves common CSS challenges:
- **No CSS Repetition**: Utilities eliminate duplicate styles
- **Co-located Styling**: Styles live next to the markup they affect
- **Variant Creation**: Easy to create component variations
- **Responsive Design**: Built-in responsive utilities

### Component Composition
Uses the composition pattern for maximum flexibility:
```tsx
// Example: FileInput composition
<FileInput.Root>
  <FileInput.Trigger />
  <FileInput.FileList />
  <FileInput.Control />
</FileInput.Root>
```

### Accessibility First
All components are built with accessibility in mind:
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility

## 📚 Learning Outcomes

By exploring this project, you'll understand:

1. **Tailwind CSS Best Practices**
   - Utility composition strategies
   - Custom utility creation
   - Responsive design patterns

2. **Component Architecture**
   - Compound component patterns
   - Props interface design
   - TypeScript integration

3. **Real-World Applications**
   - Dashboard layout techniques
   - Form handling patterns
   - Animation and transitions

## 🤝 Contributing

This project welcomes contributions! Feel free to:
- Report bugs or suggest improvements
- Submit pull requests with enhancements
- Share your own Tailwind CSS patterns

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

This project was developed as part of a comprehensive Tailwind CSS course, demonstrating practical applications of utility-first CSS principles in modern web development. Special thanks to the Tailwind CSS team for creating such an amazing framework that makes styling enjoyable and efficient.
