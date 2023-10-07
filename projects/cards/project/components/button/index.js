export class ButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHtml(text) {
        return `<button type="button" class="btn btn-primary">${text}</button>`
    }

    render(text) {
        const html = this.getHtml(text);
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}