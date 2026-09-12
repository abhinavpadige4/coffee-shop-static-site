# Brew Haven Coffee Co. - Responsive Coffee Shop Website

A responsive, accessible, and SEO-optimized single-page coffee shop website built with plain HTML, CSS, and JavaScript.

## Features

- ✅ **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- ✅ **Accessibility** - WCAG 2.1 AA compliant with ARIA labels, semantic HTML, and keyboard navigation
- ✅ **SEO Optimized** - Proper meta tags, JSON-LD structured data, and semantic markup
- ✅ **Modern UI** - Clean, attractive design with smooth animations and hover effects
- ✅ **Functional Components** - Mobile navigation, smooth scrolling, and contact form validation
- ✅ **Performance Optimized** - Efficient CSS and JavaScript with minimal DOM manipulation

## Project Structure

```
coffee-shop-static-site/
├── index.html              # Main HTML file with semantic structure
├── css/
│   └── styles.css          # Stylesheet with responsive design
├── js/
│   └── script.js           # JavaScript for interactivity and validation
├── assets/
│   └── images/
│       ├── logo.svg        # Site logo
│       ├── coffee-hero.jpg # Hero section background
│       └── pastries.jpg    # Pastries section image
└── README.md               # This file
```

## Key Features Implemented

### HTML5 Semantic Structure
- Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Skip navigation link for keyboard users
- ARIA labels and roles for accessibility
- Descriptive alt text for all images
- JSON-LD structured data for LocalBusiness schema

### CSS Styling
- Mobile-first responsive design using Flexbox and Grid
- CSS custom properties for design tokens
- Smooth transitions and hover effects
- Focus visible outlines for keyboard navigation
- Print stylesheet optimization

### JavaScript Functionality
- Mobile navigation toggle with ARIA attributes
- Smooth scrolling for anchor links
- Active navigation highlighting based on scroll position
- Client-side form validation with error handling
- Form submission simulation with success messaging
- Current year display in footer

### Accessibility Features (WCAG 2.1 AA)
- Color contrast ratios ≥ 4.5:1 for normal text
- Visible focus indicators for all interactive elements
- Keyboard navigable menu and forms
- ARIA labels for navigation and form elements
- Semantic HTML structure
- Skip navigation link
- Responsive text scaling

### SEO Optimization
- Proper meta tags (title, description, keywords, viewport)
- Open Graph tags for social sharing
- Twitter Card tags
- JSON-LD LocalBusiness structured data
- Semantic HTML5 elements
- Descriptive image alt text
- Fast loading performance

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Development

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpadige4/coffee-shop-static-site.git
   ```
2. Open `index.html` in your browser
3. No build process required - pure HTML/CSS/JS

## Deployment
This site is designed to be deployed on any static hosting platform:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Or any traditional web server

## Lighthouse Performance Targets
- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

## File Descriptions

### index.html
Main HTML document containing:
- SEO meta tags and structured data
- Semantic HTML5 structure
- Accessible navigation
- Menu section with pricing
- Business hours
- Location with embedded map
- Accessible contact form
- Footer with copyright and social links

### css/styles.css
Stylesheet featuring:
- CSS reset and base typography
- Mobile-first responsive design
- Flexbox and Grid layouts
- Custom properties for design tokens
- Hover, focus, and active states
- Print optimization
- Accessibility enhancements

### js/script.js
JavaScript providing:
- Mobile navigation toggle with ARIA support
- Smooth scrolling behavior
- Active navigation link highlighting
- Contact form validation (required fields, email format)
- Form submission handling
- Current year display
- Keyboard navigation enhancements

## Accessibility Testing
To verify accessibility compliance:
1. Use axe DevTools browser extension
2. Run Lighthouse audit in Chrome DevTools
3. Test keyboard navigation (Tab, Shift+Tab, Enter, Escape)
4. Check color contrast with WebAIM Contrast Checker
5. Test with screen readers (NVDA, VoiceOver)

## SEO Verification
To verify SEO optimization:
1. Use Google's Rich Results Test for structured data
2. Check meta tags with browser dev tools
3. Validate HTML with W3C Validator
4. Test page speed with Google PageSpeed Insights
5. Verify Open Graph tags with Facebook Sharing Debugger

## License
This project is open source and available for personal and commercial use.

## Acknowledgments
- Design inspiration from modern coffee shop websites
- Accessibility guidelines from WCAG 2.1
- SEO best practices from Google Search Central
- Responsive design principles from MDN Web Docs