async function searchPages(page){
   const post = await fetch(`https://m2-api-living.herokuapp.com/news?page=${page}`)
   const response = await post.json()
   return response
}

export {
    searchPages
}