// get Pokemon stats on hidden divs
const stats = {
    'hp' : document.getElementById('hp').value,
    'atq' : document.getElementById('atq').value,
    'def' : document.getElementById('def').value,
    'atqSpe' : document.getElementById('atqspe').value,
    'defSpe' : document.getElementById('defspe').value,
    'speed' : document.getElementById('speed').value
}
const labels = [
    'HP',
    'Attack',
    'Defense',
    'Attack special',
    'Defense special',
    'Speed'
]
const data = {
    labels : labels,
    datasets : [{
        backgroundColor : [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(55, 429, 501)',
            'rgb(24, 62, 25)',
            'rgb(50, 168, 82)',
        ],
        borderColor : 'rgb(255,99,132)',
        color : '#fffff',
        data : [stats.hp,
            stats.atq,
            stats.def,
            stats.atqSpe,
            stats.defSpe,
            stats.speed,
        ]
    }]
}
// Create an object to fully personalize it
const config = {
    type : 'bar',
    data : data,
    options : {
        responsive : true,
        maintainAspectRatio : false,
        plugins : {
            legend : {
                display : false,
            }
        },
        scales : {
            x : {
                ticks : {
                    color : document.body.classList.contains('light-theme') ? "rgb(0, 0, 0)" : "hsl(0, 0%, 100%)"
                }
            },
            y : {
                ticks : {
                    color : document.body.classList.contains('light-theme') ? "rgb(0, 0, 0)" : "hsl(0, 0%, 100%)"
                }
            }
        }
    }
}

// Create instance of my Bar Chart !
const charts = []
charts.push(new Chart(document.getElementById('myChart'),config))
const input = document.querySelector('#input_search')
/**
* add event listener on the input search to sort the select items with query
*/
let elmts = ['click', 'keyup']

elmts.forEach( evt => 
    input.addEventListener(evt, ()=> {
        const value = input.value.toUpperCase();
        const opt = document.querySelectorAll('.option')
        if(value.length >= 4){
            for( i = 0; i < opt.length; i++){
                let txtValue = opt[i].textContent || opt[i].innerText;
                document.querySelector('.results').classList.add('active')
                if (txtValue.toUpperCase().indexOf(value)> -1){
                    opt[i].style.display = "";
                }else{
                    opt[i].style.display = "none"
                }
            }
        }
        
    })
    )

input.addEventListener('blur', () => {
    document.querySelector('.results').classList.remove('active')
})