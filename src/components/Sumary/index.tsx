import { ConteinerSumary, SumaryHeader, SumaryContent } from "./style";
import imgIncome from '../../assets/income.svg'
import imgOutcome from '../../assets/outcome.svg'
import imgResult from '../../assets/total.svg'
import { useContext } from "react";
import { TransasionContext } from "../../hooks/Transasions";
import { formatCurrency } from "../../util/functions";




export function Sumary() {

    const { transactions } = useContext(TransasionContext)

    const SumTransactions = transactions.reduce((acc, transactions): any => {

        if (transactions.type === 1)  { 
            acc.income += Number(transactions.valueTrasasion)
            acc.sumall += Number(transactions.valueTrasasion)
         }

        if (transactions.type === 0)  { 
            acc.expense += Number(transactions.valueTrasasion) 
            acc.sumall -= Number(transactions.valueTrasasion) 
        }

        return acc
    }, {
        income: 0,
        expense:0,
        sumall: 0
    })

    
    return (
        <ConteinerSumary>

            <SumaryContent>
                <SumaryHeader>
                    <p>Entradas</p>
                    <img src={imgIncome} alt="" />
                </SumaryHeader>
                <strong>{formatCurrency(SumTransactions.income)}</strong>
            </SumaryContent>

            <SumaryContent>
                <SumaryHeader>
                    <p>Saídas</p>
                    <img src={imgOutcome} alt="" />
                </SumaryHeader>
                <strong>{formatCurrency(SumTransactions.expense)}</strong>
            </SumaryContent>

            <SumaryContent 
            className={SumTransactions.sumall > 0 ? "bggreen" : "bgred"} 
            >
                <SumaryHeader>
                    <p>Saldo total</p>
                    <img src={imgResult} alt="" />
                </SumaryHeader>
                <strong>{formatCurrency(SumTransactions.sumall)}</strong>
            </SumaryContent>

        </ConteinerSumary>


    )
}