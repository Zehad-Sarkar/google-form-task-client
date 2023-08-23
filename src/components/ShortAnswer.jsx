import "../../src/App.css";
const ShortAnswer = () => {
  return (
    <section className="shortAnswer">
      <h2>Short Answer *</h2>
      <input type="text" name="text" required placeholder="Your Answer" />
    </section>
  );
};

export default ShortAnswer;
