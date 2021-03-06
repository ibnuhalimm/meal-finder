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


    static getCategories(keyword = '') {
        return fetch(`${API.categories}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.categories) {
                    return Promise.resolve(responseJson.categories);
                }
                else {
                    return Promise.reject(`Sorry, we can't find "${keyword}" meal.`);
                }
            });
    }
}

export default MealService;