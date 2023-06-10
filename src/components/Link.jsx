const Link = ({ link, className }) => {
  return (
    <li className={className}>
      <a
        href={`#${link.toLowerCase()}`}
        className="relative before:absolute before:-bottom-3 before:left-1/2 before:-translate-x-1/2 before:rounded-md before:bg-white before:hover:h-0.5 before:hover:w-1/2"
      >
        {link}
      </a>
    </li>
  );
};

export default Link;
