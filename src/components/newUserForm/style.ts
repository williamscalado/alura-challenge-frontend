import styled from "styled-components";

export const ContainerNewUser = styled.div`
margin: 0;
`


export const FormNewUser = styled.form`
margin: auto;
background: var(--background-white);
padding: 2rem;
max-width: 500px;
border-radius: 1rem;

 label{
        padding: 0.5rem;
        font-size: 1rem;
        color: var(--text-title);
        font-weight: 800;
    }

  input, select{
        width: 100%;
        padding: 1rem 1rem;
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
        border-radius: 0.25rem;
        border: 0;
        background-color: #E7E9EE;
        box-sizing: border-box;

        &:focus{            
            border: 1px solid red;
        }
    }
 button{

        color:#FFF;
        width: 100%;
        border: 0;
        font-weight: 600;
        font-size: 1rem;
        border-radius: 0.5rem;
        height: 4rem;
        margin-top: 1rem;
        background-color: var(--blue-light);
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }
 .login-button{

        color:#FFF;
        width: 100%;
        border: 0;
        font-weight: 600;
        font-size: 1rem;
        border-radius: 0.5rem;
        height: 4rem;
        margin-top: 1rem;
        background-color: var(--green-light);
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }





`


