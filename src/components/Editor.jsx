import MonacoEditor from "react-monaco-editor";
import PropTypes from "prop-types";

const Editor = ({ language, code, setCode }) => {
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <MonacoEditor
      language={language}
      value={code}
      onChange={handleCodeChange}
      options={{
        selectOnLineNumbers: true,
        automaticLayout: true,
        theme: "vs-dark",
      }}
      height="400px"
    />
  );
};

Editor.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
};

export default Editor;
