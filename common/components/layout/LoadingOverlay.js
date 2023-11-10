import Spinner from './Spinner';

const LoadingOverlay = () => {
  return (
    <div className="absolute left-0 flex flex-col justify-center items-center w-screen h-screen bg-base-100 z-50">
      <Spinner />
    </div>
  );
};

export default LoadingOverlay;
