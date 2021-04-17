class MessageInfo extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set text(messageText) {
        this._messageText = messageText;
        this.render();
    }

    render() {
        this.innerHTML = '';
        if (this._messageText !== undefined && this._messageText !== null) {
            this.innerHTML += `
                <p class="text-blue-500">${this._messageText}</p>
            `;
        }
    };
}

customElements.define('message-info', MessageInfo);