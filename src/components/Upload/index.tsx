import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useTransactions } from "../../hooks/usetransacions";
import Api from "../../services/Api";
import { ContainerUpload, FileName, UploadForm } from "./style";

interface IFile {
  name: string;
  type: string;
  selectFile: {};
}

export const DashboardUpload = () => {
  const [file, setFile] = useState<FileList | any>();

  const { getAllRecordUpload } = useTransactions();

  function handleFile(e: FormEvent) {
    const file = (e.target as HTMLInputElement).files;

    if (!file) {
      return false;
    }
    setFile(file[0]);
  }

  const sendFile = async (fileData: any) => {
    return await Api.post("/transactions-upload", fileData);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fileupload", file);

      await sendFile(formData);
      await getAllRecordUpload();
      toast.success("Arquivo enviado com sucesso");
    } catch (error: Error | any) {
      toast.error(error.response.data.message);
    }
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
