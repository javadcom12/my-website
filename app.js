// set background color for item menu
let liElem=document.querySelectorAll('.l')
liElem.forEach(item=>{
  item.addEventListener('click',function(){
    liElem.forEach(item=>{
        item.style.backgroundColor='gray'
    })
      item.style.backgroundColor='black'
  })
})


