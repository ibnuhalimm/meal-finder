import MealService from '../services/MealService.js';
import './meal-item.js';
import './meal-modal.js';


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

        const modalViewMeal = document.createElement('meal-modal');

        if (this._meals !== undefined && this._meals !== null) {
            this._meals.map(meal => {
                const mealItem = document.createElement('meal-item');
                mealItem.meal = meal;
                mealItem.viewMealHandler = async () => {
                    mealItem.buttonText = 'Please wait...';

                    try {
                        const mealData = await MealService.mealDetail(meal.idMeal);
                        modalViewMeal.image = mealData.strMealThumb;
                        modalViewMeal.name = mealData.strMeal;
                        modalViewMeal.category = mealData.strCategory;
                        modalViewMeal.country = mealData.strArea;
                        modalViewMeal.instructions = mealData.strInstructions;
                        modalViewMeal.show = true;

                    } catch (error) {
                        alert(error);

                    }

                    mealItem.buttonText = 'View Details';
                };

                this.appendChild(mealItem);
            });
        }

        this.appendChild(modalViewMeal);
        // modalViewMeal.show = true;
    }
}

customElements.define('meal-list', MealList);