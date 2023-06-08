import { links } from '../data/data.json';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div
      className={`fixed inset-x-0 z-40 flex min-h-screen flex-col justify-center bg-black md:hidden `}
    >
      <nav className="px-6" aria-label="Mobile menu">
        <ul
          className="space-y-5 font-Josefin text-2xl font-light uppercase text-slate-300"
          role="menu"
        >
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={closeMenu}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
