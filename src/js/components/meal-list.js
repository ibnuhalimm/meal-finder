import './meal-item.js';

class MealList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set meals(data) {
        this._meals = data;
        this.render();
    }

    render() {
        this.innerHTML = '';

        if (this._meals !== undefined && this._meals !== null) {
            this._meals.map(meal => {
                const mealItem = document.createElement('meal-item');
                mealItem.meal = meal;

                this.appendChild(mealItem);
            });
        }
    }
}

customElements.define('meal-list', MealList);