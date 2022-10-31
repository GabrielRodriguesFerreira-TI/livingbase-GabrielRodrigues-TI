import { scrollBar } from "../../src/scripts/scrollBar.js"
import { creatButtonsNav } from "../../src/scripts/buttonsList.js"
import { getApiFilter, getApiAll } from "../../src/scripts/api.js"
import { renderPost} from "../../src/scripts/creatPost.js"
import { observer } from "../../src/scripts/intersection.js"
import { filterPost, filterPostLS } from "../../src/scripts/filter.js"


scrollBar()
creatButtonsNav()

// ------------------------------------------------
const ulMain = document.querySelector(".ulMainList")
const buttonsNav = document.querySelectorAll(".child-button")
// ------------------------------------------------

async function Main(){
    buttonsNav.forEach(buttons =>{

        buttons.addEventListener("click", async el =>{
            let toggle = buttonsNav
            toggle.forEach(element =>{
                element.classList.remove("active")
            })

            ulMain.innerHTML = ""
            el.target.classList.add("active")

            const pagesAll = await getApiAll("https://m2-api-living.herokuapp.com/news")
            const pagesFilter = await getApiFilter("https://m2-api-living.herokuapp.com/news")
            filterPost(pagesFilter, pagesAll, el)
        })
    })
}

async function load(){
    let localstorage = JSON.parse(localStorage.getItem("button"))

    if(!localStorage.getItem("button") || localstorage == "Todos"){
        buttonsNav.forEach(buttons =>{
            if(buttons.innerText == "Todos"){
                buttons.classList.add("active")
            } 
        })
        const pagesAll = await getApiAll("https://m2-api-living.herokuapp.com/news")
        renderPost(pagesAll[0])
    
        const DivObserver = document.createElement("div")
        DivObserver.classList.add("Observer", "absolute")
        ulMain.appendChild(DivObserver)
    
        observer.observe(DivObserver)

    } else {
        buttonsNav.forEach(async buttons =>{
            if(buttons.innerText == localstorage){
                
                let toggle = buttonsNav
                toggle.forEach(element =>{
                    element.classList.remove("active")
                })
    
                ulMain.innerHTML = ""
                buttons.classList.add("active")
    
                const pagesFilter = await getApiFilter("https://m2-api-living.herokuapp.com/news")
                filterPostLS(pagesFilter, buttons)
            }
        })
    }

}


window.addEventListener("DOMContentLoaded", (event) =>{
    load()
    Main()
})