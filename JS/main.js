var elBtn = document.querySelector('.btn')
var elTitle = document.querySelector('.title')
var elInp = document.querySelector('.inp')






function fn() {
    // var str = elInp.value

    if (elInp.value.length >= 8 && elInp.value.match(/[a-zA-Z]/gi) && elInp.value.match(/[0-9]/g) && elInp.value.match(/[*+-/,.]/g) && elInp.value.trim()
       
    ) {
        elInp.style.borderBottom = '3px solid blue'
        elTitle.innerHTML = 'Kuchli pasword'
    } else {
        elInp.style.borderBottom = '3px solid green'
        elTitle.innerHTML = "Kuchsiz pasword"
    }




}


// 

























































