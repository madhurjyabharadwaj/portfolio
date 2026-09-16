// Everything that is "about the person" rather than about a page lives here.
export const SITE = {
  name: 'Madhurjya Bharadwaj',
  firstName: 'Madhurjya',
  role: 'Product Manager in Paris',
  email: 'mbharadwajofficial@gmail.com',
  linkedin: 'https://www.linkedin.com/in/madhurjya-bharadwaj',
  github: 'https://github.com/madhurjyabharadwaj',
  cv: '/cv/Madhurjya-Bharadwaj-CV.pdf',
  // Formspree form, delivering to the account email above. If this is ever
  // reset to a PLACEHOLDER value the contact form is replaced by a plain email
  // link, so a visitor is never invited to type a message that goes nowhere.
  formEndpoint: 'https://formspree.io/f/mppwaebb',
};

/** False while `formEndpoint` is still the placeholder. */
export const isFormConfigured = !SITE.formEndpoint.includes('PLACEHOLDER');

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
