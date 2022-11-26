/**
 * Simple procedure to delete each childs and the parent who's sended in parameter
 * @param  {[HTMLElement]} args [Give HTML Element who want's to be delete him & his childs]
 * @return {[void]}
 */
function deletePokemon(any){
    console.log(any)
    document.querySelector('.'+any.value).remove()
}
function deleteTeam(any){
    console.log(any)
    document.querySelector('.team_container'+any.value).remove()
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
 * @return {[Chart]} Object chart from ChartJS
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
    }]
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
    return new Chart(div,config);
}
var idTeam= 0
function addTeam(){
    let template = document.getElementById('team')
    let clone = template.content.cloneNode(true)
    let dropDown = clone.querySelector('.dropdown')
    let buildTeam = clone.querySelector('.buildTeam')
    let textBox = clone.querySelector('.textBox')
    let item = clone.querySelectorAll('.item')
    let teamName = clone.querySelector('.team_name')
    let teamDiv = clone.querySelector('.team_container')
    let svg = clone.querySelector('.svg_delete')
    idTeam++
    item.forEach((item)=>item.classList.add('item_team'+idTeam))
    teamDiv.classList.add('team_container'+idTeam)
    svg.value = idTeam
    dropDown.classList.add('team_'+idTeam)
    teamName.textContent = "Team n°"+idTeam
    buildTeam.classList.add('buildTeam_'+idTeam)
    textBox.classList.add('TextBox_team_'+idTeam)
    // avoid chart bug
    // event listener to toggle active class 
    dropDown.addEventListener('click', () => {
        dropDown.classList.toggle('active')
    })
    /**
    * add event listener on the input search to sort the select items with query
    */
    clone.querySelector('.TextBox_team_'+idTeam).addEventListener('keyup', (e)=> {
        const value = document.querySelector('.TextBox_team_'+idTeam).value.toUpperCase();
        const opt = document.querySelectorAll('.item_team'+idTeam)
        for( i = 0; i < opt.length; i++){
            let txtValue = opt[i].textContent || opt[i].innerText;
            if (txtValue.toUpperCase().indexOf(value)> -1){
                opt[i].style.display = "";
            }else{
                opt[i].style.display = "none"
            }
        }
    })
    // Add a event listener to all items in the select
    // When an item is clicked there is a request on the precise pokemon to get more informations
    // all the data is send on the dom with a template who's cloned
    clone.querySelectorAll('.item_team'+idTeam).forEach((item) => {
        item.addEventListener('click',(e) => {
            const flash = document.querySelector('.flash');
            if(document.querySelector('.buildTeam_'+e.target.classList[1].slice(-1)[0]).childElementCount >= 5){
                flash.classList.add('flash-is-showing');
                flash.textContent = "5 Pokemons are allowed !"
                return;
            }
        fetch(`https://pokeapi.co/api/v2/pokemon/${item.textContent.toLowerCase()}`)
        .then(res => res.json())
        .then(
            pokemon => {
                    buildCard(pokemon,e.target.classList[1].slice(-1)[0])
                })
        })
    })
    document.querySelector('.container-teams').appendChild(clone)
}
/**
* add event listener on the input search to sort the select items with query
*/
let elmts = ['click', 'keyup']
const input = document.querySelector("#input_search");
elmts.forEach( evt =>
    input.addEventListener(evt, ()=> {
        const value = input.value.toUpperCase();
        const opt = document.querySelectorAll('.option')
        if(value.length >= 3){
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
/**
* remove the pokemon card via this
*/
function deletePokemon(any){
    document.querySelector('.'+any.value).remove()
}