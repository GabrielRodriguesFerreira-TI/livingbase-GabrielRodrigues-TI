function creatButtonsNav(){
    const nameButtons = ["Todos", "Pintura", "Decoração", "Organização", "Limpeza", "Segurança", "Reforma", "Aromas", "Acabamentos", "Iluminação", "Construção"]
    const divScroll = document.querySelector(".scroll-buttons")
    nameButtons.forEach(element =>{
        divScroll.insertAdjacentHTML("beforeend", `
          <buttons class="child-button">${element}</buttons>
        `)
    })
}

export {
    creatButtonsNav
}