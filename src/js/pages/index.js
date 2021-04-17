import 'regenerator-runtime';
import '../../css/style.css';
import '../components/search-bar.js';
import '../components/meal-list.js';
import '../components/message-info.js';
import MealService from '../services/MealService';


const renderView = () => {
    const searchBar = document.createElement('search-bar');
    const pageContent = document.querySelector('content-page');
    const mealList = document.createElement('meal-list');
    const messageInfo = document.createElement('message-info');

    pageContent.appendChild(searchBar);
    pageContent.appendChild(mealList);
    pageContent.appendChild(messageInfo);


    const getMeals = async () => {
        mealList.meals = null;
        messageInfo.text = 'Loading...';

        try {
            const meals = await MealService.searchMeals(searchBar.value);
            mealList.meals = meals;

            messageInfo.text = null;
            pageContent.appendChild(mealList);

        } catch (error) {
            messageInfo.text = error;

        }
    };

    getMeals();
    searchBar.onClickButton = getMeals;
};

document.addEventListener('DOMContentLoaded', renderView);