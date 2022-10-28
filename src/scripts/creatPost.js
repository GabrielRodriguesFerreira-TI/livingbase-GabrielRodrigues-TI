import { searchPages } from "./api.js"

async function creatPostsFilter(page){
  const ulMain = document.querySelector(".ulMainList")
  if(page <= 2){

      const pagesPost = await searchPages(page)
      const objLS = JSON.parse(localStorage.getItem("Posts"))
      
     let postFilter = pagesPost.news.filter(element =>{
     
         return element.category == objLS.category  
      })
    
      postFilter.forEach(element =>{
  
          ulMain.insertAdjacentHTML("beforeend", `
          <li class="liList flex flex-column">
            <figure>
              <img class="img-post" src="${element.image}">
            </figure>
            <div class="box-post-description flex flex-column">
              <h2 class="title-post">${element.title}</h2>
              <p class="text-post">${element.description}</p>
              <button class="button-post">Acessar conteúdo</button>
            </div>
          </li>
          `)
          location(element.id)
        })
    }
}

async function creatPost(page){

  const ulMain = document.querySelector(".ulMainList")
  if(page <= 2){

    const pagesPost = await searchPages(page)

    pagesPost.news.map(element =>{
      ulMain.insertAdjacentHTML("beforeend", `
      <li class="liList flex flex-column">
        <figure>
          <img class="img-post" src="${element.image}">
        </figure>
        <div class="box-post-description flex flex-column">
          <h2 class="title-post">${element.title}</h2>
          <p class="text-post">${element.description}</p>
          <button class="button-post">Acessar conteúdo</button>
        </div>
      </li>
      `)
      location(element.id)
    })
  }
}

function location(id){
  const buttonPost = document.querySelectorAll(".button-post")
  buttonPost.forEach(element =>{
    element.addEventListener("click", ()=>{
      setTimeout(function(){
        window.location.replace(`../../pages/post/index.html?value=${id}`)
      }, 500)
    })
  })
}

export {
    creatPostsFilter,
    creatPost
}