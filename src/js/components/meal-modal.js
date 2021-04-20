class MealModal extends HTMLElement {
    connectedCallback() {
        document.body.classList.remove('modal-active');
        this._hideClass = 'opacity-0 pointer-events-none';
        this._imageUrl = '#';
        this._nameText = '-';
        this._categoryText = '-';
        this._countryText = '-';
        this._instructionsText = '-';
        this.render();
    }

    set show(isShow = false) {
        if (isShow === true) {
            this._hideClass = '';
            document.body.classList.add('modal-active');
        }
        else {
            document.body.classList.remove('modal-active');
            this._hideClass = 'opacity-0 pointer-events-none';
        }

        this.render();
    }

    set image(imageUrl) {
        this._imageUrl = imageUrl;
        this.render();
    }

    set name(nameText) {
        this._nameText = nameText;
        this.render();
    }

    set category(categoryText) {
        this._categoryText = categoryText;
        this.render();
    }

    set country(countryText) {
        this._countryText = countryText;
        this.render();
    }

    set instructions(instructionsText) {
        this._instructionsText = instructionsText;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="w-full h-full fixed inset-0 z-40 transition-opacity duration-500 ${this._hideClass}" id="__modalChooseSite">
                <div class="absolute w-full h-full bg-gray-900 bg-opacity-80 z-40"></div>
                <div class="relative w-11/12 sm:w-3/5 xl:w-2/5 mx-auto px-6 py-6 bg-white mt-10 h-auto z-50 rounded-lg">
                    <div class="mb-8 text-center">
                        <h4 class="font-bold text-lg text-ib-one">
                            Meal Details
                        </h4>
                        <button type="button" class="absolute right-0 top-0 mt-6 mr-6 text-gray-600 outline-none focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <div class="px-2 h-auto max-h-[32rem] sm:max-h-[14rem] md:max-h-[25rem] xl:max-h-[22rem] overflow-y-auto">
                            <div class="mb-6 sm:w-1/2 lg:w-1/4 xl:w-1/3 mx-auto">
                                <img src="${this._imageUrl}" class="w-full h-auto rounded-md mb-3">
                                <h3 class="font-bold text-center text-xl text-yellow-500">${this._nameText}</h3>
                            </div>
                            <div class="mb-5">
                                <h4 class="font-bold">
                                    Category
                                </h4>
                                <p class="text-gray-700">${this._categoryText}</p>
                            </div>
                            <div class="mb-5">
                                <h4 class="font-bold">
                                    Country
                                </h4>
                                <p class="text-gray-700">${this._countryText}</p>
                            </div>
                            <div class="mb-5">
                                <h4 class="font-bold">
                                    Instructions
                                </h4>
                                <p class="text-gray-700">${this._instructionsText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.querySelector('button').addEventListener('click', () => {
            this.show = false;
            this.render();
        });
    }
}

customElements.define('meal-modal', MealModal);