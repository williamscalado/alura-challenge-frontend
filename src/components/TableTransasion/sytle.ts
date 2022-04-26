import styled from "styled-components";

export const ConteinerTableTrasasion = styled.div`
margin-top: 4rem;
margin: 0 auto;
width: 1120px;
padding: 1rem 2rem;

table{
    width: 100%;
    border-spacing: 0 0.5rem ;
    


    thead{
        th{
        text-align: left;
        color: var(--text-body);
        padding: 1rem 2rem;
        line-height: 1.5rem;
        }
    }
     
        td{
        background-color: var(--shape);
        padding: 1rem 2rem;
        color: var(--text-body);
        
        
        
       
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

        img{
            max-width: 20px;
        }
        
    &.income{
        color: var(--green-select);
    }

    &.expense{
        color: var(--red);
    }

    }

}

`;

export const ConteinerSearch = styled.div`
margin-bottom: 2rem;
padding: 0 2rem;
width: 100%;
display: flex;
justify-content: space-between;

    input{
        padding: 0.5rem;
        color: var(--text-body);
        width: 50%;
        border: 1px;
        border-radius: 0.25rem;
        
    }
    button{
        padding: 0.9rem;
        font-weight: 500;
        border: 0;
        color: #FFF;
        background-color: var(--buttonheader);
        border-radius: 0.3rem;
    }
`;