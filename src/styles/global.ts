import { createGlobalStyle } from "styled-components";

// Estilos globais para a aplicação utilizando Styled Components.

export const GlobalSyle = createGlobalStyle`
    * {
        margin: 0; // Remove a margem de todos os elementos
        padding: 0; // Remove o padding de todos os elementos
        box-sizing: border-box; // Define o box-sizing como border-box para todos os elementos
    }

    :focus {
        outline: 0; // Remove o contorno padrão ao focar em elementos
        box-shadow: 0 0 0 2px ${props => props.theme["green-500"]}; // Adiciona sombra ao focar, com cor definida no tema
    }

    body {
        background-color: ${props => props.theme["blue-100"]}; // Define o fundo do body com a cor azul escuro do tema
        color: ${props => props.theme["gray-100"]}; // Define a cor do texto com o cinza claro do tema
        -webkit-font-smoothing: antialiased; // Melhora o anti-aliasing das fontes no Webkit
    }

    body, input-security, textarea, button {
        font: 400 1rem Roboto, sans-serif; // Define a fonte padrão da aplicação
    }
`;
