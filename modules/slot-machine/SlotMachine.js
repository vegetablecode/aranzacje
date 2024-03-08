import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

const icons = ['💸', '💎', '🤑', '🖤', '🪴', '🏡'];

const SlotMachine = () => {
  const [slot1, setSlot1] = useState(icons[0]);
  const [slot2, setSlot2] = useState(icons[0]);
  const [slot3, setSlot3] = useState(icons[0]);
  const [rolling, setRolling] = useState(false);
  const [points, setPoints] = useState(-1);

  useEffect(() => {
    if (slot1 === slot2 && slot2 === slot3) {
      setPoints(points + 1);
    }
  }, [rolling]);

  const slotRefs = [useRef(), useRef(), useRef()];

  const triggerSlotRotation = (ref) => {
    const setTop = (top) => {
      ref.current.style.top = `${top}px`;
    };

    const randomOption = Math.floor(Math.random() * icons.length);
    const chosenOption = icons[randomOption];

    setTop(-ref.current.children[randomOption].offsetTop + 2);

    return chosenOption;
  };

  const roll = () => {
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
    }, 700);

    slotRefs.forEach((ref, i) => {
      const selected = triggerSlotRotation(ref);
      i === 0
        ? setSlot1(selected)
        : i === 1
        ? setSlot2(selected)
        : setSlot3(selected);
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="SlotMachine card border-base-100 p-5 flex flex-col items-center">
        <div className="pb-4">points: {points}</div>
        <div className="flex space-x-2">
          {[slot1, slot2, slot3].map((selected, index) => (
            <div className="slot" key={index}>
              <section>
                <div className="container" ref={slotRefs[index]}>
                  {icons.map((fruit, i) => (
                    <div key={i}>
                      <span>{fruit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          ))}
        </div>
        <div
          className={!rolling ? 'roll rolling' : 'roll'}
          onClick={!rolling && roll}
          disabled={rolling}
        >
          {rolling ? 'Rolling...' : 'ROLL!'}
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;
