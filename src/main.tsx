import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { App } from './App.tsx'; 

/** Renderiza o componente principal da aplicação no elemento com id 'root' */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>  {/* Habilita o modo estrito, que ativa verificações adicionais no ambiente de desenvolvimento */}
    <App />  {/* Componente principal da aplicação, que contém toda a lógica de renderização */}
  </React.StrictMode>,
)
