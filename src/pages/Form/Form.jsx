import { FaUpload } from "react-icons/fa";
import "..//../../src/App.css";
import Swal from "sweetalert2";
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const mcq = form.mcq.value;

    // for checkboxes value
    const checkboxesValues = { checkboxes: [] };
    const section = document.querySelector(".checkbox");
    const checkboxes = section.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    checkboxes.forEach((checkbox) => {
      checkboxesValues.checkboxes.push(checkbox.value);
    });

    const shortAnswer = form.short.value;
    const paragraph = form.paragraph.value;
    const dropdown = form.option.value;
    const file = form.file.value;
    const linearScale = form.scale.value;

    // for multi choice row select
    const radioSelectedValues = {};
    const radioRows = document.querySelectorAll(".row");
    radioRows.forEach((row) => {
      const rowName = row.getAttribute("data-row");
      const selectedRadio = row.querySelector('input[type="radio"]:checked');

      if (selectedRadio) {
        const columnName = selectedRadio.value;
        radioSelectedValues[rowName] = columnName;
      }
    });

    //tick box
    const tickBoxSelectedValues = {};
    const tickBoxRows = document.querySelectorAll(".row");
    tickBoxRows.forEach((row) => {
      const rowName = row.getAttribute("data-row");
      const checkboxes = row.querySelectorAll('input[type="checkbox"]:checked');
      const selectedOptions = Array.from(checkboxes).map(
        (checkbox) => checkbox.value
      );

      if (selectedOptions.length > 0) {
        tickBoxSelectedValues[rowName] = selectedOptions;
      }
    });

    const formValues = {
      mcq,
      checkboxesValues,
      shortAnswer,
      paragraph,
      dropdown,
      file,
      linearScale,
      radioSelectedValues,
      tickBoxSelectedValues,
    };

    fetch("https://task-server-tawny.vercel.app/formData/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* this section for MCQ section */}
      <section className="mcq">
        <h2>MCQ *</h2>
        <input type="radio" name="mcq" value="option 1" required />
        <label htmlFor="option1">Option 1</label>
        <br />
        <input type="radio" name="mcq" value="option 2" />
        <label htmlFor="option2">Option 2</label>
        <br />
        <input type="radio" name="mcq" value="option 3" />
        <label htmlFor="option3">Option 3</label>
        <br />
      </section>

      {/* this section for checkbox section */}
      <section className="checkbox">
        <h2>Checkbox *</h2>
        <div>
          <input type="checkbox" name="checkbox1" value="option 1" />
          <label htmlFor="option1">Option 1</label> <br />
          <input type="checkbox" name="checkbox2" value="option 2" />
          <label htmlFor="option2">Option 2</label> <br />
          <input type="checkbox" name="checkbox3" value="option 3" />
          <label htmlFor="option3">Option 3</label> <br />
        </div>
      </section>

      {/* this section for Short Answer section */}
      <section className="shortAnswer">
        <h2>Short Answer *</h2>
        <input type="text" name="short" required placeholder="Your Answer" />
      </section>

      {/* this section for paragraph  section */}
      <section className="paragraph">
        <h2>Paragraph *</h2>
        <input
          type="text"
          name="paragraph"
          required
          placeholder="Your Answer"
        />
      </section>

      {/* this section for dropdown section */}
      <section className="dropdown">
        <h2> Dropdown *</h2>
        <select name="option">
          <option value="" disabled>
            Choose
          </option>
          <option value="option1" name="dropdown1">
            Option 1
          </option>
          <option value="option2" name="dropdown2">
            Option 2
          </option>
          <option value="option3" name="dropdown3">
            Option 3
          </option>
        </select>
      </section>

      {/* this section for file upload  section */}
      <section className="upload">
        <h2>File Upload *</h2>
        <input
          type="file"
          name="file"
          id="fileInput"
          className="fileInput"
          // accept=".txt, .pdf"
        />
        <label htmlFor="fileInput">
          <FaUpload /> Add File
        </label>
      </section>

      {/* this section for linear scale  section */}
      <section className="linearScale">
        <h2>Linear Scale *</h2>

        <div className="radio-container">
          <p className="best">Worst</p>
          <div className="radio-label">
            <p>1</p>
            <input type="radio" name="scale" value="1" />
          </div>
          <div className="radio-label">
            <p>2</p>
            <input type="radio" name="scale" value="2" />
          </div>
          <div className="radio-label">
            <p>3</p>
            <input type="radio" name="scale" value="3" />
          </div>
          <div className="radio-label">
            <p>4</p>
            <input type="radio" name="scale" value="4" />
          </div>
          <div className="radio-label">
            <p>5</p>
            <input type="radio" name="scale" value="5" />
          </div>
          <p className="best">Best</p>
        </div>
      </section>

      {/* this section for multiple choice  section */}
      <section className="multiChoice">
        <h2>Multi choice Grid *</h2>

        <div className="column">
          <p></p>
          <p>Column 1</p>
          <p>Column 2</p>
          <p>Column 3</p>
        </div>
        <div className="parent">
          <div className="row" data-row="row1">
            <p>Row 1</p>
            <input type="radio" name="row1" value="column 1" />
            <input type="radio" name="row1" value="column 2" />
            <input type="radio" name="row1" value="column 3" />
          </div>
          <div className="row" data-row="row2">
            <p>Row 2</p>
            <input type="radio" name="row2" value="column 1" />
            <input type="radio" name="row2" value="column 2" />
            <input type="radio" name="row2" value="column 3" />
          </div>
          <div className="row" data-row="row3">
            <p>Row 3</p>
            <input type="radio" name="row3" value="column 1" />
            <input type="radio" name="row3" value="column 2" />
            <input type="radio" name="row3" value="column 3" />
          </div>
        </div>
      </section>

      {/* this section for tick box grid section */}
      <section className="multiChoice">
        <h2>Tick box Grid *</h2>

        <div className="column">
          <p></p>
          <p>Column 1</p>
          <p>Column 2</p>
          <p>Column 3</p>
        </div>
        <div className="parent">
          <div className="row" data-row="row1">
            <p>Row 1</p>
            <input type="checkbox" name="row1" value="column 1" />
            <input type="checkbox" name="row1" value="column 2" />
            <input type="checkbox" name="row1" value="column 3" />
          </div>
          <div className="row" data-row="row2">
            <p>Row 2</p>
            <input type="checkbox" name="row2" value="column 1" />
            <input type="checkbox" name="row2" value="column 2" />
            <input type="checkbox" name="row2" value="column 3" />
          </div>
          <div className="row" data-row="row3">
            <p>Row 3</p>
            <input type="checkbox" name="row3" value="column 1" />
            <input type="checkbox" name="row3" value="column 2" />
            <input type="checkbox" name="row3" value="column 3" />
          </div>
        </div>
      </section>
      <input type="submit" value="Submit" className="submit-button" />
    </form>
  );
};

export default Form;
