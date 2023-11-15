import { PhotoIcon } from '@heroicons/react/24/outline';

const PhotoFrame = ({ image, isLoading, progress }) =>
  image ? (
    <div className="card bg-neutral overflow-hidden flex flex-col items-center justify-center text-center border border-dashed">
      <img src={image} alt="room" className="w-auto h-64" />
      {isLoading ? (
        <>
          <div className="bg-black absolute h-64 w-full opacity-40"></div>
          <div className="absolute">
            <div
              className="radial-progress text-white"
              style={{ '--value': progress }}
              role="progressbar"
            >
              {progress}%
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  ) : (
    <div className="card bg-neutral flex flex-col items-center justify-center space-y-4 w-full py-10 px-5 text-center h-64 border border-dashed">
      <PhotoIcon className="h-10 w-10" />
      <div>Aby rozpocząć wykonaj zdjęcia pomieszczenia 📷</div>
    </div>
  );

export default PhotoFrame;
