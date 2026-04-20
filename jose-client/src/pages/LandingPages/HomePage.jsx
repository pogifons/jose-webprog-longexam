import Button from '../../components/Button';
import hero from '../../assets/img/hero.jpg';
import products from '../../assets/product-content.js';
import tradUnifImg from '../../assets/products/tradunif.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={hero}
                    alt="National University campus hero background"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/45" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 ml-auto grid w-fit grid-cols-2 gap-3">
                            <Button to="/products">Shop Now</Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                            <div className="col-span-2 flex justify-center">
                                <Button to="/auth/signin" variant="secondary">
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Products
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Categories
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Orders
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Simple store cards</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="relative aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            {products[0]?.imageSrc ? (
                                <img
                                    src={products[0].imageSrc}
                                    alt={products[0].imageAlt ?? products[0].title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <div className="h-12 w-12 border-2 border-zinc-300 bg-zinc-100" />
                                </div>
                            )}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">View Products</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="relative aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            <img
                                src={tradUnifImg}
                                alt="National University traditional uniform"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            {/* fallback not needed: local asset */}
                            {/* {products[6]?.imageSrc ? (
                                <img
                                    src={products[6].imageSrc}
                                    alt={products[6].imageAlt ?? products[6].title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <div className="h-12 w-12 border-2 border-zinc-300 bg-zinc-100" />
                                </div>
                            )} */}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">NU Traditional Uniform</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Official National University traditional uniform—clean, campus-ready, and ideal for school days and required events.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="relative aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            {products[3]?.imageSrc ? (
                                <img
                                    src={products[3].imageSrc}
                                    alt={products[3].imageAlt ?? products[3].title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <div className="h-12 w-12 border-2 border-zinc-300 bg-zinc-100" />
                                </div>
                            )}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
