const GalleryItem = ({ title, image }) => {
  return (
    <div className="group relative cursor-pointer">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/50 transition group-hover:bg-white/70 group-hover:bg-none md:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-t from-black/60 transition group-hover:bg-white/70 group-hover:bg-none md:block"
      />
      <picture>
        <source media="(min-width: 768px)" srcSet={image.desktop} />
        <img src={image.mobile} alt={title} />
      </picture>
      <div
        className={`absolute bottom-5 left-8 text-white xl:bottom-8 xl:left-10 ${
          title === 'The grid' ? 'w-1/4' : 'w-2/5 md:w-3/5'
        }`}
      >
        <h3 className="font-Josefin text-2xl uppercase leading-6 transition group-hover:text-black xl:text-3xl xl:leading-8">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default GalleryItem;
