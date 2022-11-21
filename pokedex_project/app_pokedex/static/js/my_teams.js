/**
 * Simple procedure to delete each childs and the parent who's sended in parameter
 * @param  {[HTMLElement]} args [Give HTML Element who want's to be delete him & his childs]
 * @return {[void]}
 */
function deletePokemon(any){
    document.querySelector('.'+any.value).remove()
}

/*
* add a flash message 
*/
document.querySelector('.flash').addEventListener('animationend', function(){
    document.querySelector('.flash').classList.remove('flash-is-showing');
})

/**
 * Build a chart with a static configuration to have the same Charts
 * @param  {[JSON]} stats Raw stats from PokeApi
 * @param  {[HTMLElement]} parentDiv Parent div to append the chart 
 * @return {[void]}
 */
function getStats(statsRaw, div) {
    const stats = {
        'hp' : statsRaw[0].base_stat,
        'atq' : statsRaw[1].base_stat,
        'def' : statsRaw[2].base_stat,
        'atqSpe' : statsRaw[3].base_stat,
        'defSpe' : statsRaw[4].base_stat,
        'speed' : statsRaw[5].base_stat
    }
    const labels = [
    'HP',
    'Attack',
    'Defense',
    'Attack special',
    'Defense special',
    'Speed']
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
        data : [stats.hp,
            stats.atq,
            stats.def,
            stats.atqSpe,
            stats.defSpe,
            stats.speed,
        ],
        maxBarThickness: 15
    }
    ]
    }
    const config = {
    type : 'bar',
    data : data,
    options : {
        responsive : true,
        labels : false,
        plugins : {
            legend : {
                display : false,
                },
            
        },
        scales : {
            y : {
                beginAtZero: true
            }
        }
    }
    }
    const chart = new Chart(div,config);
}
