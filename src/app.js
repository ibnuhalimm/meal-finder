import './css/style.css';

const loadContent = () => {
    document.body.innerHTML = `
        <h1 class="text-center mt-20 xl:text-2xl xl:text-red-500">Hi, I am Heading</h1>
    `;
};

document.addEventListener('DOMContentLoaded', loadContent);