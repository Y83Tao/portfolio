# Portfolio Website

A minimalistic purple space-themed portfolio website built with React and Framer Motion.

## Features

- **Minimalistic Purple Space Theme**: Beautiful animated space background with stars, shooting stars, and floating planets
- **Smooth Page Transitions**: Powered by Framer Motion for fluid animations
- **Fully Responsive**: Optimized for both desktop and mobile devices
- **Performance Optimized**: Lazy loading of page components for faster initial load
- **Interactive UI**: Hover effects, smooth transitions, and engaging animations

## Pages

1. **About**: Introduction, skills showcase, and quick overview
2. **Resume**: Education, certifications, and core competencies
3. **Experiences**: Detailed work experience with interactive company tabs
4. **Projects**: Portfolio of projects with descriptions and tech stacks
5. **Contact**: Contact form and social media links

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Framer Motion**: Animation library for smooth transitions
- **CSS3**: Custom styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Your Information

1. **About Page** (`src/pages/About.jsx`):
   - Replace "Your Name" with your actual name
   - Update the profile image placeholder
   - Modify skills array with your skills
   - Update the about text

2. **Resume Page** (`src/pages/Resume.jsx`):
   - Update education details
   - Modify certifications
   - Update core competencies

3. **Experiences Page** (`src/pages/Experiences.jsx`):
   - Replace the experiences array with your work experience
   - Update company names, positions, and descriptions

4. **Projects Page** (`src/pages/Projects.jsx`):
   - Replace the projects array with your actual projects
   - Add GitHub and demo links
   - Update project descriptions and tech stacks

5. **Contact Page** (`src/pages/Contact.jsx`):
   - Update social media links
   - Change email address
   - Update location and status

### Customize Colors

The purple space theme colors are defined in CSS files. Main color variables:
- Primary purple: `#9370db` (Medium Purple)
- Secondary purple: `#ba55d3` (Medium Orchid)
- Background: Gradient from `#0a0015` to `#2d0052`

## Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx        # Navigation bar component
│   │   ├── Navigation.css
│   │   ├── SpaceBackground.jsx   # Animated space background
│   │   └── SpaceBackground.css
│   ├── pages/
│   │   ├── About.jsx             # About page
│   │   ├── About.css
│   │   ├── Resume.jsx            # Resume page
│   │   ├── Resume.css
│   │   ├── Experiences.jsx       # Work experience page
│   │   ├── Experiences.css
│   │   ├── Projects.jsx          # Projects showcase
│   │   ├── Projects.css
│   │   ├── Contact.jsx           # Contact page
│   │   └── Contact.css
│   ├── App.jsx                   # Main app component
│   ├── App.css
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## Performance Features

- **Lazy Loading**: Pages are lazy-loaded to improve initial load time
- **Code Splitting**: Automatic code splitting via Vite
- **Optimized Animations**: Hardware-accelerated CSS animations
- **Memoized Components**: UseMemo hooks for expensive computations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your own portfolio!

## Contact

For questions or feedback, reach out via the contact form or social media links.
