   <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-labels@1.1.0"></script>
    <script>
        var ctx = document.getElementById('miGrafico').getContext('2d');
        var miGrafico = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Manzanas', 'Naranjas', 'Plátanos'],
                datasets: [{
                    data: [12, 19, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    labels: {
                        render: 'value',
                        fontSize: 20,
                        fontColor: '#000',
                        position: 'outside',
                        fontStyle: 'bold',
                        fontFamily: 'Arial',
                        textMargin: 10 // Ajustar según tu preferencia
                    }
                }
            }
        });
    </script>