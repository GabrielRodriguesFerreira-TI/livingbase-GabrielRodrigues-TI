import { getApiAll } from "./api.js"
import { renderPost } from "./creatPost.js"

let page = 1

async function renderAllposts (){
    const pages = await getApiAll("https://m2-api-living.herokuapp.com/news")
    renderPost(pages[page])

    page++
}

const observer = new IntersectionObserver(entries =>{
    renderAllposts()
})

export {
    observer
}