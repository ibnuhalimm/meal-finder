class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set onClickButton(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('input').value;
    }

    render() {
        this.innerHTML = `
            <div class="my-5 w-full md:w-1/2 lg:w-1/3 bg-white">
                <div class="flex flex-row border border-solid border-gray-300 rounded-md px-5 py-3">
                    <input type="text" class="w-full outline-none focus:outline-none" placeholder="Find any meal..." />
                    <button type="button" class="ml-3 outline-none focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        `;

        this.querySelector('button').addEventListener('click', this._clickEvent);
        this.querySelector('input').addEventListener('change', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);