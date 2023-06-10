import { useState } from 'react';
import Logo from '../assets/Logo';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import MobileMenu from './MobileMenu';
import { links } from '../data/data.json';
import Link from './Link';

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function setBodyOverflow(value) {
    if (typeof window !== 'undefined' && window.document) {
      document.body.style.overflow = value;
    }
  }

  function openMenu() {
    setOpenMobileMenu(true);
    setBodyOverflow('hidden');
  }

  function closeMenu() {
    setOpenMobileMenu(false);
    setBodyOverflow('unset');
  }

  return (
    <header className="bg-black">
      <section
        className={`inset-x-0 z-50 mx-auto flex max-w-6xl items-center justify-between px-6 pt-9 xl:pt-16
        ${openMobileMenu ? 'fixed' : 'absolute'}
        `}
        role="navigation"
      >
        <Logo className="text-white" />
        {openMobileMenu ? (
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="md:hidden"
          >
            <AiOutlineClose
              size={30}
              className={` ${openMobileMenu ? 'text-white' : ''}`}
            />
          </button>
        ) : (
          <button
            onClick={openMenu}
            aria-label="Open Menu"
            className="md:hidden"
          >
            <AiOutlineMenu size={30} color="white" />
          </button>
        )}

        <nav className="hidden md:block">
          <ul className="flex gap-7 font-Alata text-white">
            {links.map((link) => (
              <Link key={link} link={link} />
            ))}
          </ul>
        </nav>
      </section>
      {openMobileMenu && <MobileMenu closeMenu={closeMenu} />}
    </header>
  );
};

export default Navbar;
