import Modal from 'common/components/layout/Modal';

const HelpModal = () => {
  const renderMessageMe = () => (
    <a
      href="mailto:decoratlyapp@gmail.com"
      onClick={() => setStyle('default')}
      className="p-5 flex space-x-4 items-center justify-between card flex-row bg-gradient-to-r from-red-600  to-red-800 w-full"
    >
      <div className="flex space-x-4 items-center">
        <div className="card bg-base-100 p-4">❗️</div>
        <div className="font-bold text-white">Zgłoś problem</div>
      </div>
    </a>
  );

  const renderMessageAuthor = () => (
    <a
      href="mailto:kamiluhryn@gmail.com"
      onClick={() => setStyle('default')}
      className="p-5 flex space-x-4 items-center justify-between card flex-row bg-gradient-to-r from-green-600  to-green-800 w-full"
    >
      <div className="flex space-x-4 items-center">
        <div className="card bg-base-100 p-4">✉️</div>
        <div className="font-bold text-white">Napisz do nas</div>
      </div>
    </a>
  );

  const renderContent = () => (
    <div className="flex flex-col space-y-4">
      <div className="text-2xl font-bold">Jesteśmy tu, by Ci pomóc 👋</div>
      {renderMessageMe()}
      {renderMessageAuthor()}
    </div>
  );

  return <Modal title="Hello! 👋" id="help" content={renderContent()} />;
};

export default HelpModal;
