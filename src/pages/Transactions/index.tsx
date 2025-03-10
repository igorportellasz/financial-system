import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

/**
 * Componente responsável por exibir a página de transações.
 * Ele recupera as transações do contexto e renderiza uma tabela com os dados formatados.
 */
export function Transactions() {
    // Obtém a lista de transações do contexto TransactionsContext.
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });

    return (
        <div>
            <Header /> {/* Renderiza o cabeçalho da aplicação */}
            <Summary /> {/* Exibe um resumo financeiro com saldo total */}

            <TransactionsContainer>
                <SearchForm /> {/* Formulário para busca de transações */}
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    {/* Descrição da transação */}
                                    <td width="50%">{transaction.description}</td>

                                    {/* Valor formatado, com destaque para entradas e saídas */}
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.type === 'outcome' && '- '}
                                            {priceFormatter.format(transaction.price)}
                                        </PriceHighLight>
                                    </td>

                                    {/* Categoria da transação */}
                                    <td>{transaction.category}</td>

                                    {/* Data da transação formatada */}
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}
