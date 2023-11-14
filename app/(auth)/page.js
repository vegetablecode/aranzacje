'use client';

import { PhotoIcon, PlusIcon } from '@heroicons/react/24/outline';

const Header = () => (
  <div className="text-center">
    <div className="text-md uppercase">witaj w</div>
    <div className="text-transparent text-4xl font-bold bg-clip-text bg-gradient-to-b from-red-600 to-orange-600">
      Aranżacje AI <span className="text-white">🤖</span>
    </div>
  </div>
);

const PhotoFrame = () => (
  <div class="card bg-neutral flex flex-col items-center justify-center space-y-4 w-full py-10 px-5 text-center border border-dashed">
    <PhotoIcon className="h-10 w-10" />
    <div>Aby rozpocząć wykonaj zdjęcia pomieszczenia 📷</div>
  </div>
);

const BottomPrimaryButton = ({ text, icon }) => (
  <div className="fixed bottom-0 p-5 w-full">
    <button className="btn btn-primary w-full">
      {icon}
      {text}
    </button>
  </div>
);

const Home = () => {
  return (
    <div className="w-screen min-h-screen px-5 pt-12 pb-20 flex flex-col space-y-8 items-center justify-start">
      <Header />
      <PhotoFrame />
      <div className="text-sm text-center text-gray-400 px-8">
        Postaraj się, żeby zdjęcie było dobrze oświetlone! Im lepsza jakość
        zdjęcia, tym lepszy efekt końcowy.
      </div>
      <BottomPrimaryButton
        text="Dodaj zdjęcie"
        icon={<PlusIcon className="w-5 h-5" />}
      />
    </div>
  );
};

export default Home;
