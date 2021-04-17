import 'regenerator-runtime';
import API from '../const/API.js';

class MealService {
    static searchMeals(keyword = '') {
        return fetch(`${API.searchMeal}?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                }
                else {
                    return Promise.reject(`Sorry, we can't find "${keyword}" meal.`);
                }
            });
    }
}

export default MealService;