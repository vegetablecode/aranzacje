import Modal, { closeModalWithId } from 'common/components/layout/Modal';
import classNames from 'common/utils/classNames';
import { useRouter } from 'next/navigation';
import BottomPrimaryButton from './BottomPrimaryButton';

const styles = [
  {
    id: 'design',
    icon: '💁‍♀️',
    items: [
      'traditional',
      'modern',
      'contemporary',
      'mid-century modern',
      'industrial',
      'scandinavian',
      'bohemian',
      'transitional',
      'coastal',
      'rustic',
    ],
  },
  {
    id: 'colors',
    icon: '🎨',
    items: [
      'dark',
      'light',
      'white',
      'beige',
      'gray',
      'blue',
      'green',
      'yellow',
      'orange',
      'purple',
      'pink',
      'black',
      'metallics',
      'earth tones',
    ],
  },
  {
    id: 'materials',
    icon: '🛠️',
    items: [
      'wooden',
      'metal',
      'glass',
      'marble',
      'stone',
      'textiles',
      'leather',
      'plastic',
      'ceramic',
      'bamboo',
      'vinyl',
      'tile',
      'masonry',
    ],
  },
  {
    id: 'textures',
    icon: '🗿',
    items: [
      'smooth',
      'soft',
      'rough',
      'hard',
      'neutral',
      'shiny',
      'matte',
      'patterned',
      'woven',
      'tactile',
      'translucent',
      'lavared',
    ],
  },
];

const StylePickerModal = ({ id, data, setData }) => {
  const router = useRouter();

  const handleClick = (item) => {
    if (data.find((id) => id === item)) {
      setData(data.filter((id) => id !== item));
    } else {
      setData(data.concat([item]));
    }
  };

  const renderContent = () => (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-6">
        {styles.map((style) => (
          <div key={style.id} className="flex flex-col space-y-2">
            <div className="text-xl capitalize">
              {style.icon} {style.id}
            </div>
            <div className="flex flex-wrap">
              {style.items.map((item) => (
                <button
                  key={item}
                  onClick={() => handleClick(item)}
                  className={classNames(
                    'py-1 px-2 rounded-xl my-1 mr-2',
                    data.find((id) => id === item)
                      ? 'bg-primary text-white'
                      : 'bg-neutral'
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <BottomPrimaryButton
        onClick={() => closeModalWithId(id)}
        block
        text="Save ✨"
      />
    </div>
  );

  return <Modal id={id} content={renderContent()} />;
};

export default StylePickerModal;
