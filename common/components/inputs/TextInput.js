import classNames from 'common/utils/classNames';

const TextInput = (props) => {
  const { id, type, placeholder, register, watch, required, error } = props;
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={classNames('input', error ? 'input-error' : '')}
      register={register}
      watch={watch}
      required={required}
    />
  );
};

export default TextInput;
