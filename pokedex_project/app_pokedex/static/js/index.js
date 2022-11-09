const stats = {
    'hp' : document.getElementById('hp').value,
    'atq' : document.getElementById('atq').value,
    'def' : document.getElementById('def').value,
    'atqSpe' : document.getElementById('atqspe').value,
    'defSpe' : document.getElementById('defspe').value,
    'speed' : document.getElementById('speed').value
}
console.log(stats)
const labels = [
    'HP' ,
    'Attack',
    'Defense',
    'Attack special',
    'Defense special',
    'speed'
]
const data = {
    labels : labels,
    datasets : [{
        label : 'Statistics',
        labels : labels,
        backgroundColor : [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(55, 429, 501)',
            'rgb(24, 62, 25)',
            'rgb(55, 429, 501)',
        ],
        borderColor : 'rgb(255,99,132)',
        data : [stats.hp,
            stats.atq,
            stats.def,
            stats.atqSpe,
            stats.defSpe,
            stats.speed,
        ]
    }]
}
const config = {
    type : 'bar',
    data : data,
    options : {
        interaction : {
            mode : 'index'
        },
        responsive : true,
        maintainAspectRatio : false,
    }
}
const chart = new Chart(document.getElementById('myChart'),config);
const triggerDmode = document.getElementById('trigger')

// darkMode gestion
triggerDmode.addEventListener('click', darkMode)
function darkMode(){
    let body = document.body
    let iconDark = document.querySelector('#dark_icon')
    let iconLight = document.querySelector('#light_icon')
    if(body.classList.contains('light-theme')){
        body.classList.add('dark-theme')
        body.classList.remove('light-theme')
        iconDark.style = "display : block";
        iconLight.style= "display : none";
    }else{
        body.classList.add('light-theme')
        body.classList.remove('dark-theme')
        iconDark.style = "display : none";
        iconLight.style= "display : block";
    }
        
}