import Modal from "react-modal";
import React from "react";
import TextInput from "../Inputs/TextInput";
import { AuthManager } from "../../services/AuthManager";
import { FirestoreManager } from "../../services/FirestoreManager";
import "../../style/AddItemModal.css"
import Product from "../../interfaces/Product";

interface InputValue {
  value: string;
}

interface FormParams {
  name: InputValue;
  description: InputValue;
}

const validUserInput = (event: React.SyntheticEvent<HTMLFormElement>) => {
  const form = event.currentTarget;
  const formElements = form.elements as typeof form.elements & FormParams;
  
  
};

function AddItemModal() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const auth = AuthManager.getInstance().GetAuth();

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & FormParams;
    await FirestoreManager.getInstance().AddProduct({
      name: formElements.name.value,
      description: formElements.description.value,
      email: auth.currentUser?.email,
    } as Product);

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
          <TextInput text="name" />
          <TextInput text="description" />
          <button onClick={changeModalVisibility}>Cancel</button>
          <button type="submit">Add</button>
        </form>
      </Modal>
    </div>
  );
}

export default AddItemModal;
