import styled from "styled-components";

export const ConteinerFormModal = styled.form`

    width: 100%;

    h1{
        padding: 1rem;
        font-size: 1.7rem;
    }
    input, select{
        width: 100%;
        padding: 1rem 1rem;
        margin-top: 0.75rem;
        border-radius: 0.25rem;
        border: 0;
        background-color: #E7E9EE;
        box-sizing: border-box;

        &:focus{
            
            border: 1px solid red;
        }
    }
    
    select{

        option{
            padding: 1rem 1rem;
            color: var(--text-title);
            font-weight: 500;
            margin-top: 0.5rem;
            font-size: 1rem;
        }
    }

   
    button[class=sendbuttonmodal]{

        color:#FFF;
        width: 100%;
        border: 0;
        font-weight: 600;
        font-size: 1rem;
        border-radius: 0.5rem;
        height: 4rem;
        margin-top: 1rem;
        background-color: var(--green-select);
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }
    span{
        font-size: 0.7rem;
        font-weight: 400;
        margin-left: 0.5rem;
    }

  .bg-red{
      background-color: var(--red-danger);
      border-color: var(--red);
  }

 .errormessage{
     margin: 0.5rem 0.5rem;
     border-radius: 0.5rem;
     background-color: hsl(0, 100%, 93%) ;
     width: 50%;
     padding: 0.5rem;
     font-size: 0.7rem;
     border-color:1px solid red;
     font-weight: 500;
     opacity: 0.7;
 }
`;

export const ConteinerTypeTransasion = styled.div`

    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin: 1rem 0 1rem 0;
    


    

   
    
   
`;

interface PropsButton {
    isActive: boolean,
    color: 'green' | 'red'
}

const colorSelect = {
    green: "hsl(120,100%,90%)" ,
    red: "hsl(0, 100%, 90%)"
}


export const ButtonActiveType = styled.button<PropsButton>`

padding-top: 1rem;
        background-color:  ${props => props.isActive ? colorSelect[props.color] : "transparent"}; 
        display: flex;
        justify-content:center;
        align-content: center;
        border: 1.5px solid #DDD;
        box-sizing: border-box;
        border-radius: 0.25rem;
        height: 4rem;
        font-weight: 600;
        

        img{
            width: 30px;
            height: 30px;
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            color: var(--text-title);
            font-size: 1rem;
        }
    
    &:hover{
       border-color: #aaa;
    }

`;

export const errorMessageFormaModal = styled.span`
margin: 0.6rem 0.6rem

`;