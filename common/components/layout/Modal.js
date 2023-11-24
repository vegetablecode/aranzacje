import { XMarkIcon } from '@heroicons/react/24/outline';

export const openModal = () => document.getElementById('modal').showModal();
export const openModalWithId = (id) => document.getElementById(id).showModal();

const Modal = ({ title, content, id = 'modal' }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <div className="w-full flex justify-between items-center">
          <div className="font-bold text-lg">{title}</div>
          <form method="dialog">
            <button className="btn btn-circle btn-ghost">
              <XMarkIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
        <div className="py-4">{content}</div>
      </div>
    </dialog>
  );
};

export default Modal;
