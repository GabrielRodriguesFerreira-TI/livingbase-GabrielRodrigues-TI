import { scrollBar } from "../../src/scripts/scrollBar.js"
import { creatButtonsNav } from "../../src/scripts/buttonsList.js"
import { searchPages } from "../../src/scripts/api.js"
import { creatPostsFilter, creatPost } from "../../src/scripts/creatPost.js"
scrollBar()
creatButtonsNav()
// ------------------------------------------------
const ulMain = document.querySelector(".ulMainList")
const buttonsNav = document.querySelectorAll(".child-button")
const DivObserver = document.querySelector(".Observer")
let page = 0
// ------------------------------------------------
    let Local = JSON.parse(localStorage.getItem("Posts"))
    function teste(){
        if(Local.category == "Todos"){
            ulMain.innerHTML = ""
            page = 0
            ObserverPost() 
           
        } else{

            for(let i = 0; i <= 2; i++){
                ulMain.innerHTML = ""
                page = 0
                ObserverPostFilter()
                
            }
        }

            

    }
teste()
 

async function render(){
    const arrButtons = Array.from(buttonsNav)
    
    arrButtons.forEach(buttons =>{
        buttons.addEventListener("click", (e)=>{
    
            
            
            if(buttons.innerText == "Todos"){
                ulMain.innerHTML = ""
                page = 0
                const objJSON = JSON.stringify(constructor("Todos"))
                localStorage.setItem("Posts", objJSON)
    
                ObserverPost()
                
    
            }else {
                ulMain.innerHTML = ""
                page = 0
                const objJSON = JSON.stringify(constructor(e.target.innerText))
                localStorage.setItem("Posts", objJSON)
    
                
                ObserverPostFilter()
    
            }
        })
    })
}
render()


function constructor(value){
    const obj ={
        category: `${value}`,
    }
    return obj
}


function ObserverPostFilter(){
    const observer = new IntersectionObserver(entries => {
        if(entries.some(entry => entry.isIntersecting)){
            creatPostsFilter(page++)
        }
    })
    observer.observe(DivObserver)
}

function ObserverPost(){
    const observer = new IntersectionObserver(entries => {
        if(entries.some(entry => entry.isIntersecting)){
            creatPost(page++)
        }
    })
    observer.observe(DivObserver)
}