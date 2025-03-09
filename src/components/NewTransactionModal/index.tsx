import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, Title, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X, CheckCircle } from "phosphor-react";
import * as zod from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const newTransactionFormSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(['income', 'outcome']),
})

type newTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal () {

    const createTransaction = useContextSelector(TransactionsContext, (context) => {
        return context.createTransaction;
    })

    const { 
        control,
        register, 
        handleSubmit,
        formState: {isSubmitting},
        reset,
    } = useForm<newTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income',
        },
    })

    async function handleCreateNewTransaction (data: newTransactionFormInputs) {
        const { description, category, type, price } = data;
        await createTransaction({
            description,
            price,
            category,
            type,
        })

        reset();

    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Title >Nova Transação</Title>

                <CloseButton> 
                    <X size={24}/> 
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                        type="text" 
                        placeholder="Descrição" 
                        required
                        {...register('description')}/>
                    <input 
                        type="number" 
                        placeholder="Preço" 
                        required
                        {...register('price', {valueAsNumber: true})}/>
                    <input 
                        type="text" 
                        placeholder="Categoria" 
                        required
                        {...register('category')}/>
                
                    <Controller 
                        control={control}
                        name="type"
                        render={( { field }) => {
                            return (
                                <TransactionType 
                                    onValueChange={field.onChange} 
                                    value={field.value}
                                >
                                    <TransactionTypeButton value="income" variant="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
            
                                    <TransactionTypeButton value="outcome" variant="outcome">
                                        <ArrowCircleDown size={24} />
                                        Saida
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                        <CheckCircle size={24} />
                    </button>
                
                </form>

                
            </Content>

        </Dialog.Portal>
    )
}