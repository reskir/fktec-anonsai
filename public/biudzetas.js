const pieOptions = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 50,
        },
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 50,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.name}',
            },
        },
    },
};

Highcharts.chart('revenue', {
    ...pieOptions,
    title: {
        text: 'Išlaidos',
        style: {
			'font-weight': 'bold',
            'font-size': '20px',
            color: 'red',
        },
    },
    colors: ['#D03B5B', '#ff0039', '#aa0026'],
    tooltip: {
        pointFormat: '{series.name}: <b>€ {point.y}</b>',
    },
    series: [
        {
            name: 'Išlaidos',
            data: [
                ['Rungtynės', 200],
                ['Turnyrų mokesčiai', 100],
                ['Stadionas', 300],
            ],
        },
    ],
});

Highcharts.chart('expense', {
    ...pieOptions,
    title: {
        text: 'Pajamos',
        style: {
			'font-weight': 'bold',
            'font-size': '20px',
            color: 'green',
        },
    },
    tooltip: {
        pointFormat: '{series.name}: <b>€ {point.y}</b>',
    },
    series: [
        {
            name: 'Išlaidos',
            data: [
                ['2% Parama', 200],
                ['Nario mokesti', 100],
                ['Rėmėjai', 300],
            ],
        },
    ],
});
