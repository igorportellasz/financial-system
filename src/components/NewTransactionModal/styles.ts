import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

/** Fundo escuro que cobre a tela ao abrir o modal */
export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`;

/** Título centralizado dentro do modal */
export const Title = styled(Dialog.Title)`
    justify-content: center;
    display: flex;
    align-items: center;
`;

/** Caixa de conteúdo do modal */
export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 8px;
    padding: 2.5rem 3rem;
    background: ${props => props.theme["gray-800"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 8px;
            border: 0;
            background: ${props => props.theme["gray-900"]};
            color: ${props => props.theme["gray-100"]};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme["gray-500"]};
            }
        }

        /** Botão de envio do formulário */
        button[type="submit"] {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            height: 58px;
            border: 0;
            background: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 1.25rem;
            border-radius: 8px;
            margin-top: 1.5rem;
            cursor: pointer;

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }

            &:not(:disabled):hover {
                background: ${props => props.theme["green-700"]};
                transition: background-color 0.2s;
            }
        }
    }
`;

/** Botão para fechar o modal */
export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${props => props.theme["gray-500"]};
`;

/** Container de botões para selecionar o tipo de transação */
export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`;

/** Tipagem para os botões de transação */
interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome';
}

/** Botões de seleção para tipo de transação (entrada ou saída) */
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    background: ${props => props.theme["gray-700"]};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    border: 0;
    color: ${props => props.theme["gray-300"]};

    svg {
        color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
    }

    /** Estilização do hover quando o botão não está selecionado */
    &[data-state='unchecked']:hover {
        transition: background-color 0.2s;
        background: ${props => props.theme["gray-600"]};
    }

    /** Estilos aplicados quando o botão está selecionado */
    &[data-state='checked'] {
        color: ${props => props.theme.white};
        background: ${props => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]};
        border: 0;

        svg {
            color: ${props => props.theme.white};
        }
    }
`;
