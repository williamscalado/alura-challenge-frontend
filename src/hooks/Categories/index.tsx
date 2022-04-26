import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { TransasionContext } from "../Transasions";



interface ICategories {
    id: number
    name: string,
}

type ICategoryForm = Omit<ICategories, 'id'>


interface ICategoriesContextProps {
    children: ReactNode
}
interface ICategoryContextData {
    categories: ICategories[], 
    CreateNewCategory(data: ICategoryForm) : Promise<void>
}

export const CategoriesContext = createContext<ICategoryContextData>(
    {} as  ICategoryContextData
    )


export function CategoriesProvider({children}: ICategoriesContextProps){


    const [categories, setCategories] = useState<ICategories[]>([])


    useEffect(() => {
        Api.get('categories/')
            .then(response => {
                setCategories(response.data.categories)

            })
    },[])

    async function CreateNewCategory(data: ICategoryForm){

        const Result = await Api.post('categories/',data);

        const { categorie } = Result.data

       setCategories([
            ...categories,
            categorie
            
        ])

      

    }

    return(
        <CategoriesContext.Provider value={{categories, CreateNewCategory}}>
            {children}
        </CategoriesContext.Provider>
    )
    

}
 export function useCategory(){
    const CategoryContext = useContext(CategoriesContext)

    return CategoryContext

 }