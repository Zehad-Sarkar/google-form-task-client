import "../../src/App.css";
import { FaUpload } from "react-icons/fa";
const FileUpload = () => {
  return (
    <section className="upload">
      <h2>File Upload *</h2>
      <input
        type="file"
        name="file"
        className="fileInput"
        accept=".txt, .pdf"
      />
      <label htmlFor="fileInput">
        <FaUpload /> Add File
      </label>
    </section>
  );
};

export default FileUpload;
