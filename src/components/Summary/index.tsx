import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

// Exibe o resumo das transações (entradas, saídas e total)
export function Summary() {
    const summary = useSummary(); // Obtém o resumo das transações

    return (
        <SummaryContainer>
            {/* Exibe o resumo das entradas */}
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>

            {/* Exibe o resumo das saídas */}
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>

            {/* Exibe o total */}
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    );
}
