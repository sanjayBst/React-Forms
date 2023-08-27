import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);

  const enteredNameIsValid = enteredName.trim() != "";
  // const enteredNameIsSubmitted = enteredName.trim() != '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  // const nameInputIsValids = enteredNameIsSubmitted && enteredNameTouched   ;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // setFormSubmitted(false)
    // setFormSubmitted(true);
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  // const resetHandler = () => {
  //   setEnteredName('')
  // }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />

        {nameInputIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
        {/* {formSubmitted && (
          <p className="success-text">Form submitted successfully.</p>
        )} */}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
        {/* <button onClick={resetHandler} >Reset</button> */}
      </div>
    </form>
  );
};

export default SimpleInput;
