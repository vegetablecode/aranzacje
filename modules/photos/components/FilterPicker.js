import { PaintBrushIcon, PlusIcon } from '@heroicons/react/24/outline';
import Modal, {
  closeModalWithId,
  openModalWithId,
} from 'common/components/layout/Modal';
import { FILTERS } from '../consts';
import classNames from 'common/utils/classNames';
import useAuthStore from 'modules/auth/store';
import isPro from 'common/utils/isPro';

const Filter = ({ style, onClick, currentId, model }) => {
  const { userData } = useAuthStore();
  return (
    <button
      onClick={onClick}
      className={classNames(
        'card shadow bg-white overflow-hidden',
        style.id === currentId ? 'border-black' : ''
      )}
    >
      <img
        src={(model === 'arrange' ? '/arrange' : '/images').concat(style.image)}
        alt="room"
        className="object-cover w-full h-36"
      />
      <div className="w-full bg-white flex justify-between items-center px-4 py-3">
        <div>{style.label}</div>
        {style.free && !isPro(userData?.proUntil) ? (
          <div className="badge badge-success border-0 text-xs font-bold uppercase">
            free
          </div>
        ) : (
          ''
        )}
      </div>
    </button>
  );
};

const FilterPicker = ({ style, setStyle, image, model }) => {
  const handleClick = (id) => {
    setStyle(id);
    closeModalWithId('filters');
  };

  const renderFilters = () => (
    <div className="flex flex-col space-y-8">
      {FILTERS.map((section) => (
        <div key={section.id} className="flex flex-col space-y-4">
          <div className="font-bold text-xl">{section.label}</div>
          {section.filters.map((item) => (
            <Filter
              model={model}
              key={item.id}
              style={item}
              currentId={style}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return <Modal id="filters" content={renderFilters()} />;
};

export default FilterPicker;
