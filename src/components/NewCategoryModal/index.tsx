import React from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Modal from 'react-modal'
import * as Yup from 'yup'
import { CategoriesContext } from '../../hooks/Categories'
import { FormModalCategory } from './style'
import imgClose from '../../assets/close.svg'


interface propsModalCategory {
    modalIsOpen: boolean,
    closeModal: () => void
}

interface   IFormInput {
    nameCategory: string,

}

export const NewCategoryModal = ({ modalIsOpen, closeModal }: propsModalCategory) => {


    const { CreateNewCategory } = useContext(CategoriesContext)

    const ValidationForm = Yup.object({
                nameCategory: Yup.string().required()
            })
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(ValidationForm)
    })


    const onSubmit = (e: IFormInput) => {
        
        const idcategory= Math.floor(Math.random() * 1000)
        const Newdata = {
            id: idcategory,
            name: e.nameCategory
        }
        CreateNewCategory(Newdata)

        closeModal()
        reset()
        
      };    


    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={"modal-style"}
            overlayClassName={"modal-style-overlay"}
        >
          
            <FormModalCategory
                onSubmit={handleSubmit(onSubmit)}
            >
                <img src={imgClose} className="button-close-modal" onClick={() => {closeModal(); reset()}} alt="" />
                <h1>Adicionando uma categoria</h1>
                <input 
                {...register("nameCategory")}
                 className={(errors.nameCategory) ? "bg-red" : ""}
                 placeholder="nome da categoria"
                 />
                 {errors.nameCategory && <span> Preencha um nome válido para categoria </span>}
                 <button type='submit'>Adicionar Categoria</button>


            </FormModalCategory>
        </Modal>
    )
}

