(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-room-open-g]'),
        openNextModalBtn: document.querySelector('[data-modal-room-open-f]'),
        openModalDuplicateBtn: document.querySelector('[data-modal-room-open-y]'),
        closeModalBtn: document.querySelector('[data-modal-room-close]'),
        modal: document.querySelector('[data-modal-room]'),
        body: document.querySelector('body'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openNextModalBtn.addEventListener('click', toggleModal);
    refs.openModalDuplicateBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }
})();
