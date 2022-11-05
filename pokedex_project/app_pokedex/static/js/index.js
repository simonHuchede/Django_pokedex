
const labels = [
    'Force' ,
    'Intelligence',
    'Sagesse',
    'Puissance'
]
const data = {
    labels : labels,
    datasets : [{
        label : 'My first dataset',
        backgroundColor : [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(55, 429, 501)',
            'rgb(24, 62, 25)',
        ],
        borderColor : 'rgb(255,99,132)',
        data : [300,50,40,64]
    }]
}
const config = {
    type : 'pie',
    data : data,
    options : {
        responsive : false,
    }
}
const chart = new Chart(document.getElementById('myChart'),config);