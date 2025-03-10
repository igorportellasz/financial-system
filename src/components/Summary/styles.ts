import styled, { css } from "styled-components";

/** Contêiner principal do resumo, com layout de grid */
export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid; /* Utiliza grid para distribuir os cards */
    grid-template-columns: repeat(3, 1fr); /* 3 colunas de tamanhos iguais */
    gap: 2rem; /* Espaçamento entre os cards */

    margin-top: -5rem; /* Posicionamento do contêiner */
`;

/** Estilos para o card de resumo, com opção de cor verde */
interface SummaryCardProps {
    variant?: 'green'; // Prop opcional para alterar a cor de fundo para verde
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme["blue-800"]}; /* Cor de fundo padrão */
    border-radius: 8px;
    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    /* Caso a prop variant seja 'green', altera a cor de fundo para verde */
    ${props => props.variant === 'green' && css`
        background: ${props => props.theme["green-300"]};
        color: ${props => props.theme["white"]};
    `}
`;
