const dropdown = document.querySelector('.dropdown')
dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active')
})
function setText(value) {
    document.querySelector('.textBox').value = value
}
const input = document.querySelector('.textBox')

input.addEventListener('keyup', (e)=> {
    const value = input.value.toUpperCase();
    const opt = document.querySelectorAll('.item')
    for( i = 0; i < opt.length; i++){
        let txtValue = opt[i].textContent || opt[i].innerText;
        if (txtValue.toUpperCase().indexOf(value)> -1){
            opt[i].style.display = "";
        }else{
            opt[i].style.display = "none"
        }
    }
})
document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click',() => {
        if(document.querySelector('.buildTeam').childElementCount >= 3){
            let flash = document.querySelector('.flash');
            flash.classList.add('flash-is-showing');
            flash.textContent = "You only can have 3 pokemons in your team !"
            return;
        }else{
            fetch(`https://pokeapi.co/api/v2/pokemon/${item.textContent.toLowerCase()}`)
       .then(res => res.json())
       .then(
        res => {
            let template = document.getElementById('template_card')
            let clone = template.content.cloneNode(true)
            let card_img = clone.querySelector('.card_pokemon_team_img')
            let div = clone.querySelector('.card_pokemon_team')
            let img = document.createElement('img')
            let svg = clone.querySelector('svg')
            //let typeDiv = clone.querySelector('.card-type')
            //let urlType = clone.querySelector('.url')
            //if(res.types.length >= 1){
            //    for(i=0; i< res.types.length; i++){
            //        let type = res.types[i].type.name
            //        let img = document.createElement('img')
            //        let span = document.createElement('span')
            //       img.src = `${urlType.value+type}.svg`
            //        img.classList.add('svg-type')
            //        img.alt = "type_pokemon"
            //       span.textContent = type
            //        typeDiv.appendChild(img)
            //       typeDiv.appendChild(span)
            //    }
            //}
            svg.value = item.textContent
            let spanTitle = clone.querySelector('#pokemon_name')
            div.classList.add(item.textContent)
            img.src = res.sprites.other.dream_world.front_default
            card_img.append(img)
            spanTitle.textContent = item.textContent
            document.querySelector('.buildTeam').appendChild(clone)
            })
        }
    })
})
function deletePokemon(any){
    document.querySelector('.'+any.value).remove()
}
document.querySelector('.flash').addEventListener('animationend', function(){
    document.querySelector('.flash').classList.remove('flash-is-showing');
  })