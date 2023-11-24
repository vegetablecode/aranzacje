import Modal from 'common/components/layout/Modal';
import useAuthStore from '../store';
import { timestampToDate } from 'common/utils/dateConverters';
import moment from 'moment';
import isPro from 'common/utils/isPro';
import { setUser } from '@sentry/nextjs';
import { logout } from '../lib';

const UserModal = () => {
  const { userData } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  const renderContent = () => (
    <div>
      {isPro(userData.proUntil) ? (
        <div>
          Masz dostęp do funkcji premium do:
          <span className="ml-2 text-primary">
            {moment(timestampToDate(userData.proUntil)).format('DD.MM.YYYY')}
          </span>
          ✨
        </div>
      ) : (
        <div>Konto premium nie jest aktywne 😕</div>
      )}
      <div className="mt-8 flex justify-center w-full">
        <button onClick={() => handleLogout()} className="btn">
          Wyloguj
        </button>
      </div>
    </div>
  );

  return <Modal title="Cześć! 👋" id="user-menu" content={renderContent()} />;
};

export default UserModal;
