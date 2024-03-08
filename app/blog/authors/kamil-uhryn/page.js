import Metadata from 'common/components/layout/Metadata';

const Page = () => {
  return (
    <>
      <Metadata />
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row xl:space-x-16">
        <div className="text-center sm:text-left space-y-2 flex flex-col">
          <div className="text-gray-500 uppercase text-sm font-bold">
            authors
          </div>
          <div className="text-2xl font-bold">Kamil Uhryn</div>
          <div className="text-lg font-semibold">Maker of Decoratly</div>
          <div className="text-lg">
            Kamil is a developer and an enrtepreneur. He's building web and
            mobile apps using the latest technology.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/profile.jpg"
            alt="profile photo"
            className="card max-w-sm"
          />
        </div>
      </div>
      <div className="h-48" />
    </>
  );
};

export default Page;
