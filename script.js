var h1Id=document.getElementById('h1')
var buttonId=document.getElementById('image')
var counter=0
var upgrade=1
var shop=document.getElementById('openshop')
var back=document.getElementById('closeshop')
var shopin=document.getElementById('upgrade')
let progressBar = document.getElementById('pro');
var value=50
var progress=500
var energu=document.getElementById('energy')
var priblvchas=0
var poprikazy=100
var ok=document.getElementById('ok')
var priblzatap=document.getElementById('priblzatap')
var energylimit=document.getElementById('energyplus')

do {
    setInterval(() => pribl(), 1000);
} while (progress<500); 

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
        buttonId.setAttribute('style', 'transform: scale(20%) translateY(-15%);')
        counter=counter+upgrade
        h1Id.textContent=counter
        progress=progress-1
        energu.textContent=`${progress}/500`
        progressBar.setAttribute('value', progress)
        setInterval(() => buttonId.setAttribute('style', 'transform: scale(70%) translateY(-15%);'), 10);
    }
    else {}
    
})

shop.addEventListener('click', function(){
    shop.classList.add('hidden')
    back.classList.remove('hidden')
    shopin.classList.remove('hidden')
})

back.addEventListener('click', function(){
    shop.classList.remove('hidden')
    back.classList.add('hidden')
    shopin.classList.add('hidden')
})

ok.addEventListener('click', function(){
    if (counter>=10) {
        priblvchas=priblvchas+3600
        counter=counter-10
    }
    else {}
})
