import Navbar from './components/Navbar';
import heroDesktop from './assets/desktop/image-hero.jpg';
import heroMobile from './assets/mobile/image-hero.jpg';

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
      </main>
    </div>
  );
}

export default App;
