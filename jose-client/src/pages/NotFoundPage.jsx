import Button from '../components/Button';
import banner from '../assets/img/nu_bulldogex_banner.jpg';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl bg-zinc-100">
            <div className="relative h-72 bg-zinc-200 sm:h-96 lg:h-[32rem]">
              <img
                src={banner}
                alt="National University Bulldogs Exchange banner"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-zinc-900/20" />
            </div>
          </div>

          <div className="mt-10 max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Error
            </p>
            <h1 className="text-5xl font-bold leading-tight text-zinc-900 sm:text-6xl">
              404
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
              Page not found. This route doesn’t exist (or it was moved). Use the links below to get back to the
              National University shop pages.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/">Back Home</Button>
              <Button to="/products">View Products</Button>
              <Button to="/about">About</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
