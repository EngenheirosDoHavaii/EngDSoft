import Modal from "react-modal";
import React from "react";
import TextInput from "../Inputs/TextInput";

interface InputValue {
  value: string;
}

interface FormParams {
  title: InputValue;
  description: InputValue;
}

function AddItemModal() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & FormParams;
    console.log(formElements.title.value);
  }

  function changeModalVisibility() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div>
      <button onClick={changeModalVisibility}>Add Item</button>
      <Modal isOpen={modalIsOpen} contentLabel="AddItemModal">
        <form onSubmit={handleSubmit}>
          <TextInput text="title" />
          <TextInput text="description" />
          <button onClick={changeModalVisibility}>Cancel</button>
          <button type="submit">Add</button>
        </form>
      </Modal>
    </div>
  );
}

export default AddItemModal;
