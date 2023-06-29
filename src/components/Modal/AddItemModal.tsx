import Modal from "react-modal";
import React from "react";
import TextInput from "../Inputs/TextInput";
import { Firebase } from "../../services/firebase";
import { ItemEntity } from "../../entity/item-entity";
import "../../style/AddItemModal.css"

interface InputValue {
  value: string;
}

interface FormParams {
  title: InputValue;
  description: InputValue;
}

function AddItemModal() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const auth = Firebase.GetAuth();

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & FormParams;
    await Firebase.AddProduct({
      title: formElements.title.value,
      description: formElements.description.value,
      email: auth.currentUser?.email,
      user_id: auth.currentUser?.uid
    } as ItemEntity);

    changeModalVisibility()
  }

  function changeModalVisibility() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div>
      <button onClick={changeModalVisibility} className="add-item-button">Add Item</button>
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
