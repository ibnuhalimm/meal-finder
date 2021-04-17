import 'regenerator-runtime';
import '../../css/style.css';
import '../components/title-page.js';
import '../components/content-page.js';
import '../components/message-info.js';
import '../components/category-list.js';
import MealService from '../services/MealService';


const renderView = () => {
    const pageContent = document.querySelector('content-page');
    const titlePage = document.createElement('title-page');
    const messageInfo = document.createElement('message-info');
    const categoryList = document.createElement('category-list');

    titlePage.text = 'Categories';
    pageContent.appendChild(titlePage);
    pageContent.appendChild(messageInfo);

    const getCategories = async () => {
        categoryList.meals = null;
        messageInfo.text = 'Loading...';

        try {
            const categories = await MealService.getCategories();
            categoryList.categories = categories;

            messageInfo.text = null;
            pageContent.appendChild(categoryList);

        } catch (error) {
            messageInfo.text = error;

        }
    };

    getCategories();
};

document.addEventListener('DOMContentLoaded', renderView);