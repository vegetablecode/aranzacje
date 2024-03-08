const gallery = [
  '/images/golden.jpeg',
  '/arrange/boho.jpeg',
  '/arrange/oceanic.jpeg',
  '/images/boho.jpeg',
  '/arrange/cozydark.jpeg',
  '/arrange/default.jpeg',
  '/images/modernstudio.jpeg',
  '/arrange/marshall.jpeg',
  '/arrange/golden.jpeg',
  '/images/neons.jpeg',
  '/arrange/marble.jpeg',
  '/arrange/maximalist.jpeg',
  '/images/marshall.jpeg',
  '/arrange/midcentury.jpeg',
  '/arrange/modernstudio.jpeg',
  '/arrange/neons.jpeg',
];

const Gallery = () => (
  <div className="pt-8 lg:pb-8 flex flex-col lg:space-y-16 items-center">
    <div className="cr-wrapper">
      <div className="cr">
        <div className="flex space-x-4">
          {gallery.map((item) => (
            <div key={item} className="cr-slide flex">
              <img
                src={item}
                alt="gallery"
                className="h-64 w-auto shadow-xl cursor-pointer rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
