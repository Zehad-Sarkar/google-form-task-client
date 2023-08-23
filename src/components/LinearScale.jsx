import "../../src/App.css";

const LinearScale = () => {
  return (
    <section className="linearScale">
      <h2>Linear Scale *</h2>

      <div className="radio-container">
        <p className="best">Worst</p>
        <div className="radio-label">
          <p>1</p>
          <input type="radio" name="radio" value="1" />
        </div>
        <div className="radio-label">
          <p>2</p>
          <input type="radio" name="radio" value="1" />
        </div>
        <div className="radio-label">
          <p>3</p>
          <input type="radio" name="radio" value="1" />
        </div>
        <div className="radio-label">
          <p>4</p>
          <input type="radio" name="radio" value="1" />
        </div>
        <div className="radio-label">
          <p>5</p>
          <input type="radio" name="radio" value="1" />
        </div>
        <p className="best">Best</p>
      </div>
    </section>
  );
};

export default LinearScale;
