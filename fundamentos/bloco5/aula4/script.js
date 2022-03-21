window.onload = function () {
 
select = document.querySelector('select')
select.addEventListener('change',function () {
    let troca = select.selectedOptions[0]
document.body.style.backgroundColor = troca.value
})

}
