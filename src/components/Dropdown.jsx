import "../../src/App.css";
const Dropdown = () => {
  return (
    <section className="dropdown">
      <h2> Dropdown *</h2>
      <select name="option">
        <option value="" disabled>
          Choose
        </option>
        <option value="option2">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </section>
  );
};

export default Dropdown;
