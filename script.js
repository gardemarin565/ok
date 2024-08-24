const { default: mongoose } = require('mongoose')
const mongoClient = require('mongoose')
const schema = mongoose.Schema
var h1Id=document.getElementById('h1')
var buttonId=document.getElementById('image')
var counter=0
var upgrade=1
let progressBar = document.getElementById('pro');
var progress=500
var energu=document.getElementById('energy')
var priblzatap=document.getElementById('priblzatap')
var energylimit=document.getElementById('energyplus')
var EnergyLimitUpgrade = 500
var tap = document.getElementById('tap')
var shop = document.getElementById('shopin')
var h1IdShop = document.getElementById('clicker')
let params = new URLSearchParams(document.location.search)
let value = params.get('id')

mongoose.connect('mongodb+srv://user:aJWgbAfKJ8HxYcCU@test.gxsso.mongodb.net/?retryWrites=true&w=majority&appName=Test')

const userScheme = new schema({
    id: Number,
    coins: Number,
    energy: Number,
    energyLimit: Number,
    tapin: Number,
    autotap: Boolean
})

function loadProgress(){
    const User = mongoose.model("User", userScheme)
    User.find({id: value}, function(err, data){
        if(data.length == 0){
            async function coin() {
                const user = new User({id: value, coins: 0, energy: 500, energyLimit: 500, tapin: 1, autotap: false})
                await user.save()
                await mongoose.disconnect()
            }
            coin()
        }
        else{}
    })
}
loadProgress()

const energycharge=() => {
    if (progress<EnergyLimitUpgrade) {
        progress=progress+1
        progressBar.setAttribute('value', progress)
        energu.textContent=`${progress}/500`
    }
    else {}
}

do {
    setInterval(() => energycharge(), 1000);
} while (progress<EnergyLimitUpgrade);

buttonId.addEventListener('click', function(){
    if(progress!=0) {
        counter=counter+upgrade
        h1Id.textContent = counter
        progress=progress-1
        energu.textContent=`${progress}/${EnergyLimitUpgrade}`
        progressBar.setAttribute('value', progress)
    }
    else {}
})

priblzatap.addEventListener('click', function() {
    if (counter>=200) {
        counter=counter-200
        EnergyLimitUpgrade=EnergyLimitUpgrade+500
        h1Id.textContent=counter
    }
})

shop.addEventListener('click', function() {
    h1IdShop.textContent=counter
})