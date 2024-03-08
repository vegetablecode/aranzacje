import Modal, {
  closeModalWithId,
  openModalWithId,
} from 'common/components/layout/Modal';
import { useRouter } from 'next/navigation';
import { PlusIcon } from '@heroicons/react/24/outline';
import StylePickerModal from './StylePickerModal';
import { useState } from 'react';
import BottomPrimaryButton from './BottomPrimaryButton';
import usePhotoStore from '../store';

const parts = [
  {
    id: 'design',
    icon: '/parts/design.png',
  },
  {
    id: 'flooring',
    icon: '/parts/flooring.png',
  },

  {
    id: 'walls',
    icon: '/parts/walls.png',
  },
  {
    id: 'ceiling',
    icon: '/parts/ceiling.png',
  },

  {
    id: 'windows',
    icon: '/parts/windows.png',
  },

  {
    id: 'doors',
    icon: '/parts/doors.png',
  },

  {
    id: 'lamps',
    icon: '/parts/lamps.png',
  },

  {
    id: 'furniture',
    icon: '/parts/furniture.png',
  },
];

const pricing = [
  {
    id: 'day',
    text: 'Unlock for 24 hours',
    price: 3,
    old: 8,
  },
  {
    id: 'week',
    text: 'Unlock for 7 days',
    price: 6,
    old: 29,
  },
];

const PartCard = ({ id, icon, items }) => (
  <div
    onClick={() => openModalWithId(id)}
    className="flex cursor-pointer items-center justify-between py-3 px-4 card flex-row shadow bg-white border-neutral"
  >
    <div className="flex space-x-4">
      <div className="flex items-center justify-center">
        <img alt="icon" src={icon} className="h-12 w-12" />
      </div>
      <div>
        <div className="font-bold capitalize">{id}</div>
        <div className="flex flex-wrap">
          {items.map((item) => (
            <span
              key={item}
              className="p-0.5 px-2 my-1 bg-neutral rounded-xl text-sm mr-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
    <PlusIcon className="h-4 w-4" />
  </div>
);

const StyleBuilderModal = ({ setStyle }) => {
  const router = useRouter();
  const [design, setDesign] = useState([]);
  const [flooring, setFlooring] = useState([]);
  const [walls, setWalls] = useState([]);
  const [ceiling, setCeiling] = useState([]);
  const [windows, setWindows] = useState([]);
  const [doors, setDoors] = useState([]);
  const [lamps, setLamps] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const { setPrompt } = usePhotoStore();

  const resetForm = () => {
    setDesign([]);
    setFlooring([]);
    setWalls([]);
    setCeiling([]);
    setWindows([]);
    setDoors([]);
    setLamps([]);
    setFurniture([]);
  };

  const generatePrompt = () => {
    let prompt = '';
    if (design.length) {
      prompt = prompt.concat(design.join(' ') + ' design, ');
    }

    if (flooring.length) {
      prompt = prompt.concat(flooring.join(' ') + ' flooring, ');
    }

    if (walls.length) {
      prompt = prompt.concat(walls.join(' ') + ' walls, ');
    }

    if (ceiling.length) {
      prompt = prompt.concat(ceiling.join(' ') + ' ceiling, ');
    }

    if (windows.length) {
      prompt = prompt.concat(windows.join(' ') + ' windows, ');
    }

    if (doors.length) {
      prompt = prompt.concat(doors.join(' ') + ' doors, ');
    }

    if (lamps.length) {
      prompt = prompt.concat(lamps.join(' ') + ' lamps, ');
    }

    if (furniture.length) {
      prompt = prompt.concat(furniture.join(' ') + ' furniture, ');
    }
    return prompt;
  };

  const handleClose = () => {
    setPrompt(generatePrompt());
    closeModalWithId('builder');
    resetForm();
    setStyle('builder');
  };

  const renderContent = () => (
    <div className="flex flex-col space-y-4">
      <div className="text-2xl font-bold">🛠️ Style Builder</div>
      <div className="flex flex-col space-y-2">
        <PartCard id="design" icon="/parts/design.png" items={design} />
        <PartCard id="flooring" icon="/parts/flooring.png" items={flooring} />
        <PartCard id="walls" icon="/parts/walls.png" items={walls} />
        <PartCard id="ceiling" icon="/parts/ceiling.png" items={ceiling} />
        <PartCard id="windows" icon="/parts/windows.png" items={windows} />
        <PartCard id="doors" icon="/parts/doors.png" items={doors} />
        <PartCard id="lamps" icon="/parts/lamps.png" items={lamps} />
        <PartCard
          id="furniture"
          icon="/parts/furniture.png"
          items={furniture}
        />
        <StylePickerModal id="design" data={design} setData={setDesign} />
        <StylePickerModal id="flooring" data={flooring} setData={setFlooring} />
        <StylePickerModal id="walls" data={walls} setData={setWalls} />
        <StylePickerModal id="ceiling" data={ceiling} setData={setCeiling} />
        <StylePickerModal id="windows" data={windows} setData={setWindows} />
        <StylePickerModal id="doors" data={doors} setData={setDoors} />
        <StylePickerModal id="lamps" data={lamps} setData={setLamps} />
        <StylePickerModal
          id="furniture"
          icon="/parts/furniture.png"
          data={furniture}
          setData={setFurniture}
        />
      </div>
      <BottomPrimaryButton
        onClick={() => handleClose()}
        block
        text="Send to generator"
      />
    </div>
  );

  return <Modal id="builder" content={renderContent()} />;
};

export default StyleBuilderModal;
