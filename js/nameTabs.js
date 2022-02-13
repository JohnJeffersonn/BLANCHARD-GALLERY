document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__content-tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.tab-content-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-content-active')
        })

    })
})