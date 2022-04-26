import {  createContext, useEffect, ReactNode, useState, useContext } from 'react'
import { Api } from '../../services/Api'


export interface ITransaction{
    id: number
    titleTransasion: string,
    data: string,
    selectCategory: number,
    valueTrasasion: number,
    type: number
}

interface TrasactionProviderProps{
    children: ReactNode
}

interface TransactionsContextData {
    transactions: ITransaction[],
    createTransactions:  (data: ITransaction) => Promise<void>
}


export const TransasionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    )


export function TransasionsProvider({children}: TrasactionProviderProps ) {

    const [transactions, setTransaction] = useState<ITransaction[]>([])

    useEffect(() => {
        Api.get('transasion/')
            .then(response => {
                setTransaction(response.data.transasions)
               
            })

    }, [])

    async function createTransactions(data: ITransaction){
       
      const result =  await  Api.post('transasion', data)          

        const { transasion } = result.data;

        setTransaction([
            ...transactions,
            transasion,

        ])


    }

    return (
        <TransasionContext.Provider value={{transactions , createTransactions}}>
            {children}
        </TransasionContext.Provider>
    )

}

export function useTrasaction(){
    const Context = useContext(TransasionContext)

    return Context
}