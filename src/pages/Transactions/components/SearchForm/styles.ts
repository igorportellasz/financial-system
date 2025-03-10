import styled from "styled-components";

/** Estiliza o formulário de busca */
export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    /** Campo de entrada */
    input {
        flex: 1;
        border: 0;
        border-radius: 8px;
        padding: 1rem;
        background: ${props => props.theme["blue-800"]};
        color: ${props => props.theme["gray-100"]};

        &::placeholder {
            color: ${props => props.theme["gray-500"]};
        }
    }

    /** Botão de busca */
    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border: 1px solid ${props => props.theme["green-300"]};
        padding: 1rem;
        background: transparent;
        color: ${props => props.theme["green-300"]};
        font-weight: bold;
        border-radius: 8px;

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background: ${props => props.theme["green-500"]};
            border-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            transition: 0.2s;
            cursor: pointer;
        }
    }
`;
