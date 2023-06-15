import "./RegisterProductView.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../style/assets/defaultProductImage.jpg";

const RegisterProductView = () => {

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>();

  const handleSubmit = () => {
    console.log("a");
  };

  const handeImage = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null =  e.target.files;

    if (!e.target.files || e.target.files.length === 0) {
      console.error("Select a file");
      return;
    } else {
      const file: File = e.target.files[0]
      setImage(file)
    }

  }
  return (
    <div>
      <h2>Cadastre um produto</h2>
      <p>
        Tem algo parado em casa ? Cadastre para que outras pessoas interessadas
        possam te ajudar
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            
            <input
                type="file"
                name="Image"
                required
                placeholder="select an Image"
                onChange={handeImage}
              />
          </div>

          <div className="forms">
            <label>
              <span> Nome: </span>
              <input
                type="text"
                name="title"
                required
                placeholder="O que você quer doar"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label>
              <span> Descrição: </span>
              <input
                type="text"
                name="description"
                required
                placeholder="De uma breve descrição sobre o que seu objeto é e porque não o quer mais"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterProductView;
