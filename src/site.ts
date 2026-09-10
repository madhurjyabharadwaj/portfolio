// Everything that is "about the person" rather than about a page lives here.
export const SITE = {
  name: 'Madhurjya Bharadwaj',
  firstName: 'Madhurjya',
  role: 'Product Manager in Paris',
  email: 'mbharadwajofficial@gmail.com',
  linkedin: 'https://www.linkedin.com/in/madhurjya-bharadwaj',
  github: 'https://github.com/madhurjyabharadwaj',
  cv: '/cv/Madhurjya-Bharadwaj-CV.pdf',
  // TODO: replace with the real Formspree endpoint (https://formspree.io/f/<id>).
  formEndpoint: 'https://formspree.io/f/PLACEHOLDER',
};

// Build output is one .html file per route, so pathnames at build time look
// like /about.html. Everything user-facing (canonical, nav state) uses this.
export const cleanPath = (pathname: string) =>
  pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';

export const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Work', href: '/work' },
  { label: 'Connect', href: '/connect' },
];
