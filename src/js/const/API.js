const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

const API = {
    searchMeal: `${baseUrl}/search.php`,
    viewMeal: `${baseUrl}//lookup.php`,
    categories: `${baseUrl}/categories`
};

export default API;