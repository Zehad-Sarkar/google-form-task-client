import "../../src/App.css";

const MultiChoice = () => {
  return (
    <section className="multiChoice">
      <h2>Multi choice Grid *</h2>

      <div className="column">
        <p></p>
        <p>Column 1</p>
        <p>Column 2</p>
        <p>Column 3</p>
      </div>
      <div className="parent">
        <div className="row">
          <p>Row 1</p>
          <input type="radio" name="row1" value="option1" />
          <input type="radio" name="row1" value="option2" />
          <input type="radio" name="row1" value="option3" />
        </div>
        <div className="row">
          <p>Row 2</p>
          <input type="radio" name="row2" value="option1" />
          <input type="radio" name="row2" value="option2" />
          <input type="radio" name="row2" value="option3" />
        </div>
        <div className="row">
          <p>Row 3</p>
          <input type="radio" name="row3" value="option1" />
          <input type="radio" name="row3" value="option2" />
          <input type="radio" name="row3" value="option3" />
        </div>
      </div>
    </section>
  );
};

export default MultiChoice;
