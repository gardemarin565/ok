var h1Id=document.getElementById('h1')
var buttonId=document.getElementById('image')
var counter=0
var upgrade=1
let progressBar = document.getElementById('pro');
var progress=500
var energu=document.getElementById('energy')
var priblzatap=document.getElementById('priblzatap')
var energylimit=document.getElementById('energyplus')

const energycharge=() => {
    if (progress<500) {
        progress=progress+1
        progressBar.setAttribute('value', progress)
        energu.textContent=`${progress}/500`
    }
    else {}
}

do {
    setInterval(() => energycharge(), 1000);
} while (progress<500);

buttonId.addEventListener('click', function(){
    if(progress!=0) {
        counter=counter+upgrade
        h1Id.textContent=counter
        progress=progress-1
        energu.textContent=`${progress}/500`
        progressBar.setAttribute('value', progress)
    }
    else {}
})