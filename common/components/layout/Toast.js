import { toast, ToastContainer } from 'react-toastify';

const makeSuccessToast = (message) => {
  toast.success(message);
};

const makeErrorToast = (message) => {
  toast.error(message);
};

const Toast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export { Toast, makeErrorToast, makeSuccessToast };
