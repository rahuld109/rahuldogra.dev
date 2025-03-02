# Project Guidelines - rahuldogra.dev

This document outlines my personal guidelines for maintaining this website codebase. It serves as a reference for code structure, styling conventions, and development workflow.

## Project Structure

```
/
├── public/          # Static assets like favicon, images
├── src/
│   ├── components/  # Reusable UI components
│   ├── icons/       # SVG icons used across the site
│   ├── layouts/     # Page layout templates
│   ├── pages/       # Page components/routes
│   └── styles/      # Global styles and Tailwind config
├── astro.config.mjs # Astro configuration
├── biome.json       # Biome linter configuration
└── README.md        # Project documentation
```

## Code Style Guidelines

### General Principles
- Keep components small and focused on a single responsibility
- Maintain consistent naming conventions
- Write self-documenting code with minimal comments
- Prioritize accessibility and performance

### CSS/Styling
- Use TailwindCSS utility classes for component styling
- Follow mobile-first responsive design approach
- Group related Tailwind classes logically:
  1. Layout/positioning classes
  2. Sizing/dimensions
  3. Typography
  4. Colors/appearance
  5. Interactivity/states

### Astro Components
- Prefer `.astro` files for static components
- Use client-side JavaScript sparingly and only when necessary
- Keep component logic at the top of files in the frontmatter section
- Use proper semantic HTML elements

## Development Workflow

### Setup and Local Development
```bash
# Install dependencies
bun install

# Start development server
bun dev

# Format and lint code
bun lint:fix
```

### Build and Deployment
```bash
# Build for production
bun build

# Preview production build locally
bun preview
```

## Performance Considerations

- Optimize image assets before adding to the project
- Lazy load images and components when possible
- Minimize client-side JavaScript
- Use Partytown for third-party scripts
- Monitor Lighthouse scores regularly

## Maintenance Tasks

- Update dependencies regularly (`pnpm update`)
- Test across different browsers and devices
- Review and refactor code periodically
- Keep content up-to-date (projects, experience, etc.)

## Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add internationalization support
- [ ] Improve accessibility features
- [ ] Add more interactive elements

---

These guidelines are for personal reference and can be adjusted as the project evolves. 