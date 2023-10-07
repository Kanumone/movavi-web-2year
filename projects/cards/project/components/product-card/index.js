export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.src}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        <button class="btn btn-primary" id="card-button-${data.id}" data-id="${data.id}">Нажми на меня</button>
                    </div>
                </div>
            `
        )
    }

    addListeners(data, listner) {
        document
            .getElementById(`card-button-${data.id}`)
            .addEventListener('click', listner);
    }
    
    render(data, listner) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listner)
    }
}