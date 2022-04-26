import styled from "styled-components";


export const ConteinerSumary = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
`;

export const SumaryContent = styled.div`

margin-top: -6rem;
background-color : var(--shape);
padding: 0.9rem 1rem;
border-radius: 0.5rem;


    &.bggreen{
    
        background-color: var(--green-select);
        color: #fff;
        
        p{
        color: #fff;
        }

    }
    &.bgred{
    
        background-color: var(--red);
        color: #fff;
        
        p{
        color: #fff;
        }

    }

    p{
    color: var(--text-title);
    
    }

    strong{
        margin-top: 1rem;
        padding: 0 0.5rem;
        font-size: 2rem;
        width: 100%;
        display: inline-block;
        font-weight: 500;
        text-align: right;
    }


`;



export const SumaryHeader = styled.header`

display: flex;
justify-content: space-between;


`;