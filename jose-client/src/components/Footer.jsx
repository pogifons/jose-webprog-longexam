import { NavLink } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 text-zinc-50 sm:grid-cols-[1.2fr_0.8fr] sm:items-start">
        <div>
          <p className="text-lg font-bold tracking-tight">BulldogEx Shop</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-300">
            National University campus essentials with a clean wireframe layout and straightforward ordering.
          </p>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
            NU-ready • Simple • Student-first
          </p>
        </div>

        <div className="sm:justify-self-end">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Quick Links
          </p>
          <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="text-sm font-medium text-zinc-200 underline-offset-4 transition hover:text-zinc-50 hover:underline focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-zinc-400">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BulldogEx Shop. Built for National University students.</p>
          <p className="font-medium text-zinc-300">Bulldogs Exchange • NU Manila</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
