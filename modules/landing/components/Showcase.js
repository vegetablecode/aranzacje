import ModelSwitcher from 'modules/photos/components/ModelSwitcher';
import { getAllStyles } from 'modules/photos/utils';
import Link from 'next/link';
import { useState } from 'react';

const Showcase = () => {
  const [model, setModel] = useState('makeover');
  return (
    <div className="flex flex-col text-center items-center space-y-16 pb-12">
      <div className="flex flex-col max-w-3xl space-y-2">
        <div className="font-bold text-4xl">
          Dwa tryby renderowaia dopasowane pod Twoje potrzeby! 👌
        </div>
        <div className="opacity-80 text-xl">
          Wybieraj pomiędzy trybem aranacji i remontu
        </div>
        <div class="flex pt-2 pb-4 justify-center items-center">
          <ModelSwitcher model={model} setModel={setModel} />
        </div>
        <img
          className="card w-full max-w-2xl"
          alt="room"
          src={`/${
            model === 'arrange' ? 'arrange' : 'images'
          }/modernstudio.jpeg`}
        />
      </div>
      <div className="flex flex-col max-w-3xl space-y-2">
        <div className="font-bold text-4xl">
          27 zdefiniowanych stylów, które moesz wybrać! 🎨
        </div>
        <div className="opacity-80 text-xl">
          Stworzyliśmy aż 27 unikatowych stylów, które możesz przymierzyć na
          swoich pomieszczeniach!
        </div>
        <div className="carousel carousel-center space-x-2 w-full rounded-box">
          {getAllStyles().map((style) => (
            <div key={style.image} className="carousel-item w-1/2">
              <img
                src={'/images' + style.image}
                alt="styles"
                className="card"
              />
            </div>
          ))}
        </div>
        <Link href="/photos">
          <button className="btn mt-6 btn-primary">
            Wgraj swoje zdjęcie 📸
          </button>
        </Link>
      </div>
      <div className="flex flex-col max-w-3xl space-y-2">
        <div className="font-bold text-4xl">Twórz własne style! ✍️</div>
        <div className="opacity-80 text-xl">
          Użyj naszego <span className="underline">kreatora styli</span> by
          zaprojektować swoje wymarzone wnętrze!
        </div>
        <div className="flex justify-center items-center flex-col space-y-4">
          <img
            src="/stylebuilder.png"
            className="w-full card max-w-lg"
            alt="styles"
          />
          <img
            src="/styles.png"
            className="w-full card max-w-lg"
            alt="styles"
          />
        </div>
      </div>
      <div className="flex bg-white p-8 card shadow flex-col max-w-3xl space-y-2">
        <div className="font-bold text-4xl">
          Odmień swoje wnętrze już dziś! ☀️
        </div>
        <div className="opacity-80 text-xl">
          Wgraj zdjęcie pomieszczenia, by rozpocząć!
        </div>
        <Link href="/photos" className="pt-4">
          <button className="btn btn-primary">Wgraj zdjęcie ✨</button>
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
