import React, { ReactNode, useEffect, useState } from "react";
import { Children, createContext, useContext } from "react";
import Api from "../services/Api";

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionsRecordUpload {
  id: number;
  idUser: number;
  dateTransactions: Date;
  dateUpload: Date;
}

interface ITransactionsContextProps {
  transactionsUpload: ITransactionsRecordUpload[];
  getAllRecordUpload: () => Promise<void>;
}

const TransactionsContext = createContext<ITransactionsContextProps>(
  {} as ITransactionsContextProps
);

export const TransactionsProvider = ({
  children,
}: ITransactionsProviderProps) => {
  const [transactionsUpload, setTransactionsUpload] = useState<
    ITransactionsRecordUpload[]
  >([]);

  const getAllRecordUpload = async () => {
    const result = await Api.get("/transactions-upload");

    if (result) setTransactionsUpload(result.data);
  };
  useEffect(() => {
    getAllRecordUpload();
    console.log("ok");
  }, []);

  getAllRecordUpload();

  return (
    <TransactionsContext.Provider
      value={{ transactionsUpload, getAllRecordUpload }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const Transactions = useContext(TransactionsContext);

  return Transactions;
};
