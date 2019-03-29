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
    tooltip: {
        shape: 'square',
        shadow: false,
        borderWidth: 0,
        pointFormat: '{series.name}: <b>€ {point.y}</b>',
    },
};

Highcharts.chart('revenue', {
    ...pieOptions,
    title: {
        text: 'Išlaidos',
        style: {
            'font-weight': 'bold',
            color: 'red',
        },
    },
    colors: ['#D03B5B', '#ff0039', '#aa0026', '#FA1010', '#CA5632'],
    series: [
        {
            name: 'Išlaidos',
            data: [
                ['Startiniai mokesčiai', 1905.0],
                ['Draugiškos', 320.0],
                ['Treniruotės', 245.0],
                ['Stadionas', 1210.0],
                ['Kitos', 415.66],
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
            color: 'green',
        },
    },
    colors: ['#37AE82', '#05F559', '#88CE89', '#0A8D61'],
    series: [
        {
            name: 'Pajamos',
            data: [
                ['2% Parama', 1215.13],
                ['Rėmėjai', 500.0],
                ['Nario mokesčiai', 1998.0],
                ['Kitos', 105.0],
            ],
        },
    ],
});
