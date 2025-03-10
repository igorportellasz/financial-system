import styled from "styled-components";

/** Contêiner principal do cabeçalho */
export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]}; /* Fundo escuro */
    padding: 2.5rem 0 7.5rem; /* Espaçamento interno */
    box-shadow: 0px 10px 20px rgba(0,0,0,1); /* Sombra inferior */
`;

/** Conteúdo do cabeçalho com layout flexível */
export const HeaderContent = styled.header`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 5rem;
        height: 5rem;
    }
`;

/** Botão para adicionar nova transação */
export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme["green-300"]}; /* Cor de fundo padrão */
    color: ${props => props.theme["gray-900"]}; /* Cor do texto */
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme["green-500"]}; /* Efeito hover */
        transition: background-color 0.2s;
    }
`;
