import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalSyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";

/** Componente principal da aplicação, responsável por fornecer o tema e contexto */
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>  {/* Aplica o tema global da aplicação */}
      <GlobalSyle />  {/* Aplica os estilos globais definidos para a aplicação */}
      <TransactionsProvider>  {/* Provedor de contexto que gerencia o estado das transações */}
        <Transactions />  {/* Página de transações onde as informações são exibidas */}
      </TransactionsProvider>
    </ThemeProvider>
  )
}
