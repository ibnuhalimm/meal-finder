import '../../css/style.css';
import '../components/content-page.js';

const loadContent = () => {
    const pageContent = document.querySelector('content-page');
    pageContent.innerHTML = `<h1 class="text-2xl">About</h1>`;
    pageContent.innerHTML += `
        <div class="mt-5">
            <p class="text-gray-700">
                MealFinder is a simple application built with on top of javascript.
                Implementation of the javascript fundamentals for front-end such as consuming API using fetch and how to use webpack inside of nodejs.<br>
                The meal data provided by <a href="https://themealdb.com" target="_blank" class="text-yellow-500 underline">themealdb.com</a>.
            </p>
        </div>
        <div class="mt-10">
            <h2 class="text-2xl">License</h2>
            <p class="mt-2 text-gray-700">
                Feel free to star or fork to this app.
                <a href="https://github.com/ibnuhalimm/meal-finder" target="_blank" class="text-yellow-500 underline">The code</a> is open-sourced software under the <a href="https://opensource.org/licenses/MIT" target="_blank" class="text-yellow-500 underline">MIT License</a>.
            </p>
        </div>
    `;
};

document.addEventListener('DOMContentLoaded', loadContent);