// Dados para o gráfico de pessoas que gostam de cachorros globalmente
const dataGlobal = [
    {
        x: ['Pequeno Porte', 'Médio Porte', 'Grande Porte'],
        y: [35, 40, 25], // Percentagens globais de preferência
        type: 'bar',
        marker: {
            color: ['#ffb703', '#8ecae6', '#219ebc']
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Preferências Globais de Raças de Cachorros (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Raças',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#e0f2fe',
    paper_bgcolor: '#e0f2fe'
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de pessoas que gostam de cachorros no Colégio Morelli
const dataMorelli = [
    {
        x: ['Pequeno Porte', 'Médio Porte', 'Grande Porte'],
        y: [40, 35, 25], // Percentagens específicas do Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#ffb703', '#8ecae6', '#219ebc']
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Preferências de Cachorros no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Raças',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#e0f2fe',
    paper_bgcolor: '#e0f2fe'
};

// Exibe o gráfico na seção com id 'grafico-morelli'
Plotly.newPlot('grafico-morelli', dataMorelli, layoutMorelli);

