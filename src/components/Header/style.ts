import styled from "styled-components";

export const Conteiner = styled.header`
background-color: var(--background-header);
padding: 2rem 2rem 8rem;
`;

export const Content = styled.div`
margin: 0 auto;
max-width: 1120px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const ContentButtons = styled.div`

margin: 0 ;

button { 
    font-size: 1rem;
        margin-left: 0.9rem;
        padding: 0.8rem ;       
        color: #FFF;
        background-color: var(--buttonheader);
        border: 0;
        border-radius: 0.3rem;
        transition: filter 0.3s;
        height: 3rem;
       
    &:hover{
        filter: brightness(0.9);
    }
    
}

`;

