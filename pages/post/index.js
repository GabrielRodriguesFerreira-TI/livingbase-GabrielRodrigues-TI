import { getPost } from "../../src/scripts/api.js";
import { creatButtonsNav } from "../../src/scripts/buttonsList.js";
import { scrollBar } from "../../src/scripts/scrollBar.js";
import { content, header } from "../../src/scripts/showPost.js";
// -----------------------------------------------------
creatButtonsNav()
scrollBar()
// -----------------------------------------------------

function location(){
    const buttonHome = document.querySelector(".button-home")
    buttonHome.addEventListener("click", (e)=>{
        localStorage.removeItem("button")
        setTimeout(function(){
            window.location.replace("../home/index.html")
        }, 500)
    })
}
location()

function headerConstructor(obj){
    header(obj.title, obj.description)
}

function contentConstructor(obj){
    content(obj.image, obj.content)
}


function backToHome(){
    const buttonsNav = document.querySelectorAll(".child-button")
    buttonsNav.forEach(buttons =>{
        buttons.addEventListener("click", el=>{
            let buttonJson = JSON.stringify(el.target.innerText)
            let Lsbutton = localStorage.setItem("button", buttonJson)

            setTimeout(function(){
                window.location.replace("../home/index.html")
            }, 500)
        })
    })
}

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('value');

async function Main(id){

    const post = await getPost(`https://m2-api-living.herokuapp.com/news/${id}`)

    headerConstructor(post)

    contentConstructor(post)

    backToHome()
}
Main(myParam)