const SocialLink = ({ Icon }) => {
  return (
    <li>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="relative block before:absolute before:inset-x-0 before:-bottom-3 before:block before:rounded-md before:bg-white before:hover:h-0.5"
      >
        <Icon size={30} />
      </a>
    </li>
  );
};

export default SocialLink;
