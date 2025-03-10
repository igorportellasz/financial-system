import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

/** Esquema de validação para o formulário de busca */
const searchFormSchema = zod.object({
    query: zod.string(),
});

/** Tipo inferido do esquema de validação */
type SearchFormInputs = zod.infer<typeof searchFormSchema>;

/** Formulário para buscar transações */
export function SearchForm() {
    /** Obtém a função de busca do contexto */
    const fetchTransactions = useContextSelector(TransactionsContext, (context) => context.fetchTransactions);

    /** Configuração do formulário com validação */
    const { 
        register, 
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    /** Processa a submissão do formulário e aciona a busca */
    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações" 
                {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    );
}
