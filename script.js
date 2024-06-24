var h1Id=document.getElementById('h1')
var buttonId=document.getElementById('image')
var counter=0
var upgrade=1
var shop=document.getElementById('openshop')
var back=document.getElementById('closeshop')
var ruffs=document.getElementById('upgrade')

buttonId.addEventListener('click', function(){
    counter=counter+upgrade
    h1Id.textContent=counter
})

shop.addEventListener('click', function(){
    shop.classList.add('hidden')
    back.classList.remove('hidden')
    ruffs.classList.remove('hidden')
})

back.addEventListener('click', function(){
    shop.classList.remove('hidden')
    back.classList.add('hidden')
    ruffs.classList.add('hidden')
})

ruffs.addEventListener('click', function(){
    upgrade=upgrade+1
    counter=counter-10
    h1Id.textContent=counter
})