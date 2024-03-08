import { PlusIcon } from '@heroicons/react/24/outline';
import BottomPrimaryButton from './BottomPrimaryButton';
import Photo from './Photo';

const PhotoFrame = ({ image, isLoading, progress, onClick, mode, setMode }) => (
  <>
    {image ? (
      <div className="overflow-hidden flex flex-col items-center justify-center text-center">
        <Photo src={image} mode={mode} setMode={setMode} />
        {isLoading ? (
          <>
            <div className="bg-black absolute h-48 w-auto opacity-40"></div>
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
      <>
        <button
          onClick={onClick}
          className="card bg-white shadow flex flex-col items-center justify-center space-y-4 w-full py-10 px-5 text-center h-48"
        >
          <PlusIcon className="h-6 w-6" />
          <div>Click to add a Photo</div>
        </button>
      </>
    )}
    {!image || isLoading ? (
      <BottomPrimaryButton
        isLoading={isLoading}
        onClick={onClick}
        text="Take a photo 🤳"
      />
    ) : (
      ''
    )}
  </>
);

export default PhotoFrame;
