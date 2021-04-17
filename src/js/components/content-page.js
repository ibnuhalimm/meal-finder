import '../../css/style.css';

class ContentPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div></div>
        `;
    }
}

customElements.define('content-page', ContentPage);