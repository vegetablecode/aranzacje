'use client';

import Metadata from 'common/components/layout/Metadata';
import Footer from 'modules/landing/components/Footer';
import Hero from 'modules/landing/components/Hero';
import Navbar from 'modules/landing/components/Navbar';
import Showcase from 'modules/landing/components/Showcase';
import Link from 'next/link';

const About = () => (
  <div className="hero py-4 bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src="/makeover-example.jpg"
        className="sm:max-w-sm max-w-64 card shadow-2xl sm:m-12"
      />
      <div>
        <h1 className="text-3xl sm:text-5xl font-bold">
          Projektowanie wnętrz i przestrzeni zewnętrznych z wykorzystaniem
          sztucznej inteligencji
        </h1>
        <div className="py-6">
          Twórz niesamowite obrazy dowolnej przestrzeni w kilka sekund dzięki
          naszemu rewolucyjnemu narzędziu do projektowania AI. Jest to idealne
          rozwiązanie dla profesjonalistów i osób prywatnych, które chcą
          projektować z łatwością i elastycznością. Możesz wypróbować różne
          style, kolory i układy bez żadnych ograniczeń.
        </div>
        <button className="btn btn-primary">Zacznij teraz!</button>
      </div>
    </div>
  </div>
);

const Step = ({ icon, title, description }) => (
  <div className="text-center flex flex-col max-w-sm space-y-4 items-center justify-center">
    <div className="flex items-center justify-center h-24 w-24 shadow-2xl rounded-full bg-white">
      <div className="text-4xl">{icon}</div>
    </div>
    <div>
      <div className="font-semibold text-xl py-2">{title}</div>
      <div>{description}</div>
    </div>
  </div>
);

const Preview = () => (
  <div className="py-12 flex flex-col items-center justify-center space-y-4">
    <div className="flex flex-col items-center justify-center space-y-2">
      <h1 className="text-3xl sm:text-5xl font-bold">Jak to działa?</h1>
      <div>Odmień swoje wnętrza w 3 prostych krokach:</div>
    </div>
    <div className="py-6 grid gap-4 grid-cols-3">
      <Step
        icon="📸"
        title="Wgraj zdjęcie pokoju"
        description="Może to być dowolne pomieszczenie w domu, podwórko, balkon lub inna przestrzeń, którą chcesz udekorować."
      />
      <Step
        icon="🎨"
        title="Ustal swój własny styl i preferencje"
        description="Powiedz nam, jaki styl lubisz, jakie kolory preferujesz, jakich mebli potrzebujesz i jakie inne szczegóły są dla Ciebie ważne."
      />
      <Step
        icon="🏡"
        title="Generuj i przeglądaj projekty"
        description="Nasza sztuczna inteligencja stworzy realistyczne i oszałamiające obrazy Twojej przestrzeni z różnymi projektami, które pasują do Twojego stylu i preferencji."
      />
    </div>
  </div>
);

const Page = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-8 py-4">
        <Navbar />
        <Hero />
        <About />
        <Preview />
        <Showcase />
      </div>
      <Footer />
    </>
  );
};

export default Page;
