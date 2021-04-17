import '../../css/style.css';
import '../components/content-page.js';

const loadContent = () => {
    const pageContent = document.querySelector('content-page');
    pageContent.innerHTML = '<h1 class="text-2xl">Title Page Here</h1>';
};

document.addEventListener('DOMContentLoaded', loadContent);