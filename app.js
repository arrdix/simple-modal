const btnOpen = document.querySelector('.modal-btn');
const btnCls = document.querySelector('.close-btn');
const modOverlay = document.querySelector('.modal-overlay');

    btnOpen.addEventListener('click', function() {

        modOverlay.classList.add('open-modal');

    })

    btnCls.addEventListener('click', function() {

        modOverlay.classList.remove('open-modal');

    })