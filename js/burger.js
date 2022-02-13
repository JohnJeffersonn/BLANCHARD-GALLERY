// window.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('#burger').addEventListener('click', function() {
//         document.querySelector('#menu').classList.toggle('header-burger-is-active')
//             // document.querySelector('.hero').classList.toggle('header-burger-is-active')
//             // document.querySelector('.header__nav-list').classList.toggle('header-burger-is-active')
//             // document.querySelector('.header__nav-item').classList.toggle('header-burger-is-active')
//     })
// })
// window.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('#burger').addEventListener('click', function() {
//         this.classList.toggle('header-burger-is-active')
//     })
// })
const body = document.querySelector('body')
const btnSearch = document.querySelector('.header__burger')





btnSearch.addEventListener('click', function() {
        if (!body.classList.contains('header-burger-is-active')) {
            body.classList.add('header-burger-is-active')
        } else {
            body.classList.remove('header-burger-is-active')
        }
    })
    // btnSearch2.addEventListener('click', function() {
    //     if (!body.classList.contains('form__search-top-is-active')) {
    //         body.classList.remove('form__search-top-is-active')
    //     }
    // })