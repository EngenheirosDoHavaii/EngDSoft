import Modal from "react-modal";
import React from "react";
import TextInput from "../Inputs/TextInput";
import { Firebase } from "../../services/firebase";
import { ItemEntity } from "../../entity/item-entity";

interface InputValue {
  value: string;
}

interface FormParams {
  title: InputValue;
  description: InputValue;
}

function AddItemModal() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & FormParams;
    const itemId = await Firebase.AddProduct({
      title: formElements.title.value,
      description: formElements.description.value,
    } as ItemEntity);

    alert(`Your item has been published! ${itemId}`);
    changeModalVisibility();
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
