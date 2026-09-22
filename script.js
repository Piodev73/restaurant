const diapo = document.querySelector('.diapo')
const images = document.querySelectorAll('.diapo img')
const bouttonsuivant = document.querySelector('.fleche-suivant')
const bouttonprecedent = document.querySelector('.fleche-precedent')
const points = document.querySelectorAll('.point')

let index = 0

function maj(){
    diapo.style.transform = `translateX(-${index * 100}%)`

    points.forEach(point=>{point.classList.remove('actif')})
    points[index].classList.add('actif')
}

function suivant(){
    index = (index +1)% images.length
    maj()
}
function precedent(){
    index = (index -1 +images.length)% images.length
    maj()
}

bouttonsuivant.addEventListener('click',suivant)
bouttonprecedent.addEventListener('click',precedent)

points.forEach((point,i)=>{
    point.addEventListener('click',()=>{
        index = i
        maj()
    })
})

setInterval(suivant,2500)


const elements = document.querySelector('.imageabout')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible')
        }
    })
})

observer.observe(elements)