import '../../css/style.css';

const loadContent = () => {
    const pageContent = document.querySelector('main');
    pageContent.innerHTML = '<h1 class="text-2xl">Title Page Here</h1>';
};

document.addEventListener('DOMContentLoaded', loadContent);