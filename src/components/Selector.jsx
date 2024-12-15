
import PropTypes from "prop-types";
import Select from "react-select";

const Selector = ({ selected, onChange }) => {
  const options = [
    { value: "javascript", label: "JavaScript" },
    { value: "php", label: "PHP" },
  ];

  const handleChange = (selectedOption) => {
    onChange(selectedOption.value);
  };

  return (
    <div style={{display: "flex",gap: "10px",justifyContent: "flex-start", alignItems: "center", marginBottom: "20px"}}>
      <label htmlFor="language">Выберите язык: </label>
      <Select
        id="language"
        value={options.find((option) => option.value === selected)}
        onChange={handleChange}
        options={options}
        className="language-select"
        styles={{
          control: (styles) => ({
            ...styles,
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#f0f0f0",
            borderColor: "#ccc",
            borderRadius: "4px",
            position: "relative",
            zIndex: 2,
            cursor: "pointer",
          }),
          option: (styles) => ({
            ...styles,
            fontSize: "14px",
          }),
        }}
      />
    </div>
  );
};

Selector.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Selector;
