import styled from "styled-components";

export const ContainerSummary = styled.div`
margin: auto;
margin-top: 5rem;
background-color: var(--background-white);
border-radius: 0.5rem;
padding: 1rem 2rem;
width: 1120px;

h1{
    padding: 1rem;
    font-size: 1.5rem;
}

table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    thead{
        th{
        text-align: left;
        color: var(--text-body);
        padding: 1rem 2rem;
        line-height: 1.5rem;
        text-align: center;
        }
    }
     
        td{
        background-color: var(--shape);
        padding: 1rem 2rem;
        color: var(--text-body);
        justify-content: center;
        justify-items: center;
        text-align: center;
        
        
        
       
        &:first-child{
            color:var(--text-title);
            font-weight: 600;
            border-top-left-radius: 0.5rem; 
            border-bottom-left-radius: 0.5rem;
        }
        &:last-child{
                
            border-top-right-radius: 0.5rem; 
            border-bottom-right-radius: 0.5rem;
            justify-content:space-between;
            display: flex;
        }
    }

    button{
        padding: 0.7rem;
        margin: auto;
        border: 0;
        border-radius: 0.5rem;
        background-color: var(--green-select);
        font-size: .9rem;
        font-weight: 400;
        transition: filter .4s ;
        &:hover{
            filter: brightness(0.9);
        }
    }
}
`