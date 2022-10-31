async function renderPost(arr){

  const ulMain = document.querySelector(".ulMainList")
    arr.forEach(element =>{
      let liList = document.createElement("li")
      liList.classList.add("liList", "flex", "flex-column")

      let figure = document.createElement("figure")
      figure.innerHTML = `<img class="img-post" src="${element.image}">`

      let divPostDescription = document.createElement("div")
      divPostDescription.classList.add("box-post-description", "flex", "flex-column")
      divPostDescription.innerHTML = `
      <h2 class="title-post">${element.title}</h2>
      <p class="text-post">${element.description}</p>
      `
      let buttonPost = document.createElement("button")
      buttonPost.classList.add("button-post")
      buttonPost.innerHTML = "Acessar conteúdo"

      buttonPost.addEventListener("click", e =>{
        setTimeout(function(){
          window.location.replace(`../../pages/post/index.html?value=${element.id}`)
        }, 500)
      })

      divPostDescription.appendChild(buttonPost)
      liList.append(figure, divPostDescription)
      ulMain.append(liList)
    })
}

export {
    renderPost
}