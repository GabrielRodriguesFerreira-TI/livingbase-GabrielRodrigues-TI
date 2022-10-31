async function getApiFilter(urlApi){
    let pages = []
    for(let i = 0; i <= 2; i++){
        const post = await fetch(`${urlApi}?page=${i}`)
        const response = await post.json()
        
        pages = [...pages,...response.news]
    }
    return pages
}

async function getApiAll(urlApi){
    let pages = []
    for(let i = 0; i <= 2; i++){
        const post = await fetch(`${urlApi}?page=${i}`)
        const response = await post.json()
        
        pages.push(response.news)
    }
    return pages
}

async function getPost(urlApi){
    const post = await fetch(`${urlApi}`)
    const response = await post.json()

    return response
}

export {
    getApiFilter,
    getApiAll,
    getPost
}