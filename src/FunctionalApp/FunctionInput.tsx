export const FunctionalInput = ( ) => {
  return (
    <>
    <div className="input-wrap">
        <label>{"First Name"}:</label>
        <input placeholder="Bilbo" />
      </div>
      <ErrorMessage message={firstNameErrorMessage} show={true} />
    </>
  )
}