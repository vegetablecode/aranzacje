import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'common/utils/classNames';

export const openModal = () => document.getElementById('modal').showModal();
export const openModalWithId = (id) => document.getElementById(id).showModal();
export const closeModalWithId = (id) => document.getElementById(id).close();

const Modal = ({
  content,
  id = 'modal',
  mini = false,
  handleClose,
  full,
  banner,
  icon,
}) => {
  return (
    <dialog
      id={id}
      className={classNames(
        'modal',
        full ? 'transform -translate-y-8 rounded-none' : ''
      )}
    >
      <div
        className={classNames(
          'modal-box bg-base-100 max-h-full sm:max-h-[calc(100vh-100px)] m-0',
          mini ? 'max-w-sm w-3/4' : 'w-full h-full',
          full ? 'rounded-none sm:rounded-xl' : ''
        )}
      >
        <form method="dialog">
          {banner ? (
            <div className="h-[130px]">
              <div className="bg-premium-pattern bg-center absolute top-0 left-0 z-10 h-36 w-full"></div>
              <button
                onClick={handleClose}
                className="p-2 -my-2 -ml-2 absolute z-50 bg-black bg-opacity-40 rounded-full"
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          ) : (
            <button onClick={handleClose} className="p-2 -my-2 -ml-2">
              {icon ? icon : <XMarkIcon className="h-6 w-6 " />}
            </button>
          )}
        </form>
        <div className="py-4">{content}</div>
      </div>
    </dialog>
  );
};

export default Modal;
