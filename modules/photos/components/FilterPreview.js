import usePhotoStore from '../store';
import { getAllStyles } from '../utils';

const FilterPreview = ({ style, model }) => {
  const { prompt } = usePhotoStore();
  const imgPath = model === 'arrange' ? '/arrange' : '/images';

  const styleData = getAllStyles().find((item) => item.id === style);
  return style === 'builder' ? (
    <div className="card w-full shadow h-48 bg-white  p-5">{prompt}</div>
  ) : (
    <div className="card shadow w-full h-48 bg-white overflow-hidden full flex flex-col justify-end">
      <div
        className="bg-cover bg-center w-full h-64"
        style={{
          backgroundImage: `url(${
            style ? imgPath.concat(styleData?.image) : ''
          })`,
        }}
      ></div>
      <div class="bg-white py-3 px-4">{styleData?.label}</div>
    </div>
  );
};

export default FilterPreview;
