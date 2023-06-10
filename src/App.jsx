import Navbar from './components/Navbar';
import heroDesktop from './assets/desktop/image-hero.jpg';
import heroMobile from './assets/mobile/image-hero.jpg';
import interactiveDesktop from './assets/desktop/image-interactive.jpg';
import interactiveMobile from './assets/mobile/image-interactive.jpg';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Navbar />
      <main>
        <section className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-gradient-to-r from-black/60 md:block"
          />
          <picture>
            <source media="(min-width: 768px)" srcSet={heroDesktop} />
            <img src={heroMobile} alt="Gamer playing racing simulator game" />
          </picture>
          <header className="absolute left-6 right-6 top-1/2 max-w-md -translate-y-1/2 border-2 p-5 lg:max-w-lg lg:p-6 xl:left-40 xl:top-[22rem] xl:max-w-2xl">
            <h1 className="font-Josefin text-4xl uppercase text-white lg:text-5xl xl:text-7xl">
              Immersive experiences <br className="hidden lg:block" /> that{' '}
              <br className="md:hidden" /> deliver
            </h1>
          </header>
        </section>

        <section
          id="about"
          className="-scroll-mt-20 bg-white px-6 py-5 lg:py-40"
        >
          <div className="relative mx-auto max-w-6xl">
            <picture>
              <source media="(min-width: 768px)" srcSet={interactiveDesktop} />
              <img src={interactiveMobile} alt="Man playing with VR headset" />
            </picture>
            <header className="mx-auto bg-white px-4 py-10 text-center md:max-w-3xl md:px-10 lg:absolute lg:right-0 lg:top-1/2 lg:max-w-xl lg:px-14 lg:py-20 lg:text-left">
              <h2 className="font-Josefin text-3xl uppercase lg:text-5xl">
                The leader in interactive VR
              </h2>
              <p className="mt-5 font-Alata text-gray-500">
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </header>
          </div>
        </section>

        <section className="px-6 py-10">
          <div className="mx-auto max-w-6xl">
            <header className="flex items-center justify-between ">
              <h2 className="mx-auto font-Josefin text-3xl uppercase md:mx-0 lg:text-5xl">
                Our creations
              </h2>
              <button className="hidden border border-black px-8 py-1 font-Alata text-sm uppercase tracking-widest transition hover:bg-black hover:text-white md:block">
                See all
              </button>
            </header>

            <Gallery />

            <button className="mx-auto block border border-black px-8 py-2 font-Alata uppercase tracking-widest transition hover:bg-black hover:text-white md:hidden">
              See all
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
