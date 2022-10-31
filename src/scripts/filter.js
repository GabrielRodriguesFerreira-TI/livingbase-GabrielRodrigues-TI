import { renderPost } from "./creatPost.js"

function filterPost(pagesFilter, pagesAll, button){
    const ulMain = document.querySelector(".ulMainList")
    if(button.target.innerText == "Todos"){
        renderPost(pagesAll[0])

        const DivObserver = document.createElement("div")
        DivObserver.classList.add("Observer", "absolute")
        ulMain.appendChild(DivObserver)

        
        observer.observe(DivObserver)
        
    } else {
        const result = pagesFilter.filter(element =>{
            return element.category == button.target.innerText
        })
        renderPost(result)
    }
}

function filterPostLS(pagesFilter, button){
    const result = pagesFilter.filter(element =>{
        return element.category == button.innerText
    })
    renderPost(result)
}

export{
    filterPost,
    filterPostLS
}