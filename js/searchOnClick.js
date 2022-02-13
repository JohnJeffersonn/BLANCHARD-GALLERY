// const bodyS = document.querySelector('body')
// const btnSearch2 = document.querySelector('.header__btn-search')
// const btnSearch3 = document.querySelector('.header__form-close-btn')




// btnSearch2.addEventListener('click', function() {
//     if (!bodyS.classList.contains('form__search-top-is-active')) {
//         bodyS.classList.add('form__search-top-is-active')
//     } else {
//         bodyS.classList.remove('form__search-top-is-active')
//     }
// })
// btnSearch3.addEventListener('click', function() {

//         bodyS.classList.remove('form__search-top-is-active')

//     })


function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);


    search.addEventListener("animationend", function(evt) {
        if (this._isOpened) {
            this.classList.remove(params.activeClass);
            this.classList.remove(params.hiddenClass);
            body.classList.remove(params.activeClass)
            this._isOpened = false;
        } else {
            this._isOpened = true;
        }
    });

    search.addEventListener('click', function(evt) {
        evt._isSearch = true;
    });

    openBtn.addEventListener("click", function(evt) {
        this.style.opacity = 0;

        if (!search.classList.contains(params.activeClass) &&
            !search.classList.contains(params.hiddenClass)
        ) {
            body.classList.add(params.activeClass);
            search.classList.add(params.activeClass);
        }
    });

    closeBtn.addEventListener('click', function() {
        openBtn.style.opacity = 1;
        search.classList.add(params.hiddenClass);


    });

    document.body.addEventListener('click', function(evt) {
        if (!evt._isSearch && search._isOpened) {
            openBtn.style.opacity = 1;
            search.classList.add(params.hiddenClass);

        }
    });
}

setSearch({
    openBtnClass: "js-open-search", // класс кнопки открытия
    closeBtnClass: "js-close", // класс кнопки закрытия
    searchClass: "js-form", // класс формы поиска
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)

});