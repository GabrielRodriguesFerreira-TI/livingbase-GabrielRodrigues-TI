function header(title, description){
    const boxHeader = document.querySelector(".box-header-main")
    boxHeader.insertAdjacentHTML("beforeend", `
    <h2 class="title-1">${title}</h2>
    <span class="text-header">${description}</span>
    `)
}

function content(image, content){
    const boxContent = document.querySelector(".box-content-main")
    boxContent.insertAdjacentHTML("afterbegin", `
    <figure class="figure-post">
      <img class="img-content" src="${image}" alt="">
    </figure>

    <p class="text-description-post">${content}</p>
    `)
}

export {
    header,
    content
}