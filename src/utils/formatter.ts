// Formatação de data no formato brasileiro (pt-BR)
export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

// Formatação de preço no formato de moeda brasileira (BRL)
export const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency', // Define o estilo como moeda
    currency: 'BRL', // Define a moeda como real brasileiro
});
