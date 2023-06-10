import Logo from '../assets/Logo';
import { links } from '../data/data.json';
import { socials } from '../data/footerData';
import Link from './Link';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className="mt-20 bg-black px-6 py-14 lg:py-10">
      <section className="mx-auto max-w-6xl space-y-5 text-center text-white md:text-start">
        <div className="justify-between md:flex">
          <Logo className="mx-auto md:mx-0" />
          <ul className="hidden justify-center space-x-5 md:flex md:space-x-3">
            {socials.map(({ Icon, id }) => (
              <SocialLink key={id} Icon={Icon} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 font-Alata md:flex-row md:pt-3">
          <ul className="space-y-5 py-5 md:space-x-4 md:py-0 xl:space-x-7">
            {links.map((link) => (
              <Link key={link} link={link} className={'md:inline'} />
            ))}
          </ul>
          <ul className="flex items-center justify-center gap-3 md:hidden">
            {socials.map(({ Icon, id }) => (
              <SocialLink key={id} Icon={Icon} />
            ))}
          </ul>
          <p className="text-gray-500">
            &copy; 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
