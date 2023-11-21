import classNames from 'common/utils/classNames';

const TextInput = (props) => {
  const {
    id,
    type,
    placeholder,
    value,
    onChange,
    register,
    watch,
    required,
    error,
  } = props;
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={classNames('input', error ? 'input-error' : '')}
      value={value}
      onChange={onChange}
      register={register}
      watch={watch}
      required={required}
    />
  );
};

export default TextInput;
