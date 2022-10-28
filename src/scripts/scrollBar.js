function scrollBar(){
    const buttonLeft = document.querySelector(".icon-left")
    const left = document.querySelector(".scroll-buttons")
    buttonLeft.addEventListener("click", ()=>{
        left.scrollBy(-200, 0)
    })
    const buttonRight = document.querySelector(".icon-right")
    const right = document.querySelector(".scroll-buttons")
    buttonRight.addEventListener("click", ()=>{
        right.scrollBy(200, 0)
    })
}


export {
    scrollBar
}