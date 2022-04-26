import { ConteinerSearch, ConteinerTableTrasasion } from "./sytle";
import ImgCalendar from '../../assets/calendar-color.png'
import { Suspense } from "react";
import { useCategory } from "../../hooks/Categories";
import { formatCurrency } from "../../util/functions";
import { LoadingContainer } from "../Loading";
import { useTrasaction } from "../../hooks/Transasions";

interface porpsModal {
    openModal: () => void
}

export function TableTransasion({ openModal }: porpsModal) {

    const { transactions } = useTrasaction()
    const {categories} = useCategory()

    transactions.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
    
    return (
        <Suspense fallback={LoadingContainer}>
        <ConteinerTableTrasasion>
            <ConteinerSearch>
                <input type="text" placeholder="Buscar..." />
                <button onClick={openModal}>+ Adicionar registro</button>
            </ConteinerSearch>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(
                        (response) => {
                            return (
                                <tr key={response.id}>
                                    <td>{response.titleTransasion}</td>
                                    <td className={(response.type === 0) ? "expense" : "income"}>
                                        {
                                            formatCurrency(response.valueTrasasion)
                                        }
                                    </td>
                                    <td>{
                                        categories
                                            .find((item) => item.id == response?.selectCategory)?.name
                                    }</td>
                                    <td>{
                                        new Intl.DateTimeFormat('pt-br')
                                            .format(new Date(response.data))
                                    }
                                        <img src={ImgCalendar} alt="dat" /></td>
                                </tr>

                            )
                        })}


                </tbody>
            </table>
        </ConteinerTableTrasasion>
        </Suspense>
    )
}