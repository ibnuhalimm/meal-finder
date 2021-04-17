class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }


    set openSidebarHandler(event) {
        this._openSidebarHandler = event;
        this.render();
    }


    set closeSidebarHandler(event) {
        this._closeSidebarHandler = event;
        this.render();
    }


    render() {
        this.innerHTML = `
            <nav class="w-full fixed top-0 left-0 bg-yellow-500 text-white shadow-md">
                <div class="w-11/12 md:w-4/5 lg:w-3/4 mx-auto flex justify-between">
                    <div class="w-full md:w-2/3 py-4">
                        <div class="w-full mx-auto">
                            <div class="flex flex-row items-center justify-between">
                                <div class="w-1/2">
                                    <a href="index.html" class="font-bold text-xl">
                                        MealFinder
                                    </a>
                                </div>
                                <div class="w-1/2 text-right md:hidden">
                                    <button class="outline-none focus:outline-none py-1" id="__btnOpenSidebar">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:hidden w-full h-full fixed inset-0 z-20 transition-opacity duration-500 opacity-0 pointer-events-none" id="__backdropSidebar">
                        <div class="absolute w-full h-full bg-gray-900 bg-opacity-50 z-40"></div>
                    </div>

                    <div class="right-sidebar--close transform fixed md:relative top-0 right-0 w-3/5 sm:w-1/3 md:w-1/3 h-full md:h-auto bg-white md:bg-transparent ease-in-out transition-all duration-300 z-30 border md:border-0 border-solid border-t-0 border-r-0 border-b-0 border-gray-100" id="__sidebarMenu">
                        <div class="w-11/12 md:w-full mx-auto md:h-auto flex flex-col">
                            <div class="text-right md:hidden">
                                <button type="button" class="outline-none focus:outline-none px-2 py-5" id="__btnCloseSidebar">
                                    <svg class="w-7 h-auto text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="w-full mt-10 md:mt-[0.10rem] md:flex md:flex-row md:justify-end">
                                <a href="index.html" class="block w-full text-right md:text-center px-6 md:px-4 py-4 text-lg md:text-base text-yellow-500 md:text-white">
                                    Home
                                </a>
                                <a href="category.html" class="block w-full text-right md:text-center px-6 md:px-4 py-4 text-lg md:text-base text-yellow-500 md:text-white">
                                    Categories
                                </a>
                                <a href="#" class="block w-full text-right md:text-center px-6 md:px-4 py-4 text-lg md:text-base text-yellow-500 md:text-white">
                                    About
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        this.querySelector('#__btnOpenSidebar').addEventListener('click', this._openSidebarHandler);
        this.querySelector('#__btnCloseSidebar').addEventListener('click', this._closeSidebarHandler);
        this.querySelector('#__backdropSidebar').addEventListener('click', this._closeSidebarHandler);
    }
}

customElements.define('app-navbar', AppNavbar);