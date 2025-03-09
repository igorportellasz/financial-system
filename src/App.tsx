import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalSyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    
    <ThemeProvider theme = {defaultTheme}>
      <GlobalSyle />
        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>
    </ThemeProvider>
    
  )
}
