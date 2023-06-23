let buttonBuy = document.querySelector('.buy')
let numberOfproducts = document.querySelector('.cart')
let infoButton = document.querySelector('.infoButton')
let fieldForInfo = document.querySelector('.fieldForInfo')
let sesame = document.querySelector('.sesame')
let peanut = document.querySelector('.peanut')
let hazelnut = document.querySelector('.hazelnut')
let cashew = document.querySelector('.cashew')
let almond = document.querySelector('.almond')
let logInBtn = document.querySelector('.login')
let form = document.querySelector('form')
let productsBtn = document.querySelector('.ourProducts')
let aboutProducts = document.querySelector('.aboutProducts')
let whoWeAreBtn = document.querySelector('.whoWeAre')
let infoWhoWeAre = document.querySelector('.whoWeAreInfo')
let menuBurger = document.querySelector('.menu_burger')
let itemsHeader = document.querySelector('.items_header')
let contBtn=document.querySelector('.cont')
let compBtn=document.querySelector('.comp')
let prodBtn=document.querySelector('.prod')
let helpBtn=document.querySelector('.help')
let cont=document.querySelector('.contDiv')
let comp=document.querySelector('.compDiv')
let prod=document.querySelector('.prodDiv')
let help=document.querySelector('.helpDiv')
let btnConfirm=document.querySelector('.confirmbtn')
let arr=[cont,comp,prod,help]

let countBuy = 0
let countClick = 0, countClick2 = 0

aboutProducts.classList.add('hide')
productsBtn.addEventListener('click', function (event) {
    event.preventDefault()
    countClick++
    aboutProducts.classList.remove('hide')
    if (countClick > 1) {
        aboutProducts.classList.add('hide')
    }
})


infoWhoWeAre.classList.add('hide')
whoWeAreBtn.addEventListener('click', function (event) {
    event.preventDefault()
    countClick2++
    infoWhoWeAre.classList.remove('hide')
    if (countClick2 > 1) {
        infoWhoWeAre.classList.add('hide')
    }
})

buttonBuy.addEventListener('click', function (event) {
    event.preventDefault()
    countBuy++
    numberOfproducts.textContent ='Card-'+ countBuy
})
fieldForInfo.classList.add('hide')
form.classList.add('hide')
let count7=0
infoButton.addEventListener('click', function (event) {
    event.preventDefault()
    count7++
    fieldForInfo.classList.remove('hide')
    fieldForInfo.classList.add('#information')
    if (count7>1){
        fieldForInfo.classList.add('hide')
    }
})

logInBtn.addEventListener('click', function (event) {
    event.preventDefault()
    form.classList.remove('hide')
})

itemsHeader.classList.add('hide')
menuBurger.addEventListener('click', function (event) {
    event.preventDefault()
    itemsHeader.classList.remove('hide')
    itemsHeader.classList.add('visible')
    menuBurger.classList.add('hide')
})

autoslider()
let left = 0


function autoslider() {
    let timer
    timer = setTimeout(function () {
        let typesOfProducts = document.querySelector('.types_of_products')

        left = left - 300
        if (left < -600) {
            left = 0
            clearTimeout(timer)
        }
        typesOfProducts.style.left = left + 'px'
        autoslider()
    }, 2000)
}

autosliderInfo()
let leftInfo = 0


function autosliderInfo() {
    let timerInfo
    timerInfo = setTimeout(function () {
        let rightInfo = document.querySelector('.right_information')

        leftInfo = leftInfo - 400
        if (leftInfo < -400) {
            leftInfo = 0
            clearTimeout(timerInfo)
        }
        rightInfo.style.left = left + 'px'
        autosliderInfo()
    }, 2000)
}



let listOfUsers = document.querySelector('.list')
listOfUsers.classList.add('hide')
let user = {}
let list2 = []
form.submit.addEventListener('click', function (event) {
    event.preventDefault()
    user.name = form.name.value
    user.surname = form.surname.value
    user.phone = form.phone.value
    user.email = form.email.value
    list2 = getData('list')
    list2.push(user)
    user = {}
    console.log(user)
    setData(list2)
    form.classList.add('hide')

})




function setData(list2) {
    let json = JSON.stringify(list2)
    localStorage.setItem('list', json)
}

function getData(key) {
    let data = localStorage.getItem(key)
    return JSON.parse(data)
}


for (let i=0;i<arr.length;i++){
    arr[i].classList.add('hide')
}
let count3=0,count4=0,count5=0,count6=0
contBtn.addEventListener('click',function(event){
    event.preventDefault()
    count3++
   cont.classList.remove('hide')
  
   cont.classList.add('contDiv')
   if (count3>1){
    cont.classList.add('hide')
   }
})
compBtn.addEventListener('click',function(event){
    event.preventDefault()
    count4++
   comp.classList.remove('hide')
  
   comp.classList.add('compDiv')
   if (count4>1){
    comp.classList.add('hide')
   }
})
prodBtn.addEventListener('click',function(event){
    event.preventDefault()
    count5++
   prod.classList.remove('hide')
  
   prod.classList.add('prodDiv')
   if (count5>1){
    prod.classList.add('hide')
   }
})
helpBtn.addEventListener('click',function(event){
    event.preventDefault()
    count6++
   help.classList.remove('hide')
  
   help.classList.add('helpDiv')
   if (count6>1){
    help.classList.add('hide')
   }
})


btnConfirm.addEventListener('click',function(event){
    confirm('Вы подтверждаете?')
})