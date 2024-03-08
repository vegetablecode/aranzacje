import classNames from 'common/utils/classNames';

const BottomPrimaryButton = ({
  text,
  icon,
  onClick,
  isLoading,
  disabled,
  modal = false,
  block,
}) => (
  <div
    className={classNames(
      'w-full max-w-xl',
      modal ? 'bottom-[29px]' : 'bottom-0',
      block ? '' : 'fixed p-5 mx-auto left-0 right-0 z-40 '
    )}
  >
    <button
      onClick={onClick}
      className={classNames(
        'btn btn-primary w-full',
        isLoading ? 'btn-loading' : '',
        disabled ? 'btn-disabled' : ''
      )}
    >
      {isLoading ? <span className="loading loading-spinner"></span> : icon}
      {text}
    </button>
  </div>
);

export default BottomPrimaryButton;
