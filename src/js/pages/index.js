import '../../css/style.css';
import '../components/content-page.js';

const loadContent = () => {
    const pageContent = document.querySelector('content-page');
    pageContent.innerHTML = `<h1 class="text-2xl">Home</h1>`;
    pageContent.innerHTML += `
        <div class="mt-5 w-full md:w-1/2 lg:w-1/3 bg-white">
            <div class="flex flex-row border border-solid border-gray-300 rounded-md px-5 py-3">
                <input type="text" class="w-full outline-none focus:outline-none" placeholder="Find any meal..." />
                <button type="submit" class="ml-3 outline-none focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="mt-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-44 md:h-36 lg:h-32 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/media/meals/1548772327.jpg')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Baked salmon with fennel & tomatoes</h2>
                    </div>
                    <div class="text-center pt-1 pb-6">
                        <button class="bg-transparent text-yellow-500 outline-none focus:outline-none">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-44 md:h-36 lg:h-32 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Portuguese fish stew (Caldeirada de peixe)</h2>
                    </div>
                    <div class="text-center pt-1 pb-6">
                        <button class="bg-transparent text-yellow-500 outline-none focus:outline-none">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-44 md:h-36 lg:h-32 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Cajun spiced fish tacos</h2>
                    </div>
                    <div class="text-center pt-1 pb-6">
                        <button class="bg-transparent text-yellow-500 outline-none focus:outline-none">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-44 md:h-36 lg:h-32 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/media/meals/1520084413.jpg')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Escovitch Fish</h2>
                    </div>
                    <div class="text-center pt-1 pb-6">
                        <button class="bg-transparent text-yellow-500 outline-none focus:outline-none">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-44 md:h-36 lg:h-32 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Fish fofos</h2>
                    </div>
                    <div class="text-center pt-1 pb-6">
                        <button class="bg-transparent text-yellow-500 outline-none focus:outline-none">
                            View Details
                        </button>
                    </div>
                </div>
                <div class="bg-white shadow-md border border-solid border-gray-100 rounded-md">
                    <div class="h-44 md:h-36 lg:h-32 xl:h-40 bg-no-repeat bg-cover bg-center rounded-md rounded-bl-none rounded-br-none" style="background-image: url('https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg')"></div>
                    <div class="px-6 py-4 text-center font-bold">
                        <h2 class="truncate">Fish pie</h2>
                    </div>
                    <div class="text-center pt-1 pb-6">
                        <button class="bg-transparent text-yellow-500 outline-none focus:outline-none">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};

document.addEventListener('DOMContentLoaded', loadContent);