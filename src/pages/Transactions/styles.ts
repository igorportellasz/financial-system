import styled from "styled-components";

// Contêiner principal para a seção de transações. Define a largura máxima e centraliza o conteúdo na página.
export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;  // Margem superior de 4rem, centralização automática.
    padding: 0 1.5rem;  // Espaçamento interno lateral.
`;

// Estiliza a tabela de transações, com espaçamento entre células e design moderno.
export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;  // Permite espaçamento entre células.
    border-spacing: 0.5rem;  // Define o espaçamento entre as células.
    margin-top: 1.5rem;

    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme["blue-800"]};  // Cor de fundo dinâmica.
        border-radius: 16px;  // Bordas arredondadas.
        text-align: center;  // Texto centralizado.

        &:first-child { 
            text-align: justify;  // Alinha o texto da primeira coluna.
        }
    }
`;

// Propriedades esperadas para o destaque de preços.
interface PriceHighLightProps {
    variant: 'income' | 'outcome';  // Define se a cor será para entrada ou saída de dinheiro.
}

// Estiliza um `span` para destacar valores de entrada (positivos) e saída (negativos). A cor é definida com base no tipo da transação.
export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => 
        props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]
    };
`;
