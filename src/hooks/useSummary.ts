import { TransactionsContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

// Hook que calcula o resumo das transações (entrada, saída e total)
export function useSummary() {
    // Obtém as transações do contexto
    const transactions = useContextSelector(TransactionsContext, (context) => context.transactions);

    // Calcula o resumo das transações
    const summary = transactions.reduce(
        (accumulator, transaction) => {
            if (transaction.type === 'income') {
                accumulator.income += transaction.price; // Soma das entradas
                accumulator.total += transaction.price; // Total com entradas
            } else {
                accumulator.outcome += transaction.price; // Soma das saídas
                accumulator.total -= transaction.price; // Total com saídas
            }

            return accumulator;
        }, 
        { 
            income: 0, 
            outcome: 0, 
            total: 0,
        }
    );

    return summary; // Retorna o resumo
}
