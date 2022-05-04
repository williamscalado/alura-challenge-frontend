import { createContext, ReactNode, useContext } from "react";


const userContext = createContext("")

interface IUserProps {
    children: ReactNode
}

export const userProvider = ({ children }: IUserProps) => {





    return (
        <userContext.Provider value="">
            {children}
        </userContext.Provider>
    )

}


export const useUser = () => {
    const userContextHook = useContext(userContext)

    return userContextHook
}


