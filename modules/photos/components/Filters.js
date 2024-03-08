import { openModalWithId } from 'common/components/layout/Modal';
import Navbar from './Navbar';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import classNames from 'common/utils/classNames';
import { getAllStyles } from '../utils';
import Badge from 'common/components/layout/Badge';
import useAuthStore from 'modules/auth/store';
import isPro from 'common/utils/isPro';
import UnlockWeek from './UnlockWeek';
import UnlockDay from './UnlockDay';

const Header = ({ children, spaceTop = true, handleOptions }) => (
  <div
    className={classNames(
      'flex items-center justify-between',
      spaceTop ? 'pt-4' : ''
    )}
  >
    <div className="font-bold text-2xl">{children}</div>
    {handleOptions ? (
      <button
        className="text-white opacity-80 uppercase font-bold text-sm"
        onClick={handleOptions}
      >
        See All
      </button>
    ) : (
      ''
    )}
  </div>
);

const StyleCarousel = ({ items, style, setStyle, model }) => {
  const imgPath = model === 'arrange' ? '/arrange' : '/images';
  return (
    <div className="carousel carousel-center space-x-4 rounded-box">
      {items.map((item) => (
        <button
          key={item.id}
          className={classNames(
            'carousel-item h-56  shadow overflow-hidden card bg-center flex flex-col justify-end items-center',
            style === item.id ? 'border border-primary' : ''
          )}
          onClick={() => setStyle(item.id)}
        >
          <div
            className="bg-cover w-48 h-full"
            style={{
              backgroundImage: `url(${imgPath.concat(item.image)})`,
            }}
          ></div>
          <div className="bg-white text-center py-2 px-3 w-full">
            {item.label}
          </div>
        </button>
      ))}
    </div>
  );
};

const StyleBuilderButton = () => (
  <div
    onClick={() => openModalWithId('builder')}
    className="card cursor-pointer text-white p-5 flex flex-row justify-between bg-cover bg-orange-pattern"
  >
    <div className="flex flex-col space-y-16">
      <div className="font-bold text-3xl">
        Kliknij, by stworzyć <br /> własny styl!
      </div>
      <div className="text-xl font-semibold">🛠️ Kreator styli</div>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img
        alt="brush"
        src="/icons/brush.png"
        className="absolute right-0 h-[145px]"
      />
    </div>
  </div>
);

const Filters = ({ style, setStyle, setPlan, model, setModel }) => {
  const router = useRouter();
  const { userData } = useAuthStore();
  const isUserPro = isPro(userData?.proUntil);

  const renderNavMenu = () => (
    <>
      <div className="flex space-x-2 items-center">
        {isUserPro ? (
          <div className="absolute -ml-12">
            <Badge text="pro" />
          </div>
        ) : (
          ''
        )}
        <button
          onClick={() => openModalWithId('filter-menu')}
          className="p-3 rounded-full bg-neutral"
        >
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </button>
      </div>
    </>
  );

  const renderNavbar = () => (
    <>
      <Navbar
        showGoBack
        onPrev={() => router.push('/photos')}
        menu={renderNavMenu()}
      />
      {isUserPro ? (
        ''
      ) : (
        <>
          <Header spaceTop={false}>🔓 Odblokuj wszystkie style</Header>
          <UnlockWeek setPlan={setPlan} />
        </>
      )}
    </>
  );

  return (
    <div className="flex space-y-4 w-full flex-col">
      {isUserPro ? (
        ''
      ) : (
        <>
          <Header>🔐 Odblokuj na tydzień!</Header>
          <UnlockWeek setPlan={setPlan} />
        </>
      )}
      <Header>🧑‍🎨 Stwórz swój styl</Header>
      <StyleBuilderButton />
      <Header handleOptions={() => openModalWithId('filters')}>
        😎 Popularne style
      </Header>
      <StyleCarousel
        model={model}
        style={style}
        setStyle={setStyle}
        items={getAllStyles().filter((item) => item.popular)}
      />
      {isUserPro ? (
        ''
      ) : (
        <>
          <Header>📸 Jednodniowa aranżacja</Header>
          <UnlockDay setPlan={setPlan} />
        </>
      )}
    </div>
  );
};

export default Filters;
