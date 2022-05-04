import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITransactionData, useTransactions } from "../../hooks/usetransacions";
import { useUser } from "../../hooks/useUsers";
import { formatCurrency, formatDate } from "../../util/functions";
import { ContainerDetailsTransactions } from "./style";

export const DetailsTransactionsDashboard = () => {

    const { id } = useParams() || "0";
    const { transactionsUpload, getTransactionsByIdUpload, transactions } = useTransactions();
    const { allUsers } = useUser()


    const [data, setData] = useState<ITransactionData[]>([])

    const uploadData = transactionsUpload.find((res) => id ? res.id === +id : null);

    useEffect(() => {
        async function setTransactions() {
            const result = await getTransactionsByIdUpload(id as string)
            setData(result)
        }
        setTransactions();

    }, [getTransactionsByIdUpload, id])

    const userName = allUsers?.filter((res) => res.id === uploadData?.idUser).map(res => res.fullName)

    return (
        <>
            <ContainerDetailsTransactions>
                <h1>Detalhes da Importação</h1>
                <span><h4>Data da importação: </h4> {formatDate(uploadData?.dateUpload as Date)} </span>
                <span><h4>Importado por: </h4>  {userName}</span>
                <span><h4>Data da Transação: </h4> {formatDate(uploadData?.dateTransactions as Date)}</span>
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
