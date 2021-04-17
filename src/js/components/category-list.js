import './category-item.js';

class CategoryList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set categories(data) {
        this._categories = data;
        this.render();
    }

    render() {
        this.innerHTML = '';

        if (this._categories !== undefined && this._categories !== null) {
            this._categories.map(category => {
                const categoryItem = document.createElement('category-item');
                categoryItem.category = category;

                this.appendChild(categoryItem);
            });
        }
    }
}

customElements.define('category-list', CategoryList);