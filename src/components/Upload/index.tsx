import { FormEvent, useRef, useState } from "react";
import Api from "../../services/Api";
import { ContainerUpload, FileName, UploadForm } from "./style";

interface IFile {
  name: string;
  type: string;
  selectFile: {};
}

export const DashboardUpload = () => {
  const [file, setFile] = useState<FileList | any>();
  function handleFile(e: FormEvent) {
    const file = (e.target as HTMLInputElement).files;

    if (!file) {
      return false;
    }
    setFile(file[0]);
  }

  const sendFile = async (fileData: any) => {
    const result = await Api.post("/transactions-upload", fileData);
    console.log(result);
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fileupload", file);
    await sendFile(formData);
    console.log(formData);
  };
  return (
    <ContainerUpload>
      <h1>Selecione o aquivo com as transações</h1>
      <UploadForm onSubmit={handleSubmit}>
        <label onChange={handleFile} htmlFor="fileupload">
          Escolha o aquivo
          <input
            name="fileupload"
            type="file"
            id="fileupload"
            placeholder="aguardando..."
            hidden
          />
        </label>
        <button>Enviar Arquivo</button>
      </UploadForm>
      {file && <FileName>Arquivo: {file.name}</FileName>}
    </ContainerUpload>
  );
};
