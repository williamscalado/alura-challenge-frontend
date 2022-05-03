import styled from "styled-components";

export const ContainerDetailsTransactions = styled.div`
margin: auto;
margin-top: 5rem;
background-color: var(--background-white);
border-radius: 0.5rem;
padding: 1rem 2rem;
width: 1120px;
h1{
     padding: 0.5rem;
    font-size: 1.5rem;
}

span{
    padding: 0.5rem;
    display: flex;
   
}

table {
    width: 100%;
    border-spacing: 0 0.5rem;
    inset-inline: initial;
    
    thead{
        th{
        text-align: left;
        color: var(--text-body);
        padding: 1rem 2rem;
        line-height: 1.5rem;
        text-align: center;
        line-height: 1.5rem;  
        }
    }
     
        td{
        background-color: var(--shape);
        padding: 1rem 2rem;
        font-size: .8em;
        color: var(--text-title);
        justify-content: center;
        justify-items: center;
        text-align: center; 
            
        
        
       
        &:first-child{            
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
    
}
`;