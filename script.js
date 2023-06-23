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


let countBuy = 0
let countClick = 0, countClick2 = 0

aboutProducts.classList.add('hide')
productsBtn.addEventListener('click', function () {
    countClick++
    aboutProducts.classList.remove('hide')
    if (countClick > 1) {
        aboutProducts.classList.add('hide')
    }
})


infoWhoWeAre.classList.add('hide')
whoWeAreBtn.addEventListener('click', function () {
    countClick2++
    infoWhoWeAre.classList.remove('hide')
    if (countClick2 > 1) {
        infoWhoWeAre.classList.add('hide')
    }
})

buttonBuy.addEventListener('click', function () {
    countBuy++
    numberOfproducts.textContent = countBuy
})
fieldForInfo.classList.add('hide')
form.classList.add('hide')
infoButton.addEventListener('click', function () {
    fieldForInfo.classList.remove('hide')
    fieldForInfo.classList.add('#information')
})

logInBtn.addEventListener('click', function () {
    form.classList.remove('hide')
})

itemsHeader.classList.add('hide')
menuBurger.addEventListener('click', function () {

    itemsHeader.classList.remove('hide')
    itemsHeader.classList.add('visible')
   
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