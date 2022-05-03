import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTransactions } from "../../hooks/usetransacions";
import { formatDate } from "../../util/functions";
import { ContainerSummary } from "./style";

export const UploadSummary = () => {
  const { transactionsUpload, getTransactionsByIdUpload, transactions } = useTransactions();


  const navigate = useNavigate();

  const handleDetailsTransactions = async (id: number) => {
    if (!id) {
      toast.error("Detalhamento não disponível no momento");
      return;
    }

    navigate("/transactions-summary/" + id);
  };

  return (
    <>
      <ContainerSummary>
        <h1>Registros de importação</h1>
        <table>
          <thead>
            <tr>
              <th>Data da Transação inicial</th>
              <th>Data do Envio</th>

              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {transactionsUpload.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{formatDate(data.dateTransactions)}</td>
                  <td>{formatDate(data.dateUpload)}</td>

                  <td>
                    <button onClick={() => handleDetailsTransactions(data.id)}>
                      Detalhar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ContainerSummary>
    </>
  );
};
