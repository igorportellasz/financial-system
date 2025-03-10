import { ReactNode, useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

// Tipagem para transações
interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

// Tipagem para criação de transações
interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}

// Tipagem do contexto de transações
interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

// Tipagem para o provider do contexto
interface TransactionProviderProps {
    children: ReactNode;
}

// Criação do contexto de transações
// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionContextType);

// Provider que gerencia as transações
export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // Busca as transações da API com filtros opcionais
    const fetchTransactions = useCallback(async (query?: string) => {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            },
        });

        setTransactions(response.data);
    }, []);

    // Cria uma nova transação e adiciona à lista existente
    const createTransaction = useCallback(async (data: CreateTransactionInput) => {
        const response = await api.post('/transactions', {
            ...data,
            createdAt: new Date(),
        });

        setTransactions(state => [response.data, ...state]);
    }, []);

    // Busca transações ao iniciar o provider
    useEffect(() => {
        fetchTransactions();
    }, [fetchTransactions]);

    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}
