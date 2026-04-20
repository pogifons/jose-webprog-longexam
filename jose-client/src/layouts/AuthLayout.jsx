import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import banner from '../assets/img/banner-nu-manila.webp';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="relative border-b-2 border-zinc-300 bg-zinc-200 lg:border-b-0 lg:border-r-2 lg:border-zinc-300">
          <img
            src={banner}
            alt="National University Manila"
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-zinc-900/10" />
        </div>

        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <nav aria-label="Authentication pages" className="mb-8 flex items-center gap-2">
              <NavLink
                to="/auth/signin"
                className={({ isActive }) =>
                  [
                    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50',
                    isActive
                      ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
                      : 'border-transparent text-zinc-500 hover:border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900',
                  ].join(' ')
                }
              >
                Sign In
              </NavLink>
              <NavLink
                to="/auth/signup"
                className={({ isActive }) =>
                  [
                    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50',
                    isActive
                      ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
                      : 'border-transparent text-zinc-500 hover:border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900',
                  ].join(' ')
                }
              >
                Sign Up
              </NavLink>
            </nav>
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
