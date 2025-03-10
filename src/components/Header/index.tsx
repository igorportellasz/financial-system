import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

// Componente do cabeçalho da aplicação
export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="Logo que representa um simbolo financeiro juntamente com um indicador de subida" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                        
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    );
}
