class CategoryItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set category(categoryObject) {
        this._category = categoryObject;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                <div class="h-28 md:h-24 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('${this._category.strCategoryThumb}')"></div>
                <div class="px-6 py-4 text-center font-bold bg-gray-100">
                    <h2 class="truncate">${this._category.strCategory}</h2>
                </div>
            </div>
        `;
    }
}

customElements.define('category-item', CategoryItem);