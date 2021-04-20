class MealItem extends HTMLElement {
    connectedCallback() {
        this._buttonText = 'View Details';
        this.render();
    }

    set meal(mealObject) {
        this._meal = mealObject;
        this.render();
    }

    set buttonText(buttonText) {
        this._buttonText = buttonText;
        this.render();
    }

    set viewMealHandler(event) {
        this._viewMealHandler = event;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                <div class="h-44 sm:h-32 md:h-36 lg:h-32 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('${this._meal.strMealThumb}')"></div>
                <div class="px-6 py-4 text-center font-bold">
                    <h2 class="truncate text-lg">${this._meal.strMeal}</h2>
                </div>
                <div class="text-center pt-1 pb-6">
                    <button class="bg-transparent text-yellow-500 outline-none focus:outline-none">
                        ${this._buttonText}
                    </button>
                </div>
            </div>
        `;

        this.querySelector('button').addEventListener('click', this._viewMealHandler);
    }
}

customElements.define('meal-item', MealItem);