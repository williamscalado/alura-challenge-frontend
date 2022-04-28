import styled from "styled-components";

export const ContainerUpload = styled.div`
margin: auto;
width: 600px;


padding: 1rem 1.5rem ;
background-color: var(--background-white);
border-radius: 1rem;
justify-content: center;


h1{
    color: var(--text-title);
    font-size: 1.2rem;
}


hr{
    background-color: var(--background);

}
`

export const UploadForm = styled.form`
margin: 1.5rem 1rem ;
display: flex;
justify-content: space-between;


label {
  background-color: var(--button-upload);
  border-radius: 0.5rem;
  height: 4rem;
  color: #fff;
  cursor: pointer;
  margin: 0;
  width: 100%;
  padding: 1rem;
  display: inline-block;
  text-align: center;
}
input{
    cursor: pointer;  
    padding: 1rem;
    font-size: 0.8rem;
    font-weight: 800;
    
}

input[type=file]::file-selector-button{
    display: none;
}


button{

        color:#FFF;
        width: 100%;
        border: 0;
        font-weight: 600;
        font-size: 1rem;
        border-radius: 0.5rem;
        height: 4rem;
        margin-left: 1rem;       
        background-color: var(--green-select);
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }

`;

export const FileName = styled.div`
width: 100%;
padding: 0.5rem 1rem;
border-radius: 1rem;
background-color: var(--green-sucess);
font-weight: 800;
font-size: .9rem;




`
