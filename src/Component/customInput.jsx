const CustomInput = ({
  type,
  placeholder,
  value,
  onChange,
  required,
  name,
}) => {
  return (
    <div className="input-field">
      <i className="fas fa-lock"></i>
      <input
        name={name}
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
export default CustomInput;
