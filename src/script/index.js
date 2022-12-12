


(async () => {



    const topology = await fetch(
        'topo.json'
    ).then(response => response.json());

    // const topology = await fetch(
    //     'topo.json'
    // ).then(response => response.json());





    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ['Apiacás', 200], ['Cuiabá', 101], ['Água Boa', 112], ['br-sc', 13],
        ['Alta Floresta', 14], ['br-ap', 15], ['br-ms', 16], ['br-mg', 17],
        ['br-go', 18], ['br-rs', 19], ['br-to', 20], ['br-pi', 21],
        ['br-al', 22], ['br-pb', 23], ['br-ce', 24], ['br-se', 25],
        ['br-rr', 26], ['br-pe', 27], ['br-pr', 28], ['br-es', 29],
        ['br-rj', 30], ['br-rn', 31], ['br-am', 32], ['br-mt', 33],
        ['br-df', 34], ['br-ac', 35], ['br-ro', 36]
    ];

    // Create the chart
    Highcharts.mapChart('container-map', {
        chart: {
            map: topology,
            backgroundColor: 'aliceblue'
        },

        title: {
            text: 'Mapa Distributivo de Atividade'
        },

        subtitle: {
            text: 'Mato-Grosso'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            name: 'papel',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

})();
