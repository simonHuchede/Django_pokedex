let triggerDmode = document.getElementById('trigger')
const body = document.body
const iconDark = document.querySelector('#dark_icon')
const iconLight = document.querySelector('#light_icon')
const checkboxTrigger = document.querySelector('.trigger_checkbox')
// darkMode verify localStorage to set mode
switch(localStorage.getItem('mode')){
    case 'light' : light();break;
    case 'dark' : dark();break;
    default : light();break;
}

// darkMode gestion trigger
triggerDmode.addEventListener('click', darkMode)
function darkMode(){
    if(localStorage.getItem('mode') == "dark"){
        console.log('dark_trigger')
        light()
    }else if (localStorage.getItem('mode') == "light"){
        console.log('light-trigger')
        dark()
    }
}
function light(){
    body.classList.add('light-theme')
    body.classList.remove('dark-theme')
    iconDark.style = "display : none";
    iconLight.style= "display : block";
    chart.options.scales.x.ticks.color = "black"
    localStorage.setItem('mode','light')
    chart.options.scales.y.ticks.color = "black"
    chart.update()
}
function dark(){
    body.classList.add('dark-theme')
    body.classList.remove('light-theme')
    iconDark.style = "display : block";
    iconLight.style= "display : none";
    chart.options.scales.x.ticks.color = "white"
    chart.options.scales.y.ticks.color = "white"
    checkboxTrigger.checked = true;
    localStorage.setItem('mode','dark')
    chart.update()
}