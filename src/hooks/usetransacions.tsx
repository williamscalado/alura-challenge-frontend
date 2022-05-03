import React, { ReactNode, useEffect, useState } from "react";
import { Children, createContext, useContext } from "react";
import Api from "../services/Api";

interface ITransactionsProviderProps {
  children: ReactNode;
}

export interface ITransactionsRecordUpload {
  id: number;
  idUser: number;
  dateTransactions: Date;
  dateUpload: Date;
}

export interface ITransactionData {
  id: string;
  userId?: string;
  idUpload: number;
  origBank: string;
  origBranch: string;
  origAccount: string;
  destBank: string;
  destBranch: string;
  destAccount: string;
  transactionAmount: string;
  dateTimerTransaction: Date;
  [key: string]: any;
}

interface ITransactionsContextProps {
  transactionsUpload: ITransactionsRecordUpload[];
  getAllRecordUpload: () => Promise<void>;
  transactions: ITransactionData[];
  getTransactionsByIdUpload: (id: string) => Promise<void> | any;
}

const TransactionsContext = createContext<ITransactionsContextProps>(
  {} as ITransactionsContextProps
);

export const TransactionsProvider = ({
  children,
}: ITransactionsProviderProps) => {
  const [transactionsUpload, setTransactionsUpload] = useState<ITransactionsRecordUpload[]>([]);
  const [transactions, setTransactions] = useState<ITransactionData[]>([]);

  const getAllRecordUpload = React.useCallback(async () => {
    const result = await Api.get("/transactions-upload");

    if (!transactionsUpload.length) {
      setTransactionsUpload(result.data);
    }

  }, [transactionsUpload.length]);

  useEffect(() => {
    getAllRecordUpload();
  }, [getAllRecordUpload]);


  const getTransactionsByIdUpload = async (id: string) => {
    if (!id) return;
    const result = await Api.get(`/transactions/${id}`);
    if (result.data) return result.data;

  };



  return (
    <TransactionsContext.Provider
      value={{
        transactionsUpload,
        getAllRecordUpload,
        transactions,
        getTransactionsByIdUpload,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const Transactions = useContext(TransactionsContext);

  return Transactions;
};
