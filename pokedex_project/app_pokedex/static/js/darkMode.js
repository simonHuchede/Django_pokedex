let triggerDmode = document.getElementById('trigger')

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