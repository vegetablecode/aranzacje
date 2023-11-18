import classNames from 'common/utils/classNames';

const BottomPrimaryButton = ({ text, icon, onClick, isLoading }) => (
  <div className="fixed bottom-0 z-50 p-5 w-full">
    <button
      onClick={onClick}
      className={classNames(
        'btn btn-primary w-full',
        isLoading ? 'btn-loading' : ''
      )}
    >
      {isLoading ? <span className="loading loading-spinner"></span> : icon}
      {text}
    </button>
  </div>
);

export default BottomPrimaryButton;
