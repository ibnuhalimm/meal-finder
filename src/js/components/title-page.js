class TitlePage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set text(titleText) {
        this._titleText = titleText;
        this.render();
    }

    render() {
        this.innerHTML = `
            <h1 class="text-2xl mb-5">${this._titleText}</h1>
        `;
    }
}

customElements.define('title-page', TitlePage);