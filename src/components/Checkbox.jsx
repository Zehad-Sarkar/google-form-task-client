import "../../src/App.css";

const Checkbox = () => {
  return (
    <section className="checkbox">
      <h2>Checkbox *</h2>
      <div>
        <input type="checkbox" name="option1" />
        <label htmlFor="option1">Option 1</label> <br />
        <input type="checkbox" name="option2" />
        <label htmlFor="option2">Option 2</label> <br />
        <input type="checkbox" name="option3" />
        <label htmlFor="option3">Option 3</label> <br />
      </div>
    </section>
  );
};

export default Checkbox;
