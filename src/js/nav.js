import './components/app-navbar.js';

const appNavbar = document.querySelector('app-navbar');

const openSidebarHandler = () => {
    const sidebarMenu = document.querySelector('#__sidebarMenu');
    const backdropSidebar = document.querySelector('#__backdropSidebar');

    backdropSidebar.classList.remove('opacity-0');
    backdropSidebar.classList.remove('pointer-events-none');
    backdropSidebar.classList.add('opacity-100');

    sidebarMenu.classList.remove('right-sidebar--close');
    sidebarMenu.classList.add('right-sidebar--open');
};


const closeSidebarHandler = () => {
    const sidebarMenu = document.querySelector('#__sidebarMenu');
    const backdropSidebar = document.querySelector('#__backdropSidebar');

    backdropSidebar.classList.remove('opacity-100');
    backdropSidebar.classList.add('opacity-0');
    backdropSidebar.classList.add('pointer-events-none');

    sidebarMenu.classList.remove('right-sidebar--open');
    sidebarMenu.classList.add('right-sidebar--close');
};

appNavbar.openSidebarHandler = openSidebarHandler;
appNavbar.closeSidebarHandler = closeSidebarHandler;