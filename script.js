const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img = document.querySelectorAll('.img')
const thumb = document.querySelectorAll('.thumb')

img1.classList.add('show')
thumb.forEach((e)=>{
    e.addEventListener('click',()=>{
        if(e.classList.contains('green')){
            removeShow()
            img1.classList.add('show')
        } else if(e.classList.contains('pink')){
            removeShow()
            img2.classList.add('show')
        } else if(e.classList.contains('red')){
            removeShow()
            img3.classList.add('show')
        }
    })
})
function removeShow(){
    img.forEach(x=>{
        x.classList.remove('show')
    })
}