(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-table-open-d]'),
        openOtherModalBtn: document.querySelector('[data-modal-table-open-s]'),
        closeModalBtn: document.querySelector('[data-modal-table-close]'),
        modal: document.querySelector('[data-modal-table]'),
        body: document.querySelector('body'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openOtherModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }
})();