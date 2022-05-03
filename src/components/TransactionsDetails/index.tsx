import { equal } from "assert";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isDeepStrictEqual } from "util";
import { ITransactionData, useTransactions, ITransactionsRecordUpload } from "../../hooks/usetransacions";
import Api from "../../services/Api";
import { formatCurrency, formatDate } from "../../util/functions";
import { ContainerDetailsTransactions } from "./style";

export const DetailsTransactionsDashboard = () => {

    const { id } = useParams();
    const { transactionsUpload, getTransactionsByIdUpload, transactions } = useTransactions();


    const [data, setData] = useState<ITransactionData[]>([])
    const uploadData = transactionsUpload.find((res) => id ? res.id === +id : null);

    useEffect(() => {
        async function setTransactions() {
            const result = await getTransactionsByIdUpload(id as string)
            setData(result)
        }
        setTransactions();

    }, [getTransactionsByIdUpload, id])


    return (
        <>
            <ContainerDetailsTransactions>
                <h1>Detalhes da Importação</h1>
                <span>Data da importação: {formatDate(uploadData?.dateUpload as Date)} </span>
                <span>Importado por:  {uploadData?.idUser}</span>
                <span>Data da Transação: {formatDate(uploadData?.dateTransactions as Date)}</span>
                <h1>Transações Importadas</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Banco Origem</th>
                            <th>Agência</th>
                            <th>Conta</th>
                            <th>Banco Destino</th>
                            <th>Agência</th>
                            <th>Conta</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data: ITransactionData) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.origBank}</td>
                                    <td>{data.origBranch}</td>
                                    <td>{data.origAccount}</td>
                                    <td>{data.destBank}</td>
                                    <td>{data.destBranch}</td>
                                    <td>{data.destAccount}</td>
                                    <td>{formatCurrency(+data.transactionAmount)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </ContainerDetailsTransactions>
        </>
    );
};
