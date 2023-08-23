import "../../src/App.css"
const McqSection = () => {
  return (
    <section className="mcq">
      <h2>MCQ *</h2>
      <input type="radio" name="radio" id="option1" required/>
      <label htmlFor="option1">Option 1</label>
      <br />
      <input type="radio" name="radio" id="option2" />
      <label htmlFor="option2">Option 2</label>
      <br />
      <input type="radio" name="radio" id="option3" />
      <label htmlFor="option3">Option 3</label>
      <br />
    </section>
  );
};

export default McqSection;
