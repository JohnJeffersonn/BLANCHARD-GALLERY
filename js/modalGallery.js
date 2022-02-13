{
    function setmodal(params) {
        const openBtn = document.querySelector(`.${params.openBtnClass}`);
        const modal = document.querySelector(`.${params.modalBlock}`);
        const closeBtn = modal.querySelector(`.${params.closeBtnClass}`);


        modal.addEventListener("animationend", function(evt) {
            if (this._isOpened) {
                this.classList.remove(params.activeClass);
                this.classList.remove(params.hiddenClass);
                body.classList.remove(params.activeClass)
                this._isOpened = false;
            } else {
                this._isOpened = true;
            }
        });

        modal.addEventListener('click', function(evt) {
            evt._ismodal = true;
        });

        openBtn.addEventListener("click", function(evt) {


            if (!modal.classList.contains(params.activeClass) &&
                !modal.classList.contains(params.hiddenClass)
            ) {
                body.classList.add(params.activeClass);
                modal.classList.add(params.activeClass);
            }
        });

        closeBtn.addEventListener('click', function() {
            openBtn.style.opacity = 1;
            modal.classList.add(params.hiddenClass);


        });

        document.body.addEventListener('click', function(evt) {
            if (!evt._ismodal && modal._isOpened) {
                openBtn.style.opacity = 1;
                modal.classList.add(params.hiddenClass);

            }
        });
    }

    setmodal({
        openBtnClass: "js-open-modal", // класс кнопки открытия
        closeBtnClass: "js-close-mod", // класс кнопки закрытия
        modalBlock: "js-mod", // класс формы поиска
        activeClass: "is-opened-mod", // класс открытого состояния
        hiddenClass: "is-closed-mod", // класс закрывающегося состояния (удаляется сразу после закрытия)

    });
}
const btns = document.querySelectorAll('.js-open-modal');
const modalOverlay = document.querySelector('.js-mod');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});