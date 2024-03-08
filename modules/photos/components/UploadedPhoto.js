import PhotoFrame from './PhotoFrame';

const UploadedPhoto = ({ image }) => {
  return (
    <div className="card">
      <PhotoFrame image={image} />
    </div>
  );
};

export default UploadedPhoto;
