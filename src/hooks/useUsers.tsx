import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Api from "../services/Api";



interface IUserProps {
    children: ReactNode
}
export interface IUser {
    id: number,
    fullName: string,
    email: string,
    userLevel: number,
    active: number
}

interface IUserContextProps {
    allUsers: IUser[] | null
}
const userContext = createContext<IUserContextProps>(
    {} as IUserContextProps
)

export const UserProvider = ({ children }: IUserProps) => {
    const [allUsers, setAllUsers] = useState<IUser[]>([])

    const getAllUser = async () => (await Api.get('/user')).data

    useEffect(() => {
        async function loadUsers() {
            if (!allUsers.length) {
                const resultUser = await getAllUser()
                setAllUsers(resultUser)
            }
        }
        loadUsers()
    }, [allUsers])


    return (
        <userContext.Provider value={{ allUsers }}>
            {children}
        </userContext.Provider>
    )

}


export const useUser = () => {
    const userContextHook = useContext(userContext)

    return userContextHook
}


