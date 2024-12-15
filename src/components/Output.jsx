
import PropTypes from "prop-types";

const Output = ({ result }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <h3>Результат выполнения:</h3>
      {result.status === "success" ? (
  <pre style={{ color: "green", whiteSpace: "pre-wrap" }}>{result.output}</pre>
) : (
  <pre style={{ color: "red", whiteSpace: "pre-wrap" }}>{result.error}</pre>
)}

    </div>
  );
};

Output.propTypes = {
    result: PropTypes.shape({
      status: PropTypes.string.isRequired,
      output: PropTypes.string.isRequired,
      error: PropTypes.string,
    }).isRequired,
  };

export default Output;
