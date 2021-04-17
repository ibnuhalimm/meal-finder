import '../../css/style.css';
import '../components/content-page.js';

const loadContent = () => {
    const pageContent = document.querySelector('content-page');
    pageContent.innerHTML = `<h1 class="text-2xl">Category</h1>`;
    pageContent.innerHTML += `
        <div class="mt-5">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-28 md:h-24 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/category/beef.png')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Beef</h2>
                    </div>
                </div>
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-28 md:h-24 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/category/chicken.png')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Chicken</h2>
                    </div>
                </div>
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-28 md:h-24 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/category/dessert.png')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Dessert</h2>
                    </div>
                </div>
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-28 md:h-24 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/category/lamb.png')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Lamb</h2>
                    </div>
                </div>
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-28 md:h-24 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/category/miscellaneous.png')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Miscellaneous</h2>
                    </div>
                </div>
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-28 md:h-24 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/category/pasta.png')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Pasta</h2>
                    </div>
                </div>
            </div>
        </div>
    `;
};

document.addEventListener('DOMContentLoaded', loadContent);