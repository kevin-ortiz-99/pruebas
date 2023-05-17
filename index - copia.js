<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-labels@1.2.0"></script>
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


<script src="https://cdn.jsdelivr.net/npm/chart.js@3.3.2/dist/chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-labels@1.2.0/dist/chartjs-plugin-labels.min.js"></script>
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
//////////////////////////////////////////////
 if (chart.data.datasets[0].data[index] !== 0) { //si el valor es 0 no le pone label
    //consigue la posicion de la grafica y saca las mitades
    const { x, y } = datapoint.tooltipPosition();
    const halfwidth = width / 2;
    const halfheight = height / 2;
    var extraline = 0;
    var xLine = x >= halfwidth ? x + 15 : x - 15;
    var yLine = y >= halfheight ? y + 15 : y - 15;
    var extraLine = x >= halfwidth ? 20 : -20;

    //dibuja la línea y le pone color
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xLine, yLine);
    ctx.lineTo(xLine + extraLine, yLine);
    ctx.strokeStyle = dataset.borderColor[index];
    ctx.stroke();

    //calcular tamaño y estilo del label
    const label = chart.data.labels[index] + " " + chart.data.datasets[0].data[index];
    ctx.font = "12px Arial";
    let textWidth = ctx.measureText(label).width;
    while (textWidth > width - 30) { //ajusta el tamaño de fuente hasta que quepa en el espacio disponible
        ctx.font = parseInt(ctx.font, 10) - 1 + "px Arial";
        textWidth = ctx.measureText(label).width;
    }
    const textXPosition = x >= halfheight ? 'left' : 'right';
    const plusFivePx = x >= halfwidth ? 5 : -5;
    ctx.textAlign = textXPosition;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = dataset.borderColor[index];
    ctx.fillText(label, xLine + extraLine + plusFivePx, yLine);
} 



if (chart.data.datasets[0].data[index] !== 0) { //si el valor es 0 no le pone label
    //consigue la posicion de la grafica y saca las mitades
    const { x, y } = datapoint.tooltipPosition();
    const halfwidth = width / 2;
    const halfheight = heigth / 2;
    var extraline = 0;
    var xLine = x >= halfwidth ? x + 15 : x - 15;
    var yLine = y >= halfheight ? y + 15 : y - 15;
    var extraLine = x >= halfwidth ? 20 : -20;

    //dibuja la línea y le pone color
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xLine, yLine);
    ctx.lineTo(xLine + extraLine, yLine);
    ctx.strokeStyle = dataset.borderColor[index];
    ctx.stroke();

    //tamano y estilo del label
    const textwidth = ctx.measureText(chart.data.labels[index].width);
    ctx.font ='12px Arial';

    const textXPosition = x >= halfheight ? 'left' : 'right';
    const plusFivePx = x >= halfwidth ? 5 : -5;
    ctx.textAlign = textXPosition;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = dataset.borderColor[index];
    ctx.fillText(chart.data.labels[index]+" "+chart.data.datasets[0].data[index], xLine + extraLine + plusFivePx, yLine);
}  


////
if (chart.data.datasets[0].data[index] !== 0) { //si el valor es 0 no le pone label
    //consigue la posicion de la grafica y saca las mitades
    const { x, y } = datapoint.tooltipPosition();
    const halfwidth = width / 2;
    const halfheight = height / 2;
    var extraline = 0;
    var xLine = x >= halfwidth ? x + 15 : x - 15;
    var yLine = y >= halfheight ? y + 15 : y - 15;
    var extraLine = x >= halfwidth ? 20 : -20;

    //dibuja la línea y le pone color
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xLine, yLine);
    ctx.lineTo(xLine + extraLine, yLine);
    ctx.strokeStyle = dataset.borderColor[index];
    ctx.stroke();

    //tamaño y estilo del label
    const textwidth = ctx.measureText(chart.data.labels[index].width);
    ctx.font ='12px Arial';

    const textYPosition = y >= halfheight ? 'bottom' : 'top';
    const plusFivePx = y >= halfheight ? 5 : -5;
    ctx.textAlign = 'center';
    ctx.textBaseline = textYPosition;
    ctx.fillStyle = dataset.borderColor[index];

    // dividir el texto en dos líneas
    const textLines = (chart.data.labels[index] + ' ' + chart.data.datasets[0].data[index]).split(' ');

    // calcular la posición de la segunda línea de texto
    const lineHeight = parseInt(ctx.font, 10) * 1.2; // altura de la fuente
    const secondLineY = yLine + lineHeight / 2;

    // dibujar las dos líneas de texto
    ctx.fillText(textLines[0], xLine + extraLine + plusFivePx, yLine - lineHeight / 2);
    ctx.fillText(textLines[1], xLine + extraLine + plusFivePx, secondLineY);
}










///version de seperacion
if (chart.data.datasets[0].data[index] !== 0) { //si el valor es 0 no le pone label
    //consigue la posicion de la grafica y saca las mitades
    const { x, y } = datapoint.tooltipPosition();
    const halfwidth = width / 2;
    const halfheight = height / 2;
    var extraline = 0;
    var xLine = x >= halfwidth ? x + 15 : x - 15;
    var yLine = y >= halfheight ? y + 15 : y - 15;
    var extraLine = x >= halfwidth ? 20 : -20;

    //dibuja la línea y le pone color
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xLine, yLine);
    ctx.lineTo(xLine + extraLine, yLine);
    ctx.strokeStyle = dataset.borderColor[index];
    ctx.stroke();

    //tamaño y estilo del label
    const textwidth = ctx.measureText(chart.data.labels[index].width);
    ctx.font ='12px Arial';

    const textYPosition = y >= halfheight ? 'bottom' : 'top';
    const plusFivePx = y >= halfheight ? 5 : -5;
    ctx.textAlign = 'center';
    ctx.textBaseline = textYPosition;
    ctx.fillStyle = dataset.borderColor[index];

    // dividir el texto en dos líneas
    const textLines = (chart.data.labels[index] + ' ' + chart.data.datasets[0].data[index]).split(' ');

    // calcular la posición de la segunda línea de texto
    const lineHeight = parseInt(ctx.font, 10) * 1.2; // altura de la fuente
    const secondLineY = yLine + lineHeight / 2;

    // dibujar las dos líneas de texto
    ctx.fillText(textLines[0], xLine + extraLine + plusFivePx, yLine - lineHeight / 2);
    ctx.fillText(textLines[1], xLine + extraLine + plusFivePx, secondLineY);
}
